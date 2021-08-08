import { useState } from "react";
import { Button, DialogActions, DialogContent } from "@material-ui/core";
import { Dialog, DialogTitle, IconButton, Typography } from "@material-ui/core";
import { makeStyles, Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "400px"
  },

  closeButton: {
    position: "absolute",
    right: "8px",
    top: "4px",
    color: theme.palette.grey[500],
  },
  dialogContent: {
    textAlign: "center",
    marginBottom: "40px",
  },
  picture: {
    backgroundImage:
      'url("//maps.gstatic.com/tactile/upload/add-photo-done-1x.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    height: "80px",
  },
}));

const CompletePhotoModal = ({ onClose, isOpen }) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={onClose}
      PaperProps={{ className: classes.paper }}
      open={isOpen}
    >
      <DialogContent className={classes.dialogContent}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <div className={classes.picture} />
        <Typography>Thanks for sharing your photo!</Typography>
        <Typography variant="h2">
          Your photo will be public on Google Maps soon.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary" size="small">
          DONE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompletePhotoModal;
