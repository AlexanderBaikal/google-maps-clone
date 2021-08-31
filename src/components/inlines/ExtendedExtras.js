import {
  Avatar,
  ButtonBase,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import clsx from "clsx";

import { PLACES_BAR } from "../../redux/active/actions";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import LocalPharmacyOutlinedIcon from "@material-ui/icons/LocalPharmacyOutlined";
import LocalPostOfficeOutlinedIcon from "@material-ui/icons/LocalPostOfficeOutlined";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginBottom: "10px",
  },

  outlined: {
    borderLeft: "none",
    borderRight: "none",
  },
  options: {
    display: "block",
    alignItems: "center",
    position: "relative",
    padding: "16px 27px",
  },

  optionsButton: {
    borderRadius: "8px",
    width: "155px",
    padding: "5px 10px",
    marginLeft: "10px",
    "&:hover": {
      backgroundColor: "rgb(239, 239, 239)",
    },
  },
  textSmall: {
    fontSize: "0.75rem",
  },

  iconAvatarLarge: {
    padding: "3px",
    fill: "white",
  },
}));

const extras = ({ handleActiveBar }) => [
  {
    name: "Banks",
    iconComponent: AccountBalanceIcon,
    onClick: handleActiveBar,
  },
  {
    name: "Gas stations",
    iconComponent: LocalGasStationIcon,
    onClick: handleActiveBar,
  },
  {
    name: "Car parks",
    iconComponent: LocalParkingIcon,
    onClick: handleActiveBar,
  },
  {
    name: "Pharamacies",
    iconComponent: LocalPharmacyOutlinedIcon,
    onClick: handleActiveBar,
  },
  {
    name: "Post stations",
    iconComponent: LocalPostOfficeOutlinedIcon,
    onClick: handleActiveBar,
  },
  {
    name: "Hospitals",
    iconComponent: LocalHospitalOutlinedIcon,
    onClick: handleActiveBar,
  },
];

const ExtendedExtras = ({ setActiveBar }) => {
  const classes = useStyles();

  const handleActiveBar = () => {
    setActiveBar(PLACES_BAR);
  };

  const items = extras({ handleActiveBar });

  return (
    <Paper
      square
      variant="outlined"
      className={clsx(classes.card, classes.outlined)}
      style={{ borderTop: "none" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.options}>
          {items.map((item) => (
            <ButtonBase
              aria-label="show extras"
              className={classes.optionsButton}
              key={item.name}
              onClick={item.onClick}
            >
              <Avatar
                className={classes.iconAvatarLarge}
                style={{
                  backgroundColor: "#78909c",
                  marginBottom: "10px",
                }}
              >
                <item.iconComponent />
              </Avatar>
              <ListItemText
                secondaryTypographyProps={{
                  style: { textAlign: "left", marginLeft: "10px" },
                }}
                classes={{ secondary: classes.textSmall }}
                secondary={item.name}
              />
            </ButtonBase>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default ExtendedExtras;
