import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
  },
  typography: {
    h1: {
      fontFamily: "Google Sans,Roboto,Arial,sans-serif",
      lineHeight: "1.75rem",
      fontSize: "1.375rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "13px",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: "Google Sans,Roboto,Arial,sans-serif",
      fontWeight: 500,
      lineHeight: "1.5rem",
      fontSize: "1rem",
      letterSpacing: ".00625em",
    },
    h3:{
      fontSize: "1.2rem",
    }
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

theme.overrides = {
  MuiPaper: {
    rounded: {
      borderRadius: "8px",
    },
    elevation2: {
      boxShadow: "0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%)",
    },
  },
  MuiButton: {
    root: { textTransform: "none" },
  },
  MuiTab:{
    root: { textTransform: "none" },
  },

};

export default theme;
