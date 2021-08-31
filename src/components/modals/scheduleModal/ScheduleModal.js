import {
  Avatar,
  Button,
  Checkbox,
  DialogContent,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useRef, useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {},
  dialog: {
    maxWidth: "560px",
    height: "400px",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  actions: {
    padding: "20px 20px",
  },
  dialogContent: {
    padding: 0,
    width: "560px",
  },
  contentTitle: {
    padding: "14px 54px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: 500,
    fontFamily: "Google Sans, sans-serif",
  },

  actionButton: {
    margin: "4px 2px",
  },
  weekdays: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "16px 0",
  },
  avatar: {
    width: "45px",
    height: "45px",
    color: "black",
    backgroundColor: "white",
    border: "1px solid #ccc",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  contentWrapper: {
    padding: "0 36px",
  },
  checkBoxes: {
    margin: "8px",
  },
  timeFields: {
    display: "flex",
    justifyContent: "space-between",
    margin: "24px 0",
    alignItems: "center",
  },
  timeInput: {
    width: "100%",
    margin: "0 6px",
  },
}));

const weekdays = [
  { key: "monday", value: "M" },
  { key: "tuesday", value: "T" },
  { key: "wednesday", value: "W" },
  { key: "thursday", value: "T" },
  { key: "friday", value: "F" },
  { key: "saturday", value: "S" },
  { key: "sunday", value: "S" },
];

const ScheduleModal = ({
  newHours,
  setNewHours,
  scheduleModal,
  setScheduleModal,
  selectedWeekdays,
  setSelectedWeekdays,
}) => {
  const classes = useStyles();

  const [opened24, setOpened24] = useState(false);

  const handleChangeOpened24 = () => {
    setClosed(false);
    setOpened24(true);
    var updatedSchedule = Object.assign({}, newSchedule);
    for (var day of selectedWeekdays) {
      updatedSchedule[day].closed = false;
      updatedSchedule[day].allDay = true;
    }
    setNewSchedule(updatedSchedule);
  };

  const [closed, setClosed] = useState(false);

  const handleChangeClosed = () => {
    setClosed(true);
    setOpened24(false);
    if (opened24) setOpened24(false);
    var updatedSchedule = Object.assign({}, newSchedule);
    for (var day of selectedWeekdays) {
      updatedSchedule[day].allDay = false;
      updatedSchedule[day].closed = true;
    }
    setNewSchedule(updatedSchedule);
  };

  const [openTime, setOpenTime] = useState(":");

  const handleChangeOpenTime = (e) => {
    setClosed(false);
    setOpened24(false);
    var value = e.target.value;
    setOpenTime(value);
    var updatedSchedule = Object.assign({}, newSchedule);
    for (var day of selectedWeekdays) {
      updatedSchedule[day].open = value;
      updatedSchedule[day].closed = false;
      updatedSchedule[day].allDay = false;
    }
    setNewSchedule(updatedSchedule);
  };

  const [closeTime, setCloseTime] = useState(":");

  const handleChangeCloseTime = (e) => {
    setClosed(false);
    setOpened24(false);
    var value = e.target.value;
    setCloseTime(value);
    var updatedSchedule = Object.assign({}, newSchedule);
    for (var day of selectedWeekdays) {
      updatedSchedule[day].close = value;
      updatedSchedule[day].closed = false;
      updatedSchedule[day].allDay = false;
    }
    setNewSchedule(JSON.parse(JSON.stringify(updatedSchedule)));
  };

  const onClose = () => {
    setNewSchedule(JSON.parse(JSON.stringify(newHours)));
    setScheduleModal(false);
  };

  const onSaveClick = () => {
    setNewHours(JSON.parse(JSON.stringify(newSchedule)));
    setScheduleModal(false);
  };

  const handleWeekdays = (i) => {
    if (selectedWeekdays.includes(i)) {
      setSelectedWeekdays([...selectedWeekdays.filter((el) => el !== i)]);
    } else {
      setSelectedWeekdays([...selectedWeekdays, i]);
    }
  };

  const [newSchedule, setNewSchedule] = useState(
    JSON.parse(JSON.stringify(newHours))
  );

  return (
    <Dialog open={scheduleModal} PaperProps={{ className: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <div className={classes.title}>
          <Typography variant="h3" component="span">
            Select days & time
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>
        <div className={classes.contentWrapper}>
          <div className={classes.weekdays}>
            {weekdays.map((item) => (
              <Avatar
                onClick={() => handleWeekdays(item.key)}
                key={item.key}
                className={classes.avatar}
                style={{
                  backgroundColor: selectedWeekdays.includes(item.key)
                    ? "#eeeeee"
                    : "white",
                }}
              >
                {item.value}
              </Avatar>
            ))}
          </div>
          <div className={classes.checkBoxes}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={opened24}
                  onChange={handleChangeOpened24}
                  name="checked24"
                  color="primary"
                />
              }
              label="Open 24 hours"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={closed}
                  onChange={handleChangeClosed}
                  name="checkedClosed"
                  color="primary"
                />
              }
              label="Closed"
            />
          </div>
          <div className={classes.timeFields}>
            <TextField
              id="open-time"
              label="Open time"
              type="time"
              variant="outlined"
              className={classes.timeInput}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChangeOpenTime}
              value={openTime}
              inputProps={{
                step: 300,
              }}
            />
            <TextField
              id="close-time"
              label="Close time"
              type="time"
              variant="outlined"
              className={classes.timeInput}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300,
              }}
              onChange={handleChangeCloseTime}
              value={closeTime}
            />
            <div>
              <IconButton onClick={handleChangeClosed}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
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
          disableElevation
          color="primary"
          disabled={false}
          onClick={onSaveClick}
          className={classes.actionButton}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleModal;
