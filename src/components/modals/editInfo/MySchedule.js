import { TextField } from "@material-ui/core";



const MySchedule = ({ classes, onHoursClick, getWeekdayHours, content }) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  return (
    <TextField
      InputProps={{ className: classes.textFieldHours }}
      onClick={onHoursClick}
      InputProps={{classes:{ underline: classes.underline}}} 
      multiline
      value={days
        .map((item) => getWeekdayHours(item, content.schedule[item]))
        .join("\n")}
      fullWidth
    />
  );
};

export default MySchedule;
