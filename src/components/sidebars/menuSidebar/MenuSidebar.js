import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import "./_menuSidebar.scss";
import CloseIcon from "@material-ui/icons/Close";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

const MenuSidebar = ({menuSidebar, handleMenuSidebar}) => {
  const layersText = "Another layers";
  const componentsToText = [
    { iconComponent: LocationOnOutlinedIcon, text: "My places" },
    { iconComponent: RateReviewOutlinedIcon, text: "Sharing Geodata" },
    { iconComponent: TimelineOutlinedIcon, text: "History" },
    { iconComponent: PermIdentityOutlinedIcon, text: "My data on Maps" },
  ];
  return (
    <Paper
      elevation={10}
      className={menuSidebar ? "menu-sidebar open" : "menu-sidebar close"}
      square
    >
      <div className="menu-sidebar__header">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
          alt="logo"
        />
        <IconButton onClick={handleMenuSidebar}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key={layersText}>
          <ListItemIcon>
            <LayersOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: "list-item-text" }}
            primary={layersText}
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        {componentsToText.map((data) => (
          <ListItem button key={data.text}>
            <ListItemIcon>
              <data.iconComponent />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "list-item-text" }}
              primary={data.text}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Paper>
  );
};

export default MenuSidebar;
