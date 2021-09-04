import { makeStyles } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { useDispatch } from "react-redux";
import { login, logOut } from "../../../redux/auth/actions";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";

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
    signIn: {
      marginLeft: "17px",
      cursor: "pointer",
    },
  };
});

const UserWidget = ({ profile }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(login());
  };

  const signOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={classes.userWidget}>
      <AppsIcon
        size={28}
        className={classes.apps}
        onClick={profile ? signOut : signIn}
      />
      {profile ? (
        <img
          className={classes.userImage}
          src={profile.photoURL}
          onClick={signOut}
          alt="avatar"
        />
      ) : (
        <VpnKeyOutlinedIcon className={classes.signIn} onClick={signIn} />
      )}
    </div>
  );
};

export default UserWidget;
