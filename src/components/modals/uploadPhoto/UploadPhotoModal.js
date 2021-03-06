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
  "@media screen and (max-width: 540px)": {
    dialog: {
      minWidth: "100vw",
      minHeight: "90vh",
    },},
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



  return (
    <div className={classes.root}>
      <Dialog
        onClose={onClose}
        open={openUploadPhoto}
        PaperProps={{ className: classes.dialog, square: true }}
      >
        <UploadPhotoContent
          onClose={onClose}
          keyword={keyword}
        />
      </Dialog>
    </div>
  );
};

export default UploadPhotoModal;
