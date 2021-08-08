import { Button, makeStyles } from "@material-ui/core";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

const useStyles = makeStyles((theme) => ({
  root: {},
  textButton: {
    padding: "6px 10px",
    marginBottom: "8px",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  buttonRounded: {
    borderRadius: "100px",
  },
  bottomButton: {
    display: "flex",
    justifyContent: "center",
  },
}));

const BottomButton = ({
  title = "",
  textButton = false,
  startIcon = null,
  onClick = () => {},
}) => {
  const classes = useStyles();
  const StartIcon = startIcon;
  const props = startIcon
    ? {
        variant: textButton ? "text" : "outlined",
        className: textButton ? classes.textButton : classes.buttonRounded,
        startIcon: <StartIcon color="primary" />,
      }
    : {
        variant: textButton ? "text" : "outlined",
        className: textButton ? classes.textButton : classes.buttonRounded,
      };
  return (
    <div
      className={classes.bottomButton}
      style={{ marginBottom: !textButton ? "12px" : 0 }}
    >
      <Button onClick={onClick} {...props}>
        {title}
      </Button>
    </div>
  );
};

export default BottomButton;
