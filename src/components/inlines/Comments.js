import { Button, Divider } from "@material-ui/core";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import Chips from "./Chips";
import CommentsImages from "./CommentsImages";

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
}));

const Comments = ({ comments }) => {
  const classes = useStyles();

  console.log(comments);
  comments = comments ? comments.comments : [];

  return (
    <div className={classes.comments}>
      <div className={classes.directoryFilters}>
        <Chips />
      </div>

      {comments.map((item, i) => (
        <div key={i}>
          <div className={classes.comment}>
            <div className={classes.commentHeader}>
              <Avatar
                className={classes.avatarSmall}
                src="https://lh3.googleusercontent.com/-5Jp3D27Y3Sg/AAAAAAAAAAI/AAAAAAAAAAA/8BDXrJK6CyY/w70-h70-p/photo.jpg"
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
            <Rating name="read-only" value={item.value} size="small" readOnly />
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
      ))}
      <div className={classes.textButtonContainer}>
        {!comments.length ? (
          <div>No reviews yet</div>
        ) : (
          <Button className={classes.textButton}>
            <Typography variant="subtitle2">More reviews (1,466)</Typography>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Comments;
