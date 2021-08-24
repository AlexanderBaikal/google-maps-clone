import { Avatar, Button, DialogActions, TextField } from "@material-ui/core";
import {
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { Rating } from "@material-ui/lab";
import clsx from "clsx";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import { useEffect, useState } from "react";
import { createComment } from "../../../firebase";
import Prompt from "./Prompt";

const useStyles = makeStyles((theme) => ({
  root: {},

  dialogTitle: {
    display: "flex",
    justifyContent: "center",
    padding: "24px",
  },
  avatarGroup: {
    display: "flex",
    marginTop: "6px",
  },
  commentHeader: {
    display: "flex",
  },
  commentHeaderName: {
    marginLeft: "16px",
  },
  lineHeightOne: {
    lineHeight: "1.4rem",
  },
  avatar: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignSelf: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  dialogContent: {
    padding: "8px 16px",
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

  actions: {},
  buttons: {
    margin: "4px 12px",
    padding: "6px 24px",
  },
  backdrop: {
    backgroundColor: "blue",
    opacity: 0,
  },

  addPhoto: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "95px",
    width: "115px",
    border: "2px solid #efefef",
    marginRight: "2px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(66,133,244,0.078)",
      border: "2px solid #d2e3fc",
    },
  },
  preview: {
    height: "95px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    margin: "2px",
    borderRadius: "4px",
    position: "relative",
  },
  imgPreview: {
    width: "117px",
  },
  photos: {
    display: "flex",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  deleteButton: {
    position: "absolute",
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: 0,
    "&:hover": {
      backgroundColor: "#eee",
    },
    right: "4px",
    top: "4px",
  },
  closeIcon: {
    fontSize: "1.2rem",
  },
}));

const ReviewContent = ({
  setAddComment,
  setCompleteReview,
  setAddPhoto,
  files,
  setFiles,
}) => {
  const classes = useStyles();

  const [prompt, setPrompt] = useState(false);
  const onClose = () => {
    setAddComment(false);
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleAddPhoto = () => {
    setAddPhoto((v) => !v);
  };

  const onCancel = () => {
    setPrompt((v) => !v);
  };

  const handleDeleteClick = (file) => {
    setFiles((prev) => prev.filter((f) => f !== file));
  };

  async function onPostClick() {
    const data = {
      place: "Yarkomoll",
      author: { name: "Firstname Lastname" },
      value: ratingValue,
      photos: files,
      text: commentText,
    };
    await createComment(data);
    setCompleteReview(true);
  }

  const [ratingValue, setRatingValue] = useState(0);
  const [commentText, setCommentText] = useState("");

  const changeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <>
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h3" component="div">
          Trts Yarkomoll
        </Typography>
      </DialogTitle>
      {prompt ? <Prompt onCancel={onCancel} onClose={onClose} /> : null}

      <DialogContent classes={{ root: classes.dialogContent }}>
        <div className={classes.avatarGroup}>
          <Avatar
            src="https://lh3.googleusercontent.com/-5Jp3D27Y3Sg/AAAAAAAAAAI/AAAAAAAAAAA/8BDXrJK6CyY/w70-h70-p/photo.jpg"
            className={classes.avatar}
          />
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
            name="rating"
            classes={{ label: classes.ratingLabel }}
            icon={<StarOutlineRoundedIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
          <TextField
            classes={{ root: classes.textField }}
            inputProps={{ "aria-label": "description" }}
            InputProps={{
              classes: { root: classes.input },
              disableUnderline: true,
            }}
            multiline
            rows={4}
            value={commentText}
            onChange={changeCommentText}
          />
          <div className={classes.photos}>
            <div className={classes.addPhoto} onClick={handleAddPhoto}>
              <AddAPhotoOutlinedIcon color="primary" />
            </div>
            {files.map((file, i) => (
              <div key={i}>
                <div className={classes.preview}>
                  <IconButton
                    size="small"
                    aria-label="add an alarm"
                    className={classes.deleteButton}
                    onClick={() => handleDeleteClick(file)}
                  >
                    <CloseIcon className={classes.closeIcon} />
                  </IconButton>
                  <img
                    className={classes.imgPreview}
                    src={file.preview}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button
          variant="outlined"
          onClick={onCancel}
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
          onClick={onPostClick}
        >
          Post
        </Button>
      </DialogActions>
    </>
  );
};

export default ReviewContent;
