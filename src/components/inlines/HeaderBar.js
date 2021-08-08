import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  subheader: {
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
  },

  subheaderButtons: {
    position: "absolute",
    right: "20px",
  },
}));

const HeaderBar = ({ buttons = null, title = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.subheader}>
      <Typography variant="subtitle1">{title}</Typography>
      {buttons ? (
        <div className={classes.subheaderButtons}>{buttons}</div>
      ) : null}
    </div>
  );
};

export default HeaderBar;
