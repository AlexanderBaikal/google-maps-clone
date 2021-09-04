import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  List,
  makeStyles,
} from "@material-ui/core";

import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import { useEffect } from "react";
import { DESCRIPTION_BAR } from "../../../redux/active/actions";

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

const History = ({
  setPlacePosition,
  setSearchPrompt,
  historyItems,
  setActiveBar,
  setDescriptionData,
  setUnderSearchBar,
  loading,
  content,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (!loading && content) {
      setUnderSearchBar(true)
      setActiveBar(DESCRIPTION_BAR);
    }
  }, [loading, content]);

  const onPlaceClick = (coords, name) => {
    setDescriptionData(name);
    setPlacePosition(coords);
    if (setSearchPrompt) setSearchPrompt();
  };

  return historyItems && historyItems.length ? (
    <List>
      {historyItems.map((item) => (
        <ListItem
          button
          key={item.name}
          className={classes.listItem}
          onClick={() => onPlaceClick(item.coords, item.name)}
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
