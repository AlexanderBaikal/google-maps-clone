import { Button, Divider } from "@material-ui/core";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import Chips from "./Chips";

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
  },
  textButton: {
    padding: "6px 10px",
    marginBottom: "8px",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  directoryFilters: {
    padding: "0 5%",
  },
}));

const Comments = () => {
  const classes = useStyles();
  return (
    <div className={classes.comments}>
      <div className={classes.directoryFilters}>
        <Chips />
      </div>
      {[...Array(3)].map((item, i) => (
        <>
          <div className={classes.comment}>
            <div className={classes.commentHeader}>
              <Avatar
                className={classes.avatarSmall}
                src="https://lh3.googleusercontent.com/-5Jp3D27Y3Sg/AAAAAAAAAAI/AAAAAAAAAAA/8BDXrJK6CyY/w70-h70-p/photo.jpg"
              />
              <div className={classes.commentHeaderName}>
                <Typography classes={{ body1: classes.lineHeightOne }}>
                  Firstname Lastname
                </Typography>
                <Typography
                  classes={{ body2: classes.lineHeightOne }}
                  variant="body2"
                  color="textSecondary"
                >
                  20 reviews
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
              value={4.6}
              size="small"
              readOnly
              precision={0.5}
            />
            <Typography variant="body2" className={classes.commentText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              illum! Mollitia explicabo enim repudiandae a tenetur eius repellat
              debitis quis neque veniam, nemo ipsa eligendi id molestias,
              deleniti doloremque veritatis?
            </Typography>
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
          {i < 2 ? <Divider /> : null}
        </>
      ))}
      <div className={classes.textButtonContainer}>
        <Button className={classes.textButton}>
          <Typography variant="subtitle2">More reviews (1,466)</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Comments;
