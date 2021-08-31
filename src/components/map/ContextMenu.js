import "leaflet/dist/leaflet.css";
import "./_map.css";
import {
  ClickAwayListener,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { emptyContent } from "../../utils/emptyContent";

const useStyles = makeStyles({
  listItem: {
    padding: "4px 36px",
  },
  paper: {
    left: (props) => `${props.screenCoords.x}px`,
    top: (props) => `${props.screenCoords.y}px`,
    position: "absolute",
    zIndex: 21000,
    alignItems: "center",
    display: "flex",
  },
});

const ContextMenu = ({
  screenCoords,
  geoCoords,
  setOpened,
  setOpenEditInfo,
  setContent,
  setContentSnapshot,
}) => {
  const classes = useStyles({ screenCoords });

  const handleClickAway = () => {
    setOpened(false);
  };

  const onAddClick = () => {
    setOpened(false);
    setContent(emptyContent);
    setContentSnapshot(emptyContent);
    setOpenEditInfo(true);
  };

  const getCoords = (coords) => {
    return (
      Math.round(coords.lat * 10000) / 10000 +
      " " +
      Math.round(coords.lng * 10000) / 10000
    );
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Paper className={classes.paper}>
        <List disablePadding>
          <ListItem button className={classes.listItem}>
            <ListItemText primary={getCoords(geoCoords)}></ListItemText>
          </ListItem>
          <ListItem button className={classes.listItem} onClick={onAddClick}>
            <ListItemText primary={"Add missing place"}></ListItemText>
          </ListItem>
        </List>
      </Paper>
    </ClickAwayListener>
  );
};

export default ContextMenu;
