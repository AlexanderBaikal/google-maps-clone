import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import PublicIcon from "@material-ui/icons/Public";
import CallIcon from "@material-ui/icons/Call";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {},
  marginZero: {
    margin: 0,
  },
  listItemIcon: {
    minWidth: "48px",
  },
  listItemGutters: {
    paddingRight: "24px",
    paddingLeft: "24px",
  },
}));

const ListInfo = ({ content }) => {
  const classes = useStyles();

  const listInfo = [
    {
      text: moment({})
        .seconds(content.lastVisit.seconds ? content.lastVisit.seconds : 0)
        .format("dddd, MMMM Do YYYY, h:mm:ss a"),
      iconComponent: TimelineOutlinedIcon,
    },
    {
      text: content.address,
      iconComponent: LocationOnOutlinedIcon,
    },
    { text: "Opens at 10:00", iconComponent: QueryBuilderOutlinedIcon },
    { text: content.website, iconComponent: PublicIcon },
    { text: content.phoneNumber, iconComponent: CallIcon },
    { text: "Claim this business", iconComponent: VerifiedUserOutlinedIcon },
    { text: "Add a label", iconComponent: LabelOutlinedIcon },
  ];

  return (
    <List>
      {listInfo.map((item, i) =>
        item.text ? (
          <ListItem
            button
            classes={{ gutters: classes.listItemGutters }}
            key={item.text}
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <item.iconComponent color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ variant: "body2" }}
              classes={{ root: classes.marginZero }}
            />
          </ListItem>
        ) : null
      )}
    </List>
  );
};

export default ListInfo;
