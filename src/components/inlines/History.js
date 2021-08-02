import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  List,
  makeStyles,
} from "@material-ui/core";

import  ScheduleOutlinedIcon  from "@material-ui/icons/ScheduleOutlined";

const useStyles = makeStyles((theme) => {
  return {
    history: {
      position: "relative",
      borderRadius: "0 0 8px 8px",
      zIndex: -1,
    },
    listItemText: {
      fontSize: "0.75rem",
    },
    listItem: {
      paddingTop: "5px",
    },
    listItemIcon: {
      minWidth: "47px",
      marginLeft: "3px",
      color: theme.palette.grey[500],
    },
  };
});

const History = ({ searchPrompt }) => {
  const classes = useStyles();

  const historyItems = ["United Kingdom", "Big Ben"];

  return (
    // <Paper elevation={!searchPrompt ? 0 : 2} className={classes.history}>
      <List>
        {historyItems.map((item) => (
          <ListItem button key={item} className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <ScheduleOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={item}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        ))}
      </List>
    // </Paper>
  );
};

export default History;
