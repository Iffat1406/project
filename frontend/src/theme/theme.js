// src/theme/theme.js
import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

export const createAppTheme = (mode = "light") => {
  const isLight = mode === "light";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.colors.primary.main,
        light: tokens.colors.primary.light,
        dark: tokens.colors.primary.dark,
        contrastText: tokens.colors.primary.contrastText,
      },
      secondary: {
        main: tokens.colors.secondary.main,
        light: tokens.colors.secondary.light,
        dark: tokens.colors.secondary.dark,
        contrastText: tokens.colors.secondary.contrastText,
      },
      error: {
        main: tokens.colors.error.main,
      },
      warning: {
        main: tokens.colors.warning.main,
      },
      info: {
        main: tokens.colors.info.main,
      },
      success: {
        main: tokens.colors.success.main,
      },
      background: {
        default: isLight
          ? tokens.colors.background.defaultLight
          : tokens.colors.background.defaultDark,
        paper: isLight
          ? tokens.colors.background.paperLight
          : tokens.colors.background.paperDark,
      },
      text: {
        primary: isLight
          ? tokens.colors.text.primary
          : "#e0e0e0",
        secondary: isLight
          ? tokens.colors.text.secondary
          : "#b0b0b0",
      },
      divider: tokens.colors.divider,
    },

    typography: {
      ...tokens.typography,
    },

    shape: {
      borderRadius: tokens.radius.medium,
    },

    spacing: tokens.spacing,

    shadows: [
      "none",
      tokens.shadows.small,
      tokens.shadows.medium,
      tokens.shadows.large,
    ],

    components: {
      // Button styling
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: tokens.radius.small,
            fontWeight: 600,
            textTransform: "none",
            padding: "10px 18px",
          },
          containedPrimary: {
            backgroundColor: tokens.colors.primary.main,
            "&:hover": {
              backgroundColor: tokens.colors.primary.dark,
            },
          },
          containedSecondary: {
            backgroundColor: tokens.colors.secondary.main,
            "&:hover": {
              backgroundColor: tokens.colors.secondary.dark,
            },
          },
        },
      },

      // Card styling
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: tokens.radius.medium,
            boxShadow: tokens.shadows.medium,
            padding: "1rem",
          },
        },
      },

      // TextField styling
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          fullWidth: true,
        },
      },
    },
  });
};
