import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import LocationOffIcon from "@material-ui/icons/LocationOff";
import CloseIcon from "@material-ui/icons/Close";

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
    width: "400px",
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
}));

const EditModal = ({ setOpenEdit, openEdit }) => {
  const classes = useStyles();

  const onClose = () => {
    setOpenEdit(false);
  };

  return (
    <Modal open={openEdit} onClose={onClose} className={classes.root}>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={openEdit}
        PaperProps={{ className: classes.dialog }}
      >
        <DialogTitle className={classes.dialogTitle} onClose={onClose}>
          <Typography variant="h3">Suggest an edit</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <List className={classes.list}>
            <Divider component="li" />
            <ListItem button classes={{ gutters: classes.gutters }}>
              <ListItemIcon>
                <EditIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Change the name or other details"
                primaryTypographyProps={{ variant: "subtitle2" }}
                secondaryTypographyProps={{ variant: "body2" }}
                secondary="Edit name, location, hours, etc"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem button classes={{ gutters: classes.gutters }}>
              <ListItemIcon>
                <LocationOffIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Close or remove"
                primaryTypographyProps={{ variant: "subtitle2" }}
                secondaryTypographyProps={{ variant: "body2" }}
                secondary="Mark as closed, non-existent or duplicate"
              />
            </ListItem>
            <Divider component="li" />
          </List>
        </DialogContent>
      </Dialog>
    </Modal>
  );
};

export default EditModal;
