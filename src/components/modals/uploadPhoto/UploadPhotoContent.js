import {
  Button,
  DialogActions,
  DialogContent,
  Divider,
  Tab,
  Tabs,
} from "@material-ui/core";
import { DialogTitle, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import DropzoneContainer from "../../inlines/myDropzone/DropzoneContainer";

const useStyles = makeStyles((theme) => ({
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

const UploadPhotoContent = ({
  onClose,
  onComplete,
  onSelect,
  lite = false,
  files,
}) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
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
        <DropzoneContainer onComplete={onComplete} />
      </DialogContent>
      <Divider />
      <DialogActions className={classes.actions}>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          disabled={lite && files.length ? false : true}
          classes={{ containedSizeSmall: classes.small }}
          onClick={onSelect}
          size="small"
        >
          Select
        </Button>
        <Button
          variant="contained"
          disableElevation
          autoFocus
          onClick={onClose}
          classes={{ containedSizeSmall: classes.small }}
          size="small"
        >
          Cancel
        </Button>
      </DialogActions>
    </div>
  );
};

export default UploadPhotoContent;
