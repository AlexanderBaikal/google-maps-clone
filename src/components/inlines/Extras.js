import {
  Avatar,
  ButtonBase,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";
import HotelIcon from "@material-ui/icons/Hotel";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

const useStyles = makeStyles((theme) => ({
  iconAvatarLarge: {
    padding: "3px",
    fill: "white",
  },

  extras: {
    padding: "8px 16px",
  },

  extrasHeader: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "20px",
  },
  weather: {
    display: "flex",
  },

  weatherImage: {
    backgroundSize: "24px 24px",
    height: "24px",
    margin: "7.5px 0 8px 10px",
    width: "24px",
  },

  weatherLabel: {
    fontSize: "13px",
    color: "rgba(0, 0, 0, 0.54)",
    padding: "10px 0",
  },

  options: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    position: "relative",
    left: "-7px",
    paddingTop: "10px",
  },

  optionsButton: {
    borderRadius: "8px",
    width: "74px",
    display: "flex",
    flexDirection: "column",
    padding: "10px 0px",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgb(239, 239, 239)",
    },
  },

  divider: {
    margin: "0 24px",
    borderBottom: "1px solid #e8eaed",
  },

  textSmall: {
    fontSize: "0.75rem",
  },
  marginZero: {
    margin: 0,
  },
}));

const Extras = ({ countItems = 5, shownMore, setShownMore, setPlacesBar }) => {
  const classes = useStyles();

  const handleShownMore = () => setShownMore((value) => !value);

  const handlePlacesBar = () => {
    setPlacesBar((value) => !value);
  };

  const extras = [
    {
      name: "Grocery stores",
      iconComponent: ShoppingCartOutlinedIcon,
      color: "#388e3c",
      onClick: handlePlacesBar,
    },
    {
      name: "Restaurants",
      iconComponent: RestaurantOutlinedIcon,
      color: "#42a5f5",
      onClick: handlePlacesBar,
    },
    {
      name: "Takeaway food",
      iconComponent: LocalCafeOutlinedIcon,
      color: "#d32f2f",
      onClick: handlePlacesBar,
    },
    {
      name: "Hostels",
      iconComponent: HotelIcon,
      color: "#f57c00",
      onClick: handlePlacesBar,
    },
    {
      name: "Show more",
      iconComponent: MoreHorizIcon,
      color: "#78909c",
      onClick: handleShownMore,
      alt: ExpandLessOutlinedIcon,
    },
  ];

  return (
    <div key={"Options"} className={classes.extras}>
      <div className={classes.extrasHeader}>
        <div>
          <h1 style={{ fontSize: "15px" }}>London</h1>
        </div>
        <div className={classes.weather}>
          <div className={classes.weatherLabel}>15°</div>
          <img
            className={classes.weatherImage}
            src="https://ssl.gstatic.com/onebox/weather/128/partly_cloudy.png"
            alt="Partly cloudy"
          />
        </div>
      </div>
      <div className={classes.options}>
        {extras.slice(0, countItems).map((item) => (
          <ButtonBase
            aria-label="show extras"
            className={classes.optionsButton}
            key={item.name}
            onClick={item.onClick}
          >
            <Avatar
              className={classes.iconAvatarLarge}
              style={{ backgroundColor: item.color, marginBottom: "10px" }}
            >
              {item.alt && shownMore ? <item.alt /> : <item.iconComponent />}
            </Avatar>
            <ListItemText
              classes={{ secondary: classes.textSmall }}
              secondary={item.name}
            />
          </ButtonBase>
        ))}
      </div>
    </div>
  );
};

export default Extras;
