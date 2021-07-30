import { createTheme } from "@material-ui/core";

const theme = createTheme({});
theme.overrides = {
  MuiPaper: {
    rounded: {
      borderRadius: "8px",
    },
    elevation2: {
      boxShadow: "0 2px 4px rgb(0 0 0 / 20%), 0 -1px 0px rgb(0 0 0 / 2%)",
    },
  },
};

export default theme;
