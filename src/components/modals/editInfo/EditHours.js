import {
  Button,
  DialogContent,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  Link,
  InputLabel,
  TextField,
  List,
  ListSubheader,
  ListItem,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  OutlinedInput,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import StoreIcon from "@material-ui/icons/Store";
import CategoryIcon from "@material-ui/icons/Category";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import clsx from "clsx";
import EditItem from "./EditItem";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import PhotoSection from "../review/PhotoSection";
import { getPreviews } from "../../../utils/previews";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useDispatch } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  root: {},
  dialog: {
    maxWidth: "764px",
    height: "546px",
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
  actions: {
    padding: "20px 20px",
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
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "54px",
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
    padding: "8px 48px",
  },
  listItemEndIcon: {
    display: "flex",
    justifyContent: "end",
    minWidth: "0px",
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

const EditHours = ({ categoryModal, setCategoryModal, setData, content }) => {
  const classes = useStyles();

  const onClose = () => {
    setCategoryModal(!categoryModal);
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

  const [textSearch, setTextSearch] = useState("");

  const onClear = () => {
    setTextSearch("");
    setSelected(null);
  };

  const onChoose = (item) => {
    onClose();
    setData({ ...content, type: item });
  };

  return (
    <Dialog
      open={true}
      PaperProps={{ className: classes.dialog, square: true }}
      fullWidth
    >
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
            {"content.name, TODO: remove redurant classes"}
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
        <List>
          {weekdays.map((item) => (
            <ListItem
              key={item}
              className={classes.listItem}
              onClick={() => {}}
            >
              <ListItemText primary={item} />
              <IconButton className={classes.listItemEndIcon}>
                <CreateIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default EditHours;
