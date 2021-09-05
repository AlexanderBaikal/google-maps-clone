import {
  Button,
  DialogContent,
  Divider,
  List,
  ListItem,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  ListItemText,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import AddPhotoBlock from "../nested/AddPhotoBlock";
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined";

const useStyles = makeStyles((theme) => ({
  root: {},

  dialogTitle: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    right: "8px",
    top: "4px",
    color: theme.palette.grey[700],
  },
  backButton: {
    position: "absolute",
    left: "8px",
    top: "4px",
    color: theme.palette.grey[700],
  },

  dialogContent: {
    padding: 0,
  },
  contentTitle: {
    padding: "14px 54px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: 500,
    fontFamily: "Google Sans, sans-serif",
  },
  centerButton: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "54px",
    width: "calc(100% - 74px)",
    marginTop: "14px",
    marginBottom: "4px",
    paddingTop: "30px",
    paddingBottom: "30px",
    backgroundColor: "#777",
  },
  bottomDiv: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "24px",
    marginRight: "20px",
  },
  wideButton: {
    marginBottom: "10px",
    marginTop: "30px",
    width: "100%",
    padding: "12px",
    borderColor: theme.palette.grey[400],
  },
  bottonIcon: {
    marginRight: "8px",
    marginBottom: "4px",
  },
  searchBlock: {
    display: "flex",
    justifyContent: "center",
    margin: "16px 48px",
  },
  searchIcon: {},
  formControl: {
    width: "100%",
  },
  inputOutlined: {
    borderRadius: "8px",
  },
  listItem: {
    padding: "0 36px",
    fontSize: "0.9rem",
  },
  listItemText: {
    fontSize: "0.9rem",
  },
  listItemEnd: {
    display: "flex",
    justifyContent: "end",
    minWidth: "0px",
    alignItems: "center",
  },
  listTitle: {
    marginLeft: "48px",
    marginTop: "12px",
  },
  fontSmall: {
    fontSize: "0.9rem",
  },
  notFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bottomButton: {
    borderRadius: "100px",
    paddingLeft: "10px",
    paddingRight: "12px",
  },
  bottomButtonContainer: {
    display: "flex",
    padding: "0 48px",
    justifyContent: "flex-end",
  },
  aboveButtonText: {},
  divider: {
    marginBottom: "20px",
    marginTop: "10px",
  },
  actions: {
    padding: "20px 20px",
  },
  actionButton: {
    margin: "0 4px",
    padding: "6px 24px",
  },
  topButton: {
    alignItems: "center",
    paddingTop: "12px",
    paddingBottom: "12px",
    marginLeft: "20px",
    marginRight: "30px",
    display: "flex",
    border: "1px solid #dadce0",
    boxSizing: "border-box",
    borderRadius: "8px",
    justifyContent: "space-between",
  },
  topButtonForward: {
    alignItems: "center",
    display: "flex",
    paddingLeft: "18px",
  },
  topButtonIcon: {
    marginRight: "20px",
    fontSize: "0.9rem",
  },
  doubleSpan: {
    display: "flex",
    flexDirection: "column",
  },
}));

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const EditHoursModal = ({
  setContent,
  content,
  setHoursModal,
  setScheduleModal,
  contentSnapshot,
  setSelectedWeekdays,
  newHours,
  setNewHours,
  photoFiles,
  setPhotoFiles,
}) => {
  const classes = useStyles();

  const onClose = () => {
    setNewHours(JSON.parse(JSON.stringify(content.schedule)));
    setHoursModal(false);
  };

  const [shadow, setShadow] = useState(false);

  const dialogRef = useCallback((node) => {
    if (node !== null) {
      node.addEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScroll = (e) => {
    if (e.target.scrollTop) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const [selected, setSelected] = useState(null);

  const handleSchedule = (key) => {
    setScheduleModal(true);
    setSelectedWeekdays([key.toLowerCase()]);
  };

  const onDoneClick = () => {
    setContent({ ...content, schedule: newHours });
    setHoursModal(false);
  };

  const getWeekdayValue = (item, variant = "old") => {
    let value;
    if (variant === "new") value = newHours[item.toLowerCase()];
    else value = contentSnapshot.schedule[item.toLowerCase()];
    if (value.closed) return "Closed";
    if (value.allDay) return "24 hours";
    return value.open + "-" + value.close;
  };

  const differValues = (item) => {
    let oldValue = getWeekdayValue(item, "old");
    if (!newHours) {
      return <span>{oldValue}</span>;
    }
    let newValue = getWeekdayValue(item, "new");
    if (oldValue === newValue) return <span>{newValue}</span>;
    else
      return (
        <div className={classes.doubleSpan}>
          <span style={{ textDecoration: "line-through" }}>{oldValue}</span>
          <span>{newValue}</span>
        </div>
      );
  };

  return (
    <>
      <DialogTitle
        className={classes.dialogTitle}
        style={{
          boxShadow: shadow
            ? "0 1px 2px rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)"
            : "none",
        }}
        onClose={onClose}
      >
        <div className={classes.title}>
          <Typography variant="h3" component="span">
            Hours
          </Typography>
          <Typography variant="body1" color="textSecondary" component="span">
            {content.name}
          </Typography>
        </div>

        <IconButton
          aria-label="close"
          className={classes.backButton}
          onClick={selected ? () => setSelected(null) : onClose}
        >
          <ArrowBackIcon />
        </IconButton>

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent classes={{ root: classes.dialogContent }} ref={dialogRef}>
        <div className={classes.topButton}>
          <div className={classes.topButtonForward}>
            <EditLocationOutlinedIcon style={{ marginRight: "20px" }} />
            <Typography variant="body2">
              Mark as temporarily or permanently closed
            </Typography>
          </div>

          <ArrowForwardIosIcon className={classes.topButtonIcon} />
        </div>
        <List>
          {weekdays.map((item) => (
            <ListItem
              key={item}
              className={classes.listItem}
              onClick={() => {}}
            >
              <ListItemText
                primaryTypographyProps={{
                  classes: { root: classes.listItemText },
                }}
                primary={item}
              />
              <div className={classes.listItemEnd}>
                {differValues(item)}
                <IconButton onClick={() => handleSchedule(item)}>
                  <CreateOutlinedIcon />
                </IconButton>
              </div>
            </ListItem>
          ))}
        </List>
        <div className={classes.bottomButtonContainer}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={classes.bottomButton}
            onClick={() => handleSchedule("Monday")}
          >
            <CreateOutlinedIcon fontSize="small" />
            <span style={{ marginLeft: "6px" }}>Edit Hours</span>
          </Button>
        </div>
        <div className={classes.bottomDiv}>
          <Divider variant="middle" className={classes.divider} />
          <Typography variant="body2" className={classes.aboveButtonText}>
            Take a close-up photo that clearly shows the hours for Google to
            scan
          </Typography>
          <AddPhotoBlock
            photoFiles={photoFiles}
            setPhotoFiles={setPhotoFiles}
          />
        </div>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button
          disableElevation
          autoFocus
          onClick={onClose}
          color="primary"
          className={classes.actionButton}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          disabled={false}
          onClick={onDoneClick}
          className={classes.actionButton}
        >
          DONE
        </Button>
      </DialogActions>
    </>
  );
};

export default EditHoursModal;
