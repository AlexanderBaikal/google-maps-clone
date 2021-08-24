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

const ReviewModal = ({ isOpen = true, setAddComment }) => {
  const classes = useStyles();
  const [addPhoto, setAddPhoto] = useState(false);
  const [files, setFiles] = useState([]);
  const onClose = () => {
    setAddComment(false);
  };

  const handleAddPhoto = () => {
    setAddPhoto((v) => !v);
  };

  const onCompleteUploadPhoto = () => {};

  const onSelect = () => {
    handleAddPhoto();
  };

  const [completeReview, setCompleteReview] = useState(false);

  return (
    <div className={classes.root}>
      <Dialog
        open={isOpen}
        PaperProps={{ className: classes.dialog }}
        BackdropProps={{ style: { backgroundColor: "rgba(215,215,215,0.5)" } }}
      >
        {addPhoto ? (
          <UploadPhotoContent
            lite
            preview
            onClose={handleAddPhoto}
            onComplete={onCompleteUploadPhoto}
            onSelect={onSelect}
            files={files}
            setFiles={setFiles}
          />
        ) : completeReview ? (
          <SuccessContent onClose={onClose} />
        ) : (
          <ReviewContent
            setAddComment={setAddComment}
            setCompleteReview={setCompleteReview}
            setAddPhoto={setAddPhoto}
            files={files}
            setFiles={setFiles}
          />
        )}
      </Dialog>
    </div>
  );
};

export default ReviewModal;
