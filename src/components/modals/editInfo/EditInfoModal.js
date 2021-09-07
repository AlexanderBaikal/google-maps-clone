import { Dialog, makeStyles } from "@material-ui/core";
import EditCategoryContainer from "../editCategory/EditCategoryContainer";
import EditHoursContainer from "../editHours/EditHoursContainer";
import EditLocationContainer from "../editLocation/EditLocationContainer";
import EditInfoContainer from "./EditInfoContainer";

const useStyles = makeStyles((theme) => ({
  root: {},
  dialog: {
    maxWidth: "764px",
    height: (props) => (props.categoryModal ? "546px" : "626px"),
    transition: "height 0.15s ease",
  },
  "@media screen and (max-width: 540px)": {
    dialog: {
      minWidth: "100vw",
      minHeight: "100vh",
    },
  },
}));

const EditInfoModal = ({
  openEditInfo,
  categoryModal,
  hoursModal,
  locationModal,
}) => {
  const classes = useStyles({ categoryModal });

  return (
    <Dialog
      open={openEditInfo}
      PaperProps={{ className: classes.dialog, square: true }}
      fullWidth
    >
      {categoryModal ? (
        <EditCategoryContainer />
      ) : hoursModal ? (
        <EditHoursContainer />
      ) : locationModal ? (
        <EditLocationContainer />
      ) : (
        <EditInfoContainer />
      )}
    </Dialog>
  );
};

export default EditInfoModal;
