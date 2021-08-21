import Rating from "@material-ui/lab/Rating";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import { DESCRIPTION_BAR } from "../../redux/sidebars/actions";

const useStyles = makeStyles((theme) => ({
  image: {
    minWidth: "84px",
    height: "84px",
    borderRadius: "8px",
    marginLeft: "10px",
    marginTop: "5px",
    objectFit: "cover",
  },
  listItemGutters: {
    paddingLeft: "26px",
    paddingRight: "26px",
    minHeight: "110px",
    display: "flex",
    alignItems: "start",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  list: {
    height: "520px",
    overflowY: "auto",
  },
}));

const PlacesList = ({ items, maxCount = 0, short = false, setActiveBar, setDescriptionData }) => {
  const classes = useStyles();
  items = maxCount ? items.slice(0, maxCount) : items;

  const showDescription = (value) => {
    setDescriptionData(value)
    setActiveBar(DESCRIPTION_BAR);
    
  };

  items = items || [];

  return (
    <List aria-label="places" className={short ? "" : classes.list}>
      {items.map((item, id) => (
        <div key={id}>
          <ListItem
            button
            classes={{ gutters: classes.listItemGutters }}
            onClick={() => showDescription(item.name)}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{ style: { fontWeight: 500 } }}
              style={{ marginTop: 0 }}
              secondaryTypographyProps={{ component: "div" }}
              secondary={
                <>
                  <div className={classes.rating}>
                    <Box mr="3px">{item.ratingValue}</Box>
                    <Rating
                      name="read-only"
                      value={item.ratingValue}
                      readOnly
                      size="small"
                    />
                    <Box ml="3px">({item.ratingCount})</Box>
                  </div>
                  <Typography variant="body2" className={classes.inline}>
                    {item.type} · {item.address}
                    {item.openInfo ? (
                      <>
                        <br />
                        {item.openInfo}
                      </>
                    ) : (
                      ""
                    )}
                    {!short && item.extraInfo ? (
                      <>
                        <br />
                        <br />
                        {item.extraInfo}
                      </>
                    ) : (
                      ""
                    )}
                  </Typography>
                </>
              }
            />
            <img
              src={
                item.imageUrl ||
                "https://maps.gstatic.com/tactile/pane/result-no-thumbnail-2x.png"
              }
              alt=""
              className={classes.image}
            />
          </ListItem>
          {!short && id < items.length - 1 ? <Divider /> : null}
        </div>
      ))}
    </List>
  );
};

export default PlacesList;
