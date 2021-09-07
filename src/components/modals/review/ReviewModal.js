import { Dialog, makeStyles } from "@material-ui/core";
import UploadPhotoContent from "../uploadPhoto/UploadPhotoContent";
import { useState } from "react";
import SuccessContent from "./SuccessContent";
import ReviewContent from "./ReviewContent";

const useStyles = makeStyles((theme) => ({
  root: {},
  dialog: {
    width: "580px",
    height: "550px",
  },
  "@media screen and (max-width: 540px)": {
    dialog: {
      minWidth: "100vw",
      minHeight: "96vh",
    },},
}));

const ReviewModal = ({
  addComment,
  setAddComment,
  addPhoto,
  setAddPhoto,
  photoFiles,
  setPhotoFiles,
  keyword,
  content,
  loadComments,
  profile
}) => {
  const classes = useStyles();

  const onClose = () => {
    setAddComment(false);
    setCompleteReview(false);
  };

  const handleAddPhoto = () => {
    setAddPhoto(!addPhoto);
  };


  const onSelect = () => {
    handleAddPhoto();
  };

  const [completeReview, setCompleteReview] = useState(false);

  return (
    <div className={classes.root}>
      <Dialog
        open={addComment}
        PaperProps={{ className: classes.dialog }}
        BackdropProps={{ style: { backgroundColor: "rgba(215,215,215,0.5)" } }}
      >
        {addPhoto ? (
          <UploadPhotoContent
            lite
            onClose={handleAddPhoto}
            onSelect={onSelect}
            photoFiles={photoFiles}
          />
        ) : completeReview ? (
          <SuccessContent onClose={onClose} />
        ) : (
          <ReviewContent
            setAddComment={setAddComment}
            setCompleteReview={setCompleteReview}
            setAddPhoto={setAddPhoto}
            addPhoto={addPhoto}
            photoFiles={photoFiles}
            setPhotoFiles={setPhotoFiles}
            keyword={keyword}
            content={content}
            loadComments={loadComments}
            profile={profile}
          />
        )}
      </Dialog>
    </div>
  );
};

export default ReviewModal;
