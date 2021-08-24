import { Button } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  textButton: {
    padding: "6px 10px",
    fontWeight: 400,
    transition: "none",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  prompt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "6px 16px",
    borderBottom: "solid 1px rgba(0,0,0,0.2);",
    borderTop: "solid 1px rgba(0,0,0,0.2);",
  },
}));

const Prompt = ({onCancel, onClose}) => {
  const classes = useStyles();

  return (
    <div className={classes.prompt}>
      <Typography variant="body2">Cancel changes?</Typography>
      <div>
        <Button
          className={classes.textButton}
          color="primary"
          onClick={onCancel}
        >
          <Typography variant="subtitle2">No</Typography>
        </Button>
        <Button
          className={classes.textButton}
          color="primary"
          onClick={onClose}
        >
          <Typography variant="subtitle2">Yes</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Prompt;
