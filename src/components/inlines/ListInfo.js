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

const listInfo = [
  { text: "You visited on Thursday", iconComponent: TimelineOutlinedIcon },
  {
    text: "Ulitsa 3 Iyulya, 25, г.Иркутск, Irkutsk Oblast, 664022",
    iconComponent: LocationOnOutlinedIcon,
  },
  { text: "Opens at 10:00", iconComponent: QueryBuilderOutlinedIcon },
  { text: "mk.com", iconComponent: PublicIcon },
  { text: "+73952485325", iconComponent: CallIcon },
  { text: "Claim this business", iconComponent: VerifiedUserOutlinedIcon },
  { text: "Add a label", iconComponent: LabelOutlinedIcon },
];

const ListInfo = () => {
  const classes = useStyles();
  return (
    <List>
      {listInfo.map((item) => (
        <ListItem button classes={{ gutters: classes.listItemGutters }}>
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            <item.iconComponent color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{ variant: "body2" }}
            classes={{ root: classes.marginZero }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ListInfo;
