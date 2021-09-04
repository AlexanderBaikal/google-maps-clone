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
import { DESCRIPTION_BAR } from "../../redux/active/actions";
import numeral from "numeral";
import { createRef, useEffect, useRef, useState } from "react";
import { Skeleton } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  image: {
    minWidth: "84px",
    maxWidth: "84px",
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
  listItemSkeleton: {
    display: "flex",
  },
  textSkeleton: {
    marginRight: "20px",
  },
  imageSkeleton: {
    borderRadius: "8px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

const PlacesList = ({
  items,
  maxCount = 0,
  short = false,
  setActiveBar,
  setDescriptionData,
  loading,
  data,
}) => {
  const classes = useStyles();
  items = maxCount ? items.slice(0, maxCount) : items;

  const showDescription = (value) => {
    setDescriptionData(value);
  };

  const itemsLength = items ? items.length : 0;

  const [imgRefs, setImgRefs] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setActiveBar(DESCRIPTION_BAR);
    }
  }, [loading, data]);

  useEffect(() => {
    // add or remove refs
    if (items)
      setImgRefs((imgRefs) =>
        Array(items.length)
          .fill()
          .map((_, i) => imgRefs[i] || createRef())
      );
  }, [itemsLength]);

  const onImageError = (index) => {
    console.log("@", imgRefs, index, imgRefs[index]);
    imgRefs[index].current.src =
      "https://maps.gstatic.com/tactile/pane/result-no-thumbnail-2x.png";
  };

  return (
    <List aria-label="places" className={short ? "" : classes.list}>
      {items !== null && items.length ? (
        items.map((item, id) => (
          <div key={item.name}>
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
                      <Box mr="3px">
                        {numeral(item.ratingValue).format("0.0")}
                      </Box>
                      <Rating
                        name="read-only"
                        value={item.ratingValue}
                        readOnly
                        size="small"
                      />
                      <Box ml="3px">
                        ({numeral(item.ratingCount).format("0,0")})
                      </Box>
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
                ref={imgRefs[id]}
                onError={() => onImageError(id)}
                className={classes.image}
              />
            </ListItem>
            {!short && id < items.length - 1 ? <Divider /> : null}
          </div>
        ))
      ) : items === null ? (
        [...Array(10)].map((item, i) => (
          <div key={i}>
            <ListItem
              classes={{ gutters: classes.listItemGutters }}
              className={classes.listItemSkeleton}
            >
              <div className={classes.textSkeleton}>
                <Skeleton variant="text" width={200} />
                <Skeleton variant="text" width={260} />
                <Skeleton variant="text" width={260} />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Skeleton variant="text" width={60} />
                  <Skeleton variant="text" width={60} />
                  <Skeleton variant="text" width={60} />
                </div>
              </div>
              <Skeleton
                className={classes.imageSkeleton}
                variant="rect"
                height={84}
                width={84}
              />
            </ListItem>
          </div>
        ))
      ) : (
        <div className={classes.center}>
          <Typography variant="body1">No places</Typography>
        </div>
      )}
    </List>
  );
};

export default PlacesList;
