import { IconButton, ListItemText, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import DirectionsIcon from "@material-ui/icons/Directions";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MobileScreenShareOutlinedIcon from "@material-ui/icons/MobileScreenShareOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const useStyles = makeStyles((theme) => ({
  root: {},
  actionButtons: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px 30px 0 26px",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  optionsButton: {
    borderRadius: "8px",
    width: "74px",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0px",
    justifyContent: "center",
  },
  textSmall: {
    fontSize: "0.75rem",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    padding: "7px",
  },
  avatarFilled: {
    backgroundColor: theme.palette.primary.main,
    fill: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  avatarOutlined: {
    backgroundColor: "transparent",
    fill: theme.palette.primary.main,
  },
  actionDiv: {
    display: "flex",
    justifyContent: "center",
  },
}));

const actionButtons = [
  { name: "Directions", iconComponent: DirectionsIcon, filled: true },
  { name: "Save", iconComponent: BookmarkBorderOutlinedIcon, filled: false },
  { name: "Nearby", iconComponent: LocationOnOutlinedIcon, filled: false },
  {
    name: "Send to your phone",
    iconComponent: MobileScreenShareOutlinedIcon,
    filled: false,
  },
  { name: "Share", iconComponent: ShareOutlinedIcon, filled: false },
];

const ActionButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.actionButtons}>
      {actionButtons.map((item) => (
        <div className={classes.optionsButton} key={item.name}>
          <div className={classes.actionDiv}>
            <IconButton
              classes={{
                root: item.filled
                  ? clsx(classes.avatar, classes.avatarFilled)
                  : clsx(classes.avatar, classes.avatarOutlined),
              }}
            >
              <item.iconComponent
                fontSize="small"
                style={{ fill: "inherit" }}
              />
            </IconButton>
          </div>

          <ListItemText
            secondaryTypographyProps={{
              color: "primary",
              style: { textAlign: "center" },
            }}
            classes={{ secondary: classes.textSmall }}
            secondary={item.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ActionButtons;
