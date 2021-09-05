import {
  Button,
  ClickAwayListener,
  DialogContent,
  Divider,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { IconButton, makeStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
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
  selectPaper: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
  },
}));

const EditItem = ({
  title,
  IconComponent,
  value,
  jsxValue,
  subTitle,
  extraIcon,
  onClick,
  onChange,
  onCancel,
  select = [],
  disableBlur=false
}) => {
  const classes = useStyles();

  const [inputValue, setinputValue] = useState(value || "");

  const [canceled, setCanceled] = useState(false);

  const handleCanceled = () => {
    setCanceled(!canceled);
    onCancel();
  };

  const changeInputValue = (e) => {
    setinputValue(e.target.value);
  };

  const [focused, setFocused] = useState(false);

  const onBlur = (e) => {
    if (onChange) onChange(e.target.value);
  };

  // const onFocus = (e) => {
  //   setFocused(true);
  // };

  const MySelector = () => {
    let selected = select
      .filter((el) =>
        el.name
          .toLowerCase()
          .startsWith(inputValue ? inputValue.toLowerCase() : "")
      )
      .slice(0, 3);

    return (
      <Paper square elevation={8} className={classes.selectPaper}>
        <List disablePadding>
          {selected.map((item, i) => (
            <div key={item.name}>
              <ListItem
                button
                onClick={(e) => {
                  setinputValue(item.name);
                  setFocused(false);
                  onChange(item.name)
                }}
              >
                <ListItemIcon>
                  <LocationOnIcon style={{ marginLeft: "8px" }} />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  primary={item.name}
                  secondaryTypographyProps={{ variant: "body2" }}
                  secondary={item.address}
                />
              </ListItem>
              {i < selected.length - 1 ? <Divider variant="inset" /> : null}
            </div>
          ))}
        </List>
      </Paper>
    );
  };

  return (
    <div className={classes.contentInput}>
      {IconComponent ? <IconComponent className={classes.inputIcon} /> : null}
      <div
        className={classes.inputDiv}
        style={!IconComponent ? { marginLeft: "34px" } : {}}
      >
        <div className={classes.inputLabel}>{title}</div>
        {subTitle ? <div className={classes.inputLabel}>{subTitle}</div> : null}
        {jsxValue ? (
          jsxValue
        ) : (
          <ClickAwayListener onClickAway={() => setFocused(false)}>
            <div onClick={onClick}>
              <Input
                value={inputValue}
                inputProps={{
                  style: { textDecoration: canceled ? "line-through" : "none" },
                }}
                className={classes.inputField}
                classes={{ underline: classes.underline }}
                onChange={changeInputValue}
                disabled={canceled ? true : false}
                onClick={() => setFocused(true)}
                onBlur={disableBlur ? ()=>{} : onBlur}
              />
              {extraIcon ? (
                <IconButton
                  className={classes.extraIcon}
                  onClick={extraIcon === "close" ? handleCanceled : onClick}
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
              {focused && select.length ? <MySelector /> : null}
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default EditItem;
