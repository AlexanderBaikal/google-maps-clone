import {
  DialogContent,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  OutlinedInput,
  ListItemIcon,
  Button,
  ListItemText,
  DialogActions,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { MapContainer, TileLayer } from "react-leaflet";
import MiddleMap from "./MiddleMap";

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
    color: theme.palette.grey[500],
  },
  backButton: {
    position: "absolute",
    left: "8px",
    top: "4px",
    color: theme.palette.grey[700],
  },
  actions: {
    padding: "20px 20px",
  },
  content: {
    position: "relative",
  },
}));

const EditLocationModal = ({
  content,
  setContent,
  setLocationModal,
}) => {
  const classes = useStyles();
  const [coords, setCoords] = useState(content.coords);

  const onDoneClick = () => {
    setContent({
      ...content,
      coords: { longitude: coords.lng, latitude: coords.lat },
    });
    setLocationModal(false);
  };
  const onClose = () => {
    setCoords(content.coords)
    setLocationModal(false);
  };

  return (
    <

    >
      <DialogTitle className={classes.dialogTitle} onClose={onClose}>
        <div className={classes.title}>
          <Typography variant="h3" component="span">
            Update location
          </Typography>
          <Typography variant="body1" color="textSecondary" component="span">
            {content.name}
          </Typography>
        </div>

        <IconButton
          aria-label="close"
          className={classes.backButton}
          onClick={onClose}
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
      <DialogContent className={classes.content}>
        <MiddleMap coords={coords} setCoords={setCoords} />
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

export default EditLocationModal;
