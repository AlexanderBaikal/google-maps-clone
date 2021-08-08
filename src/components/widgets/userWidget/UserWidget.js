import { makeStyles } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";

const useStyles = makeStyles((theme) => {
  return {
    userWidget: {
      flex: 0.15,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    apps: {
      cursor: "pointer",
    },
    userImage: {
      borderRadius: "50%",
      width: "32px",
      objectFit: "contain",
      marginLeft: "17px",
      cursor: "pointer",
    },
  };
});

const UserWidget = () => {
  const classes = useStyles();
  const userUrl =
    "https://lh3.googleusercontent.com/ogw/ADea4I7Dz8wO9N1xzOyUGD0z__B6G0Oa_Vtvs5KPTVfl3w=s32-c-mo";
  return (
    <div className={classes.userWidget}>
      <AppsIcon size={28} className={classes.apps} />
      <img className={classes.userImage} src={userUrl} alt="avatar" />
    </div>
  );
};

export default UserWidget;
