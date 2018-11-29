import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import ProfileIcon from "@material-ui/icons/AccountBox";
import ThemeIcon from "@material-ui/icons/ColorLens";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import Flag from "react-flags";
import l10n from "../../../common/locales";
import themes from "../../../common/themes";

const styles = theme => ({
  root: {
    position: "fixed",
    right: 0,
    top: 0,
    height: 50,
    left: theme.sidebar.computerWidth * theme.spacing.unit,
    [theme.breakpoints.between("sm", "md")]: {
      left: theme.sidebar.tabletWidth * theme.spacing.unit
    },
    [theme.breakpoints.down("xs")]: {
      left: 0
    }
  },
  bar: {
    transition: "all 0.25s ease-in-out"
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    [theme.breakpoints.down("md")]: {
      flexGrow: 1
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,
    transition: theme.transitions.create("width"),
    width: 300,
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing.unit
    }
  },
  menu: {
    background: theme.palette.primary.main,
    "& svg": {
      color: [theme.palette.primary.contrastText, "!important"]
    }
  }
});

class Header extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    cookie: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    onSetLocale: PropTypes.func.isRequired,
    onSignOut: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isWrapperHovered: false,
      isBarHovered: false,
      anchorLocales: null,
      anchorThemes: null
    };

    this.isDestroyed = false;

    this.handleWrapperMouseEnter = this.handleWrapperMouseEnter.bind(this);
    this.handleWrapperMouseLeave = this.handleWrapperMouseLeave.bind(this);
    this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.handleBarMouseEnter = this.handleBarMouseEnter.bind(this);
    this.handleBarMouseLeave = this.handleBarMouseLeave.bind(this);
    this.handleLocalesOpen = this.handleLocalesOpen.bind(this);
    this.handleThemesOpen = this.handleThemesOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  handleWrapperMouseEnter() {
    if (!this.state.isWrapperHovered) this.setState({ isWrapperHovered: true });
  }

  handleWrapperMouseLeave() {
    if (this.state.isWrapperHovered) this.setState({ isWrapperHovered: false });
  }

  handleWrapperClick(event) {
    event.stopPropagation();
    if (!this.state.isWrapperHovered) this.setState({ isWrapperHovered: true });
    const onWindowClick = () => {
      window.removeEventListener("click", onWindowClick);
      if (!this.isDestroyed && this.state.isWrapperHovered)
        this.setState({ isWrapperHovered: false });
    };
    window.addEventListener("click", onWindowClick);
  }

  handleBarMouseEnter() {
    if (!this.state.isBarHovered) this.setState({ isBarHovered: true });
  }

  handleBarMouseLeave() {
    if (this.state.isBarHovered) this.setState({ isBarHovered: false });
  }

  handleLocalesOpen(event) {
    this.setState({ anchorLocales: event.currentTarget });
  }

  handleLocaleSwitch(locale) {
    this.props.cookie.set("locale", locale);
    this.handleMenuClose();
    this.props.onSetLocale(locale);
  }

  handleThemesOpen(event) {
    this.setState({ anchorThemes: event.currentTarget });
  }

  handleThemeSwitch(theme) {
    this.props.cookie.set("theme", theme);
    this.handleMenuClose();
    window.location.reload(true);
  }

  handleMenuClose() {
    this.setState({
      anchorLocales: null,
      anchorThemes: null,
      isWrapperHovered: false,
      isBarHovered: false
    });
  }

  handleSignOut() {
    this.props.onSignOut();
  }

  renderLocales() {
    return (
      <Menu
        classes={{ paper: this.props.classes.menu }}
        anchorEl={this.state.anchorLocales}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!this.state.anchorLocales}
        onClose={this.handleMenuClose}
      >
        {_.map(l10n.locales, locale => (
          <MenuItem
            key={`locale-${locale}`}
            onClick={() => this.handleLocaleSwitch(locale)}
          >
            <ListItemIcon>
              <Flag
                name={l10n.flags[locale]}
                format="png"
                pngSize={24}
                basePath={process.env.APP_STATIC + "/static/img/flags"}
              />
            </ListItemIcon>
            <ListItemText>{l10n.names[locale]}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    );
  }

  renderThemes() {
    return (
      <Menu
        classes={{ paper: this.props.classes.menu }}
        anchorEl={this.state.anchorThemes}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!this.state.anchorThemes}
        onClose={this.handleMenuClose}
      >
        {_.map(_.keys(themes.names), theme => (
          <MenuItem
            key={`theme-${theme}`}
            onClick={() => this.handleThemeSwitch(theme)}
          >
            <ListItemIcon>
              <ThemeIcon />
            </ListItemIcon>
            <ListItemText>{themes.names[theme]}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    );
  }

  renderBar(isPermanent) {
    const isVisible =
      isPermanent || this.state.isWrapperHovered || this.state.isBarHovered;

    return (
      <AppBar
        className={this.props.classes.bar}
        elevation={10}
        position="static"
        color={isVisible ? "primary" : "secondary"}
        onMouseEnter={this.handleBarMouseEnter}
        onMouseLeave={this.handleBarMouseLeave}
        style={{
          transform: `translate3d(0, ${isVisible ? "0" : "-95%"}, 0)`
        }}
      >
        <Toolbar>
          <Hidden smDown>
            <Button color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
              &nbsp;&nbsp;
              <FormattedMessage id="HEADER_INBOX_LABEL" />
            </Button>
            <Button color="inherit">
              <ProfileIcon />
              &nbsp;&nbsp;
              <FormattedMessage id="HEADER_PROFILE_LABEL" />
            </Button>
            <Button color="inherit" onClick={this.handleLocalesOpen}>
              <Flag
                name={l10n.flags[this.props.locale]}
                format="png"
                pngSize={24}
                basePath={process.env.APP_STATIC + "/static/img/flags"}
              />
              &nbsp;&nbsp;
              {_.upperCase(this.props.locale)}
            </Button>
            <Button color="inherit" onClick={this.handleThemesOpen}>
              <ThemeIcon />
              &nbsp;&nbsp;
              {_.upperFirst(this.props.theme.name)}
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <ProfileIcon />
            </IconButton>
            <IconButton color="inherit" onClick={this.handleLocalesOpen}>
              <Flag
                name={l10n.flags[this.props.locale]}
                format="png"
                pngSize={24}
                basePath={process.env.APP_STATIC + "/static/img/flags"}
              />
            </IconButton>
            <IconButton color="inherit" onClick={this.handleThemesOpen}>
              <ThemeIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <div className={this.props.classes.grow} />
          </Hidden>
          <div className={this.props.classes.search}>
            <div className={this.props.classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: this.props.classes.inputRoot,
                input: this.props.classes.inputInput
              }}
            />
          </div>
          <Hidden smDown>
            <div className={this.props.classes.grow} />
          </Hidden>
          <IconButton color="inherit" onClick={this.handleSignOut}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
        {this.renderLocales()}
        {this.renderThemes()}
      </AppBar>
    );
  }

  render() {
    return (
      <div
        className={this.props.classes.root}
        onMouseEnter={this.handleWrapperMouseEnter}
        onMouseLeave={this.handleWrapperMouseLeave}
        onClick={this.handleWrapperClick}
      >
        <Hidden smUp initialWidth="lg">
          {this.renderBar(true)}
        </Hidden>
        <Hidden xsDown initialWidth="lg">
          {this.renderBar(false)}
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
