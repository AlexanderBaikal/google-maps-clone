import { useState } from "react";
import { Button, DialogActions, DialogContent } from "@material-ui/core";
import { Dialog, DialogTitle, IconButton, Typography } from "@material-ui/core";
import { makeStyles, Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "400px",
  },

  closeButton: {
    position: "absolute",
    right: "8px",
    top: "4px",
    color: theme.palette.grey[500],
  },
  dialogContent: {
    marginBottom: "20px",
  },
  picture: {
    backgroundImage: 'url("//maps.gstatic.com/tactile/rap/thankyou_2x_v2.png")',
    height: "132px",
    backgroundSize: "408px 132px",
    width: "400px",
    margin: "-24px -24px 0",
    marginBottom: "30px",
  },
}));

const CompleteEditInfoModal = ({
  setOpenCompleteEditInfo,
  openCompleteEditInfo,
}) => {
  const classes = useStyles();

  const onClose = () => {
    setOpenCompleteEditInfo(false);
  };

  return (
    <Dialog
      onClose={onClose}
      PaperProps={{ className: classes.paper }}
      open={openCompleteEditInfo}
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
        <Typography variant="h3" style={{ marginBottom: "20px" }}>
          Thanks for improving Google Maps!
        </Typography>
        <Typography variant="h2">
          You'll get an email when your suggestion is reviewed
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

export default CompleteEditInfoModal;
