import React, { createRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import { ImageListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: "12px -25px",
  },
}));

const CommentsImages = ({ images }) => {
  const classes = useStyles();
  images = images || [];

  const [imgListRefs, setImgListRefs] = useState([]);

  useEffect(() => {
    setImgListRefs((imgListRefs) =>
      Array(images.length)
        .fill()
        .map((_, i) => imgListRefs[i] || createRef())
    );
  }, [images.length]);

  const onImageError = (index) => {
    if (imgListRefs[index].current) imgListRefs[index].current.remove();
  };

  return (
    <div className={classes.root}>
      <ImageList
        rowHeight={200}
        gap={2}
        cols={2}
        style={{ flexWrap: "no-wrap" }}
      >
        {images.map((item, i) => (
          <ImageListItem
            key={item}
            ref={imgListRefs[i]}
            cols={!(i % 2) && i === images.length - 1 ? 2 : 1}
          >
            <img
              src={item}
              alt=""
              onError={() => onImageError(i)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default CommentsImages;
