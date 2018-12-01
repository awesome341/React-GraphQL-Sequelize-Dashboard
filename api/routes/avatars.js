const debug = require("debug")("app:avatars");
const fs = require("fs-extra");
const path = require("path");
const fetch = require("isomorphic-unfetch");
const concat = require("concat-stream");
const sharp = require("sharp");
const LRU = require("lru-cache");
const constants = require("../../common/constants");
const BaseRoute = require("./base");

/**
 * Avatars route
 */
class AvatarsRoute extends BaseRoute {
  /**
   * Constructor
   * @param {App} app
   */
  constructor(app) {
    super(app);

    this.tickInterval = 60 * 1000;
    this.fetchInterval = 60;
    this.selectInterval = 5;
    this.maxAvatars = 5; // 0 is our profile pic, 1-4 are used in dashboard
    this.largeWidth = 160;
    this.smallWidth = 60;

    this.avatars = {};
    this.selected = [];
    this.cache = new LRU(50);

    this.timer = null;
    this.fetchTime = 0;
    this.selectTime = 0;

    this.router.get("/avatars/:id", this.getAvatar.bind(this));
  }

  /**
   * Activate route
   */
  async init() {
    try {
      await this.fetch();
    } catch (error) {
      console.error(error);
    }

    if (process.env.NODE_ENV !== "test")
      this.timer = setInterval(this.tick.bind(this), this.tickInterval);
  }

  /**
   * Next tick
   */
  async tick() {
    let now = Date.now();
    try {
      if (now - this.fetchTime >= this.fetchInterval * this.tickInterval)
        await this.fetch();
      else if (now - this.selectTime >= this.selectInterval * this.tickInterval)
        await this.select();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *  Fetch avatars
   */
  async fetch() {
    if (process.env.NODE_ENV !== "test") console.log("> Fetching avatar list");
    let response = await fetch("https://tinyfac.es/api/users");
    if (response.status === 200) {
      let data = await response.json();
      if (_.isArray(data) && data.length) {
        this.fetchTime = Date.now();
        this.avatars = data;
        await this.select();
      }
    }
  }

  /**
   * Choose avatars
   */
  async select() {
    if (process.env.NODE_ENV !== "test") console.log("> Updating avatar list");

    this.avatars = _.shuffle(this.avatars);
    this.selected = [];

    let used = [];
    const getRandomAvatar = male => {
      for (let i = 0; i < this.avatars.length; i++) {
        if (this.avatars[i].gender !== (male ? "male" : "female")) continue;

        if (_.includes(used, i)) continue;

        for (let j = 0; j < this.avatars[i].avatars.length; j++) {
          if (
            this.avatars[i].avatars[j].width >= this.largeWidth &&
            this.avatars[i].avatars[j].height >= this.largeWidth &&
            Math.abs(
              this.avatars[i].avatars[j].width -
                this.avatars[i].avatars[j].height
            ) <= 10
          ) {
            used.push(i);
            return this.selected.push(this.avatars[i].avatars[j].url);
          }
        }
      }
      this.selected.push(null);
    };

    getRandomAvatar(true);
    getRandomAvatar(false);
    getRandomAvatar(true);
    getRandomAvatar(true);
    this.selectTime = Date.now();
  }

  /**
   * Get image
   * @param {string} url
   */
  async download(url) {
    try {
      let type;
      let data;
      if (url[0] !== "/" && url[0] !== "\\") {
        let response = await fetch(url);
        if (response.status === 200) {
          type = response.headers.get("Content-Type");
          data = await new Promise((resolve, reject) => {
            let concatStream = concat(resolve);
            response.body.on("error", reject);
            response.body.pipe(concatStream);
          });
        }
      } else {
        type = "image/png";
        data = fs.readFileSync(url);
      }

      return Promise.all([
        sharp(Buffer.from(data))
          .resize(this.largeWidth)
          .toBuffer(),
        sharp(Buffer.from(data))
          .resize(this.smallWidth)
          .toBuffer()
      ]).then(([dataLarge, dataSmall]) => ({
        type,
        dataLarge,
        dataSmall
      }));
    } catch (error) {
      console.error(error);
    }

    return null;
  }

  /**
   * GET /avatars/:id
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getAvatar(req, res, next) {
    debug("Got request");

    try {
      let image;
      let url;

      if (req.params.id === "0") {
        let user = await req.getUser();
        if (user) {
          for (let provider of user.providers) {
            if (provider.profile.photos && provider.profile.photos.length)
              url = provider.profile.photos[0].value;
            else if (provider.name === constants.oauthProviders.FACEBOOK)
              url = `https://graph.facebook.com/${
                provider.profile.id
              }/picture?type=large`;
            if (url && !_.startsWith(url, "http")) url = null;
            if (url) break;
          }
        } else {
          url = this.selected[parseInt(req.params.id) - 1];
        }
      } else {
        url = this.selected[parseInt(req.params.id) - 1];
      }

      if (!url) {
        url = path.join(
          __dirname,
          "..",
          "..",
          "static",
          "img",
          "anonymous.png"
        );
      }

      if (this.cache.has(url)) {
        image = this.cache.get(url);
      } else {
        image = await this.download(url);
        if (image) this.cache.set(url, image);
      }

      res.setHeader("Cache-Control", "public, must-revalidate, max-age=864000");

      if (image) {
        res.set("content-type", image.type);
        res.send(req.params.id === "0" ? image.dataLarge : image.dataSmall);
      } else {
        res.set("content-type", "image/svg+xml; charset=us-ascii");
        res.send(
          await fs.readFile(
            path.join(__dirname, "..", "..", "static", "img", "react-icon.svg")
          )
        );
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = AvatarsRoute;
