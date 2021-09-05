import { Button, Divider, Input } from "@material-ui/core";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import Chips from "./Chips";
import CommentsImages from "./CommentsImages";
import numeral from "numeral";
import { useState } from "react";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {},
  comments: {},
  comment: {
    margin: "15px 25px",
  },
  commentHeader: {
    display: "flex",
  },
  commentHeaderName: {
    marginLeft: "10px",
  },
  lineHeightOne: {
    lineHeight: "1.1rem",
  },
  avatarSmall: {
    width: "32px",
    height: "32px",
  },
  commentBody: {
    margin: "0 25px",
    marginBottom: "25px",
  },
  commentText: {
    marginBottom: "10px",
  },
  commentButtonIcon: {
    marginRight: "8px",
    fontSize: "1.1rem",
  },
  commentButton: {
    borderRadius: "20px",
    marginRight: "8px",
    padding: "6px 16px 6px 12px",
  },
  textButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8px",
  },
  textButton: {
    padding: "6px 10px",

    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  directoryFilters: {
    padding: "0 5%",
  },
  directoryInput: {
    border: "1px solid",
    boxSizing: "border-box",
    borderRadius: "8px",
    borderColor: "rgba(0, 0, 0, 0.23)",
    padding: "0 16px",
    marginBottom: "8px",
    height: "36px",

    "&:focus": {
      border: "2px solid",
      padding: "0 15px",
      borderColor: theme.palette.primary.main,
    },
  },

  directoryInputWrapper: {
    width: "97%",
    margin: "0 1.5%",
  },
  skeletonWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skeletonSquare: {
    margin: "10px",
  },
}));

const Comments = ({ comments, content, handleExtended, extended }) => {
  const classes = useStyles();

  return (
    <div className={classes.comments}>
      {extended ? (
        <div className={classes.directoryFilters}>
          <Input
            placeholder="Search for comments"
            className={classes.directoryInputWrapper}
            inputProps={{
              "aria-label": "description",
              className: classes.directoryInput,
            }}
            disableUnderline
          />
        </div>
      ) : null}

      {comments !== null && comments.length
        ? comments.map((item, i) => (
            <div key={item.text.slice(0, 5)}>
              <div className={classes.comment}>
                <div className={classes.commentHeader}>
                  <Avatar
                    className={classes.avatarSmall}
                    src={
                      item.author.photoURL ||
                      "https://premiumt.ru/wp-content/uploads/2019/02/avatar.png"
                    }
                  />
                  <div className={classes.commentHeaderName}>
                    <Typography classes={{ body1: classes.lineHeightOne }}>
                      {item.author.name}
                    </Typography>
                    <Typography
                      classes={{ body2: classes.lineHeightOne }}
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.author.reviewCount + " review(s)"}
                    </Typography>
                  </div>
                  <IconButton
                    style={{ position: "absolute", right: "20px" }}
                    size="small"
                  >
                    <MoreVertOutlinedIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
              <div className={classes.commentBody}>
                <Rating
                  name="read-only"
                  value={item.value}
                  size="small"
                  readOnly
                />
                <Typography variant="body2" className={classes.commentText}>
                  {item.text}
                </Typography>
                <CommentsImages images={item.photos} />
                <Button className={classes.commentButton}>
                  <ThumbUpOutlinedIcon
                    classes={{ root: classes.commentButtonIcon }}
                  />
                  Like
                </Button>
                <Button className={classes.commentButton}>
                  <ShareOutlinedIcon
                    classes={{ root: classes.commentButtonIcon }}
                  />
                  Share
                </Button>
              </div>
              {i < comments.length - 1 ? <Divider /> : null}
            </div>
          ))
        : comments === null
        ? [...Array(3)].map((item, i) => (
            <div key={i} className={classes.skeletonWrapper}>
              <Skeleton
                variant="rect"
                height={150}
                width={380}
                className={classes.skeletonSquare}
              />
            </div>
          ))
        : null}
      <div className={classes.textButtonContainer}>
        {comments !== null ? (
          !comments.length ? (
            <Typography>No reviews:(</Typography>
          ) : (
            <Button className={classes.textButton} onClick={handleExtended}>
              <Typography variant="subtitle2">
                {!extended
                  ? `More reviews (${numeral(content.ratingCount).format(
                      "0,0"
                    )})`
                  : "Show less"}
              </Typography>
            </Button>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Comments;
