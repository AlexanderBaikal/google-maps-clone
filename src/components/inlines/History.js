import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  List,
  makeStyles,
} from "@material-ui/core";

import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";

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

const History = ({ historyItems, setPlacePosition, handleSearchPrompt }) => {
  const classes = useStyles();

  const onPlaceClick = (coords) => {
    setPlacePosition(coords);
    if (handleSearchPrompt) handleSearchPrompt(false);
  };

  return historyItems && historyItems.length ? (
    <List>
      {historyItems.map((item) => (
        <ListItem
          button
          key={item.name}
          className={classes.listItem}
          onClick={() => onPlaceClick(item.coords)}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <ScheduleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      ))}
    </List>
  ) : null;
};

export default History;
