import { Dialog } from "@material-ui/core";
import { makeStyles, Modal } from "@material-ui/core";
import UploadPhotoContent from './UploadPhotoContent';

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

const UploadPhotoModal = ({ onClose, isOpen, onComplete, keyword }) => {
  const classes = useStyles();

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.root}>
      <Dialog
        onClose={onClose}
        open={isOpen}
        PaperProps={{ className: classes.dialog, square: true }}
      >
        <UploadPhotoContent onClose={onClose} onComplete={onComplete} keyword={keyword}/>
      </Dialog>
    </Modal>
  );
};

export default UploadPhotoModal;
