// src/theme/tokens.js

export const tokens = {
  colors: {
    // Primary brand colors (used in buttons, links, highlights)
    primary: {
      main: "#1976d2", // Blue
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    // Secondary accent color (used for success, highlights, etc.)
    secondary: {
      main: "#2e7d32", // Green
      light: "#60ad5e",
      dark: "#005005",
      contrastText: "#ffffff",
    },
    // Error / Warning / Info
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#b71c1c",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
    },
    // Text colors
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#9e9e9e",
    },
    // Backgrounds
    background: {
      defaultLight: "#f5f5f5",
      paperLight: "#ffffff",
      defaultDark: "#121212",
      paperDark: "#1e1e1e",
    },
    // Divider / Borders
    divider: "#e0e0e0",
  },

  // Typography system
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    fontSize: 14,
    h1: { fontSize: 36, fontWeight: 700 },
    h2: { fontSize: 30, fontWeight: 600 },
    h3: { fontSize: 24, fontWeight: 600 },
    h4: { fontSize: 20, fontWeight: 500 },
    h5: { fontSize: 18, fontWeight: 500 },
    h6: { fontSize: 16, fontWeight: 500 },
    body1: { fontSize: 16 },
    body2: { fontSize: 14 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  // Spacing scale (used with theme.spacing)
  spacing: (factor) => `${0.25 * factor}rem`,

  // Shadows for cards, modals, buttons
  shadows: {
    small: "0px 2px 8px rgba(0, 0, 0, 0.05)",
    medium: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 24px rgba(0, 0, 0, 0.15)",
  },

  // Border radius system
  radius: {
    small: 6,
    medium: 10,
    large: 16,
  },
};
