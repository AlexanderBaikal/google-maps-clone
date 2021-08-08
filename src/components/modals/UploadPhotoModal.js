import {
  Button,
  Container,
  DialogActions,
  DialogContent,
  Divider,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Dialog, DialogTitle, IconButton, Typography } from "@material-ui/core";
import { makeStyles, Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import MyDropzone from "../inlines/MyDropzone";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  closeButton: {
    position: "absolute",
    right: "8px",
    top: "4px",
    color: theme.palette.grey[500],
  },
  list: {
    paddingTop: 0,
    paddingBottom: "16px",
  },
  dialog: {
    width: "1000px",
    maxWidth: "1200px",
  },
  dialogContent: {
    padding: 0,
  },
  gutters: {
    paddingLeft: "24px",
  },
  dialogTitle: {
    display: "flex",
    alignItems: "center",
  },
  dropzoneParagraph: {
    color: "#ccc",
    fontSize: "1.6rem",
  },
  tabs: {
    // borderBottom: "1px solid #e1e1e1",
    boxShadow: "0 1px 5px 1px #e1e1e1",
  },
  actions: {
    display: "flex",
    justifyContent: "start",
    padding: "20px 20px",
  },
  small: {
    fontSize: "0.7rem",
    marginRight: "4px",
  },
}));

const UploadPhotoModal = ({ onClose, isOpen, onComplete }) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.root}>
      <Dialog
        onClose={onClose}
        open={isOpen}
        PaperProps={{ className: classes.dialog, square: true }}
      >
        <DialogTitle className={classes.dialogTitle} onClose={onClose}>
          <Typography variant="h3" component="span">
            Upload public photos
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
          >
            <Tab disableRipple label="Upload" />
            <Tab disableRipple label="Photos from phone" />
            <Tab disableRipple label="Your photos" />
          </Tabs>
          <MyDropzone onComplete={onComplete}/>
        </DialogContent>
        <Divider />
        <DialogActions className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            disabled
            classes={{ containedSizeSmall: classes.small }}
            size="small"
          >
            Select
          </Button>
          <Button
            variant="contained"
            autoFocus
            onClick={onClose}
            classes={{ containedSizeSmall: classes.small }}
            size="small"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Modal>
  );
};

export default UploadPhotoModal;
