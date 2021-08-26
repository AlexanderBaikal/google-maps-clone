import { Button, DialogContent, Divider, Input, Link } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
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
  outlinedWhite: {
    color: "white",
    borderColor: "white",
  },
  underButtonText: {
    fontStyle: "italic",
    marginBottom: "40px",
  },
  underButtonText2: {
    alignSelf: "start",
  },
  actionButton: {
    margin: "0 4px",
    padding: "6px 24px",
  },
}));

const EditInfoModal = ({
  content,
  openEditInfo,
  setOpenEditInfo,
  setOpenCompleteEditInfo,
}) => {
  const classes = useStyles();

  const onClose = () => {
    setOpenEditInfo(false);
  };

  const dialogRef = useCallback((node) => {
    if (node !== null) {
      node.addEventListener("scroll", handleScroll);
    }
  }, []);

  const onPostClick = () => {
    setOpenEditInfo(false);
    setOpenCompleteEditInfo(true);
  };

  const inputFileRef = useRef(null);

  const onAddPhotoClick = () => {
    inputFileRef.current.click();
  };

  const [files, setFiles] = useState([]);

  async function addPhotoHandler(e) {
    var newFiles = await getPreviews(Array.from(e.target.files));
    if (files.length) {
      setFiles(files.concat(newFiles));
    } else {
      setFiles(newFiles);
    }
  }

  const [shadow, setShadow] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollTop) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  // TODO remove event listener

  return (
    <div>
      <Dialog
        open={openEditInfo}
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
        >
          <Typography className={classes.contentTitle} color="textSecondary">
            Overview
          </Typography>
          <Divider />
          <EditItem title="Name" IconComponent={StoreIcon} value="Yarkomoll" />
          <EditItem
            title="Category"
            IconComponent={CategoryIcon}
            value={content.type}
            extraIcon={"forward"}
          />
          <EditItem
            title="Location"
            IconComponent={LocationOnIcon}
            value={content.address}
          />
          <div className={classes.centerButton}>
            <Button
              variant="outlined"
              classes={{ outlined: classes.outlinedWhite }}
            >
              Update location
            </Button>
          </div>
          <EditItem
            title="Located within"
            IconComponent={null}
            value={""}
            subTitle={
              "If this place is located within another, enter the containing place."
            }
          />
          <EditItem
            title="Hours"
            IconComponent={WatchLaterOutlinedIcon}
            value={
              "Sun-Sat: " +
              content.schedule.monday.open +
              "-" +
              content.schedule.monday.close
            }
            extraIcon={"forward"}
          />
          <EditItem
            title="Contact"
            IconComponent={PhoneIcon}
            value={content.phoneNumber}
            extraIcon={"close"}
          />
          <EditItem
            title="Website"
            IconComponent={PublicIcon}
            value={content.website}
            extraIcon={"close"}
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
            {files.length ? (
              <PhotoSection
                files={files}
                setFiles={setFiles}
                handleAddPhoto={onAddPhotoClick}
                fullHeight
              />
            ) : (
              <Button
                variant="outlined"
                color="primary"
                className={classes.wideButton}
                onClick={onAddPhotoClick}
              >
                <AddAPhotoIcon
                  fontSize="small"
                  className={classes.bottonIcon}
                />
                Add a photo
              </Button>
            )}

            <input
              type="file"
              id="file"
              ref={inputFileRef}
              style={{ display: "none" }}
              onChange={addPhotoHandler}
            />
            <Typography
              variant="h2"
              color="textSecondary"
              className={classes.underButtonText}
            >
              Helpful photos include the shopfront, notices and hours. If you
              add photos, they will appear publicly with your profile name and
              picture. They will appear on Google services across the web, like
              Maps and Search, and on third-party sites and apps that use Google
              services. Google may also use them to update other information
              about this place.
            </Typography>
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
            onClick={onPostClick}
            className={classes.actionButton}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditInfoModal;
