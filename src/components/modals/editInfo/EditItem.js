import { Button, DialogContent, Divider, Input } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import UndoIcon from "@material-ui/icons/Undo";

const useStyles = makeStyles((theme) => ({
  root: {},

  contentInput: {
    paddingTop: "8px",
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
  },
  inputIcon: {
    color: theme.palette.grey[600],
    paddingRight: "10px",
  },
  inputDiv: {
    width: "100%",
    position: "relative",
    marginBottom: "8px",
  },
  inputLabel: {
    color: "rgba(0,0,0,0.54)",
    fontSize: "12px",
    paddingTop: "4px",
    width: "100%",
  },
  inputField: {
    width: "100%",
    paddingTop: "12px",
    fontSize: "0.9rem",
  },
  iconSmall: {
    fontSize: "0.9rem",
  },
  extraIcon: {
    position: "absolute",
    right: "-8px",
    marginTop: "4px",
  },
  underline: {
    "&:before": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },
  },
}));

const EditItem = ({ title, IconComponent, value, subTitle, extraIcon, onClick }) => {
  const classes = useStyles();

  const [inputValue, setinputValue] = useState(value);

  const [canceled, setCanceled] = useState(false);
  const handleCanceled = () => setCanceled(!canceled);

  const changeInputValue = (e, value) => {
    setinputValue(value);
  };
  return (
    <div className={classes.contentInput} onClick={onClick}>
      {IconComponent ? <IconComponent className={classes.inputIcon} /> : null}
      <div
        className={classes.inputDiv}
        style={!IconComponent ? { marginLeft: "34px" } : {}}
      >
        <div className={classes.inputLabel}>{title}</div>
        {subTitle ? <div className={classes.inputLabel}>{subTitle}</div> : null}
        <Input
          value={inputValue}
          inputProps={{
            style: { textDecoration: canceled ? "line-through" : "none" },
          }}
          className={classes.inputField}
          classes={{ underline: classes.underline }}
          onChange={changeInputValue}
          disabled={canceled ? true : false}
        />
        {extraIcon ? (
          <IconButton
            className={classes.extraIcon}
            onClick={extraIcon === "close" ? handleCanceled : () => {}}
          >
            {extraIcon === "forward" ? (
              <ArrowForwardIosIcon
                fontSize="small"
                classes={{ fontSizeSmall: classes.iconSmall }}
              />
            ) : null}
            {extraIcon === "close" ? (
              canceled ? (
                <UndoIcon />
              ) : (
                <CloseIcon />
              )
            ) : null}
          </IconButton>
        ) : null}
      </div>
    </div>
  );
};

export default EditItem;
