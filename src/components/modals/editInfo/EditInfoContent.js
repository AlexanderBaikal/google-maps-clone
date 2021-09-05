import {
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  Button,
  DialogContent,
  Divider,
  Link,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import StoreIcon from "@material-ui/icons/Store";
import CategoryIcon from "@material-ui/icons/Category";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import PublicIcon from "@material-ui/icons/Public";
import EditItem from "./EditItem";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import AddPhotoBlock from "../nested/AddPhotoBlock";
import { editDescription } from "../../../firebase";
import clsx from "clsx";
import MySchedule from "./MySchedule";
import { getTileImage } from "../../../utils/getTileImage";

const useStyles = makeStyles((theme) => ({
  root: {},
  dialog: {
    maxWidth: "764px",
    height: "626px",
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
    color: theme.palette.grey[500],
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
    backgroundImage: (props) => `url(${props.mapFragment})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#0000008a",
    backgroundBlendMode: "darken",
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
  outlinedWhite: {
    color: "white",
    backgroundColor: "rgba(255,255,255,0)",
    borderColor: "white",
  },
  underButtonText2: {
    alignSelf: "start",
    marginTop: "20px",
  },
  actionButton: {
    margin: "0 4px",
    padding: "6px 24px",
  },
  scheduleDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  textFieldHours: {
    fontSize: "0.9rem",
    lineHeight: "1.3rem",
  },
  disabled: {
    pointerEvents: "none",
    opacity: 0.45,
  },
  underline: {
    "&:before": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },
  },
}));

const EditInfoModal = ({
  content,
  contentSnapshot,
  setOpenEditInfo,
  setOpenCompleteEditInfo,
  categoryModal,
  setCategoryModal,
  setHoursModal,
  setNewHours,
  setContent,
  allPlaces,
  photoFiles,
  setPhotoFiles,
  loadAllPoints,
  setLocationModal,
}) => {
  const mapFragment = getTileImage(content.coords);

  const classes = useStyles({ mapFragment });

  const onClose = () => {
    setContent(JSON.parse(JSON.stringify(contentSnapshot)));
    setOpenEditInfo(false);
  };

  const dialogRef = useCallback((node) => {
    if (node !== null) {
      node.addEventListener("scroll", handleScroll);
    }
  }, []);

  async function onPostClick() {
    setDisabled(true);
    var newContent = JSON.parse(JSON.stringify(content));
    for (var field of canceledFields) {
      newContent[field] = "No data yet";
    }
    setContent(newContent);

    const data = {
      content: newContent,
      photos: photoFiles,
    };
    await editDescription(data);

    setOpenEditInfo(false);
    setDisabled(false);
    setOpenCompleteEditInfo(true);
    setCanceledFields([]);
    setPhotoFiles([]);
    loadAllPoints();
  }

  const onCancel = () => {
    setOpenEditInfo(false);
    setContent(JSON.parse(JSON.stringify(contentSnapshot)));
  };

  const [shadow, setShadow] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollTop) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const onHoursClick = () => {
    setNewHours(JSON.parse(JSON.stringify(content.schedule)));
    setHoursModal(true);
  };

  const onUpdateLocation = () => {
    setLocationModal(true);
  };

  const onAddressChange = (value) => {
    setContent({ ...content, address: value });
  };

  const onPhoneChange = (value) => {
    setContent({ ...content, phoneNumber: value });
  };

  const onInsideChange = (value) => {
    setContent({ ...content, inside: value });
  };

  const onWebsiteChange = (value) => {
    setContent({ ...content, website: value });
  };

  const onNameChange = (value) => {
    setContent({ ...content, name: value });
  };

  const [canceledFields, setCanceledFields] = useState([]);

  const onPhoneCancel = () => {
    setCanceledFields([...canceledFields, "phoneNumber"]);
  };

  const onWebsiteCancel = () => {
    setCanceledFields([...canceledFields, "website"]);
  };

  const onCategoryClick = () => {
    setCategoryModal(!categoryModal);
  };

  const getWeekdayHours = (name, data) => {
    let status;
    if (data.closed) status = "Closed";
    if (data.allDay) status = "24 hours";
    if (!data.closed && !data.allDay) status = data.open + "-" + data.close;
    return name.slice(0, 3) + ": " + status;
  };

  const [disabled, setDisabled] = useState(false);

  // TODO remove event listener

  return (
    <>
      <DialogTitle
        className={
          disabled
            ? clsx(classes.dialogTitle, classes.disabled)
            : classes.dialogTitle
        }
        style={{
          boxShadow: shadow
            ? "0 1px 2px rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)"
            : "none",
        }}
        onClose={onClose}
      >
        <div className={classes.title}>
          <Typography variant="h3" component="span">
            Suggest an edit
          </Typography>
          <Typography variant="body1" color="textSecondary" component="span">
            {content.name}
          </Typography>
        </div>

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        classes={{ root: classes.dialogContent }}
        ref={dialogRef}
        className={disabled ? classes.disabled : ""}
      >
        <Typography className={classes.contentTitle} color="textSecondary">
          Overview
        </Typography>
        <Divider />
        <EditItem
          title="Name"
          IconComponent={StoreIcon}
          value={content.name}
          onChange={onNameChange}
        />
        <EditItem
          title="Category"
          IconComponent={CategoryIcon}
          value={content.type || "Add category"}
          extraIcon={"forward"}
          onClick={onCategoryClick}
        />
        <EditItem
          title="Location"
          IconComponent={LocationOnIcon}
          value={content.address}
          onChange={onAddressChange}
        />
        <div className={classes.centerButton}>
          <Button
            variant="outlined"
            classes={{ outlined: classes.outlinedWhite }}
            onClick={onUpdateLocation}
          >
            Update location
          </Button>
        </div>
        <EditItem
          title="Located within"
          IconComponent={null}
          value={typeof content.inside === "string" ? content.inside : ""}
          subTitle={
            "If this place is located within another, enter the containing place."
          }
          select={allPlaces}
          onChange={onInsideChange}
          disableBlur
        />
        <EditItem
          title="Hours"
          IconComponent={WatchLaterOutlinedIcon}
          onClick={onHoursClick}
          jsxValue={
            <MySchedule
              classes={classes}
              onHoursClick={onHoursClick}
              getWeekdayHours={getWeekdayHours}
              content={content}
            />
          }
          extraIcon={"forward"}
        />
        <EditItem
          title="Contact"
          IconComponent={PhoneIcon}
          value={content.phoneNumber}
          extraIcon={"close"}
          onChange={onPhoneChange}
          onCancel={onPhoneCancel}
        />
        <EditItem
          title="Website"
          IconComponent={PublicIcon}
          value={content.website}
          extraIcon={"close"}
          onChange={onWebsiteChange}
          onCancel={onWebsiteCancel}
        />
        <Typography className={classes.contentTitle} color="textSecondary">
          About
        </Typography>
        <Divider />

        <EditItem
          title="Opening date"
          IconComponent={null}
          value={""}
          extraIcon={"forward"}
        />

        <div className={classes.bottomDiv}>
          <AddPhotoBlock
            photoFiles={photoFiles}
            setPhotoFiles={setPhotoFiles}
          />
          <Typography
            variant="h2"
            component="div"
            className={classes.underButtonText2}
          >
            Google will email you about the status of your edits.{" "}
            <Link>Learn more</Link>
          </Typography>
        </div>
      </DialogContent>

      <DialogActions className={classes.actions}>
        <Button
          disabled={disabled}
          disableElevation
          autoFocus
          onClick={onCancel}
          color="primary"
          className={classes.actionButton}
        >
          Cancel
        </Button>
        <Button
          disabled={disabled}
          variant="contained"
          disableElevation
          color="primary"
          onClick={onPostClick}
          className={classes.actionButton}
        >
          Send
        </Button>
      </DialogActions>
    </>
  );
};

export default EditInfoModal;
