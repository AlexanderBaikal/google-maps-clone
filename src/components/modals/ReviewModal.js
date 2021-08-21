import {
  Avatar,
  Button,
  DialogActions,
  Input,
  InputBase,
  TextField,
} from "@material-ui/core";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { Rating } from "@material-ui/lab";
import clsx from "clsx";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";

const useStyles = makeStyles((theme) => ({
  root: {},

  dialog: {
    width: "580px",
    height: "500px",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "center",
  },
  avatarGroup: {
    display: "flex",
  },
  commentHeader: {
    display: "flex",
  },
  commentHeaderName: {
    marginLeft: "12px",
  },
  lineHeightOne: {
    lineHeight: "1.3rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  dialogCotent: {
    padding: "8px 12px",
  },
  reviewBlock: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "48px",
    paddingTop: "12px",
  },
  ratingLabel: {
    fontSize: "2.2rem",
    paddingRight: "6px",
  },
  textField: {
    paddingTop: "35px",
    height: "90px",
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderBottom: "2px solid #4285f4",
    padding: "10px",
    fontSize: "0.9rem",
  },
  addPhoto: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center",
    height: "95px",
    width: "115px",
    border: "2px solid #efefef",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(66,133,244,0.078)",
      border: "2px solid #d2e3fc",
    },
  },
  actions: {},
  buttons: {
    margin: "4px 12px",
    padding: "6px 24px",
  },
  backdrop: {
    backgroundColor: "blue",
    opacity: 0,
  },
}));

const ReviewModal = ({
  isOpen = true,
  onClose = () => {
    isOpen = false;
  },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Dialog
        open={isOpen}
        PaperProps={{ className: classes.dialog }}
        BackdropProps={{ style: { backgroundColor: "rgba(215,215,215,0.5)" } }}
      >
        <DialogTitle className={classes.dialogTitle} >
          <Typography variant="h3">Trts Yarkomoll</Typography>
        </DialogTitle>
        <DialogContent
          className={classes.content}
          classes={{ root: classes.dialogCotent }}
        >
          <div className={classes.avatarGroup}>
            <Avatar src="https://lh3.googleusercontent.com/-5Jp3D27Y3Sg/AAAAAAAAAAI/AAAAAAAAAAA/8BDXrJK6CyY/w70-h70-p/photo.jpg" />
            <div className={classes.commentHeaderName}>
              <Typography classes={{ body1: classes.lineHeightOne }}>
                Firstname Lastname
              </Typography>
              <Typography
                classes={{ body2: classes.lineHeightOne }}
                variant="body2"
                color="textSecondary"
              >
                Posting publicly
              </Typography>
            </div>
          </div>
          <div className={classes.reviewBlock}>
            <Rating
              classes={{ label: classes.ratingLabel }}
              icon={<StarOutlineRoundedIcon fontSize="inherit" />}
            />
            <TextField
              defaultValue="Hello world"
              classes={{ root: classes.textField }}
              inputProps={{ "aria-label": "description" }}
              InputProps={{
                classes: { root: classes.input },
                disableUnderline: true,
              }}
              multiline
              rows={4}
            />
            <div className={classes.addPhoto}>
              <AddAPhotoOutlinedIcon color="primary" />
            </div>
          </div>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button
            variant="outlined"
            onClick={onClose}
            className={classes.buttons}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disableElevation
            autoFocus
            color="primary"
            className={classes.buttons}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
