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
}));

const ReviewModal = ({
  addComment,
  setAddComment,
  addPhoto,
  setAddPhoto,
  files,
  setFiles,
  keyword,
  content,
}) => {
  const classes = useStyles();

  const onClose = () => {
    setAddComment(false);
    setCompleteReview(false);
  };

  const handleAddPhoto = () => {
    setAddPhoto(!addPhoto);
  };

  const onCompleteUploadPhoto = () => {};

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
            onComplete={onCompleteUploadPhoto}
            onSelect={onSelect}
            files={files}
          />
        ) : completeReview ? (
          <SuccessContent onClose={onClose} />
        ) : (
          <ReviewContent
            setAddComment={setAddComment}
            setCompleteReview={setCompleteReview}
            setAddPhoto={setAddPhoto}
            addPhoto={addPhoto}
            files={files}
            setFiles={setFiles}
            keyword={keyword}
            content={content}
          />
        )}
      </Dialog>
    </div>
  );
};

export default ReviewModal;
