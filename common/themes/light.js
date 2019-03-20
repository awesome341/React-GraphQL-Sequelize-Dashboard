"use strict";

const {
  darken,
  lighten,
  fade
} = require("@material-ui/core/styles/colorManipulator");
const {
  deepOrange,
  yellow,
  red,
  blueGrey
} = require("@material-ui/core/colors");

const primaryColor = "rgba(255, 255, 255, 0.9)";
const primaryBackground = "#2b446d";

const secondaryColor = "rgba(0, 0, 0, 0.9)";
const secondaryBackground = yellow[800];

const bgPage = "#e0e0f0";
const bgNormal = "#e0e0f0";
const bgPaper = lighten(bgPage, 0.4);

const textPrimary = "rgba(0, 0, 0, 0.9)";
const textSecondary = "rgba(0, 0, 0, 0.6)";
const textDisabled = "rgba(0, 0, 0, 0.35)";
const textError = red[400];
const textInfo = blueGrey[400];

const fontSize = 14;

module.exports = {
  name: "light",
  palette: {
    primary: {
      main: primaryBackground,
      contrastText: primaryColor
    },
    secondary: {
      main: secondaryBackground,
      contrastText: secondaryColor
    },
    background: {
      default: bgPage,
      paper: bgPaper
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: textDisabled,
      hint: textDisabled
    },
    error: {
      main: textError
    },
    divider: "rgba(255, 255, 255, 0.12)"
  },
  typography: {
    useNextVariants: true,
    fontSize: fontSize,
    fontFamily: ["Roboto", "sans-serif"].join(", ")
  },
  shape: {
    borderRadius: 3
  },
  header: {
    color: [primaryColor, "!important"],
    background: [primaryBackground, "!important"]
  },
  sidebar: {
    computerWidth: 30,
    tabletWidth: 20,
    phoneWidth: 20,
    background: darken(primaryBackground, 0.2),
    color: primaryColor,
    itemBackground: "transparent",
    itemBorder: "4px solid transparent",
    itemColor: primaryColor,
    itemHoverBackground: darken(bgPaper, 0.15),
    itemHoverColor: textPrimary,
    itemHoverBorder: `4px solid ${darken(secondaryBackground, 0.3)}`,
    itemSelectedBackground: darken(bgPaper, 0.05),
    itemSelectedColor: textPrimary,
    itemSelectedBorder: `4px solid ${secondaryBackground}`,
    itemSelectedHoverBackground: bgPaper,
    itemSelectedHoverColor: textPrimary,
    itemSelectedHoverBorder: `4px solid ${lighten(secondaryBackground, 0.05)}`
  },
  chart: {
    statColor: primaryBackground,
    mapColor: primaryColor,
    mapBackground: lighten(primaryBackground, 0.5),
    mapHoverBackground: darken(secondaryBackground, 0.15),
    mapSelectedBackground: secondaryBackground,
    lineColor: deepOrange[800],
    areaColor: fade(primaryBackground, 0.25)
  },
  form: {
    stepperBackground: darken(bgPaper, 0.05),
    stepperLine: textDisabled,
    stepperColor: textDisabled,
    stepperActive: textPrimary
  },
  main: {
    background: bgNormal,
    color: textPrimary,
    backdrop: "rgba(0, 0, 0, 0.85)",
    spinner: "#ffffff",
    spacing: 24,
    error: {
      background: fade(textError, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    },
    info: {
      background: fade(textInfo, 0.65),
      color: "#ffffff",
      borderRadius: 3,
      padding: "1rem 2rem"
    }
  },
  props: {
    MuiDialog: {
      scroll: "body"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        background: bgPaper,
        color: textPrimary
      }
    },
    MuiAvatar: {
      root: {
        borderRadius: 3
      }
    },
    MuiTableRow: {
      root: {
        //height: ["100%", "!important"],
        height: [48, "!important"]
      }
    },
    MuiTableBody: {
      root: {
        "& tr:last-child th, & tr:last-child td": {
          borderBottom: "none"
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${textDisabled}`
      },
      head: {
        fontSize: "0.9rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: textPrimary
      },
      body: {
        fontSize: "1rem",
        "&.selected": {
          background: darken(bgPaper, 0.15)
        }
      }
    },
    MuiTablePagination: {
      root: {
        borderTop: `1px solid ${textDisabled}`,
        fontSize: "0.9rem"
      },
      caption: {
        fontSize: "0.9rem"
      },
      toolbar: {
        height: [48, "!important"],
        minHeight: [48, "!important"]
      },
      selectIcon: {
        color: textSecondary
      }
    },
    MuiTabs: {
      scroller: {
        overflowX: ["hidden", "!important"],
        marginBottom: [0, "!important"]
      },
      scrollButtons: {
        height: 48
      },
      scrollButtonsAuto: {
        height: 48
      }
    },
    MuiTab: {
      root: {
        height: [48, "!important"]
      }
    },
    MuiIconButton: {
      root: {
        "&$disabled": {
          color: [textDisabled, "!important"]
        }
      }
    },
    MuiButton: {
      root: {
        "&$disabled": {
          "&:not($containedPrimary):not($containedSecondary)": {
            background: [darken(bgNormal, 0.25), "!important"],
            color: [darken(textPrimary, 0.25), "!important"]
          },
          "&$containedPrimary": {
            background: [lighten(primaryBackground, 0.25), "!important"],
            color: [darken(primaryColor, 0.25), "!important"]
          },
          "&$containedSecondary": {
            background: [darken(secondaryBackground, 0.25), "!important"],
            color: [darken(secondaryColor, 0.25), "!important"]
          }
        }
      }
    },
    MuiInput: {
      root: {
        "&$underline": {
          "&:before": {
            borderBottom: `2px solid ${textSecondary}`
          },
          "&:after": {
            borderBottom: `2px solid ${darken(secondaryBackground, 0.1)}`
          }
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderWidth: [2, "!important"]
        },
        "&:not($disabled):not($error) $notchedOutline": {
          borderColor: [textSecondary, "!important"]
        },
        "&:not($disabled):not($error):hover:not($focused) $notchedOutline": {
          borderColor: [textPrimary, "!important"]
        },
        "&:not($disabled):not($error)$focused $notchedOutline": {
          borderColor: [darken(secondaryBackground, 0.1), "!important"]
        },
        "&$disabled $notchedOutline": {
          borderStyle: "dotted",
          borderColor: [textSecondary, "!important"]
        }
      }
    },
    MuiFilledInput: {
      root: {
        background: [lighten(bgNormal, 0.1), "!important"],
        borderRadius: 4,
        "&:hover": {
          background: [lighten(bgNormal, 0.2), "!important"]
        },
        "&$focused": {
          background: [lighten(bgNormal, 0.2), "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$underline": {
          "&:before": {
            borderBottom: ["none", "!important"]
          },
          "&:after": {
            borderBottom: ["none", "!important"]
          }
        }
      }
    },
    MuiInputLabel: {
      root: {
        pointerEvents: "none",
        zIndex: 100,
        "&$focused": {
          color: [textPrimary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        },
        "&$filled": {
          color: [textSecondary, "!important"],
          "&$error": {
            color: [textError, "!important"]
          }
        }
      }
    },
    MuiListItemIcon: {
      root: {
        margin: [0, "!important"]
      }
    },
    MuiSelect: {
      icon: {
        color: textSecondary
      }
    },
    MuiCheckbox: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textSecondary, "!important"]
        }
      }
    },
    MuiRadio: {
      root: {
        color: [textSecondary, "!important"],
        "&$checked": {
          color: [textSecondary, "!important"]
        }
      }
    },
    MuiSwitch: {
      icon: {
        color: "#999999"
      },
      iconChecked: {
        color: darken(secondaryBackground, 0.15)
      }
    }
  }
};
