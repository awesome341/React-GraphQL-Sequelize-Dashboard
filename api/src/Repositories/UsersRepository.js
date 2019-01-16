const debug = require("debug")("app:users");
const EventEmitter = require("events");
const {
  mongooseConnection: { cursorToDocument }
} = require("graphql-relay-connection");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository extends EventEmitter {
  constructor(di, auth, user, getState, dispatch) {
    super();

    this.di = di;
    this.auth = auth;
    this.user = user;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "auth", "model.user", "getState", "dispatch"];
  }

  async getUser(context, { id }) {
    debug("getUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    if (!id) return null;

    const user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");
    return user;
  }

  async countUsers(context) {
    debug("countUsers");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    return await this.user.model.countDocuments();
  }

  async getUsers(context, { after, first, before, last } = {}) {
    debug("getUsers");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    const docAfter = after && cursorToDocument(after);
    const docBefore = before && cursorToDocument(before);

    let params;
    if (docAfter || docBefore) {
      params = { _id: {} };
      if (docAfter) params._id.$gt = docAfter._id;
      if (docBefore) params._id.$lt = docBefore._id;
    }

    // eslint-disable-next-line lodash/prefer-lodash-method
    let query = this.user.model.find(params).sort("_id");
    if (first || last) query = query.limit(Math.max(first, last) + 1); // add +1 for hasNextPage
    return await query;
  }

  async createUser(context, { email, name, password, roles }) {
    debug("createUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    if (await this.user.model.findOne({ email }))
      throw this.di.get("error.entityExists");

    let user = new this.user.model({
      email,
      name,
      password: password && (await this.auth.encryptPassword(password)),
      roles
    });

    await user.validateField({ field: "password", value: password }); // before it is encrypted
    await user.validate();
    await user.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return user;
  }

  async editUser(context, { id, email, name, password, roles }) {
    debug("editUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");

    user.email = email;
    user.name = name;
    if (password) {
      await user.validateField({ field: "password", value: password }); // before it is encrypted
      user.password = await this.auth.encryptPassword(password);
    }
    user.roles = roles;

    await user.validate();
    await user.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return user;
  }

  async deleteUser(context, { id }) {
    debug("deleteUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");

    await user.remove();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return user;
  }
}

module.exports = UsersRepository;