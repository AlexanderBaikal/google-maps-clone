import { Dialog } from "@material-ui/core";
import { makeStyles, Modal } from "@material-ui/core";
import UploadPhotoContent from "./UploadPhotoContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  dialog: {
    width: "1000px",
    maxWidth: "1200px",
  },
}));

const UploadPhotoModal = ({
  setOpenUploadPhoto,
  openUploadPhoto,
  setOpenCompletePhoto,
  keyword,
}) => {
  const classes = useStyles();

  const onClose = () => {
    setOpenUploadPhoto(false);
  };

  const onComplete = () => {
    setOpenUploadPhoto(false);
    setOpenCompletePhoto(true);
  };

  return (
    <Modal open={openUploadPhoto} onClose={onClose} className={classes.root}>
      <Dialog
        onClose={onClose}
        open={openUploadPhoto}
        PaperProps={{ className: classes.dialog, square: true }}
      >
        <UploadPhotoContent
          onClose={onClose}
          onComplete={onComplete}
          keyword={keyword}
        />
      </Dialog>
    </Modal>
  );
};

export default UploadPhotoModal;
