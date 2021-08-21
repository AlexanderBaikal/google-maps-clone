import { Button, LinearProgress, makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import numeral from "numeral";

const useStyles = makeStyles((theme) => ({
  root: {},
  reviewGraphics: {
    width: "60%",
  },
  reviewGraphicsItem: {
    display: "flex",
    alignItems: "center",
  },
  progress: {
    height: "8px",
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  },
  bar: {
    backgroundColor: "#ffc107",
    borderRadius: "5px",
  },
  reviewSpan: {
    margin: "2px 12px",
    color: theme.palette.text.secondary,
  },
  reviewStars: {
    width: "30%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "middle",
    margin: "0 30px",
    alignItems: "center",
  },
  reviewValue: {
    fontSize: 56,
  },

  reviewContent: {
    display: "flex",
    marginLeft: "12px",
    marginRight: "12px",
    marginBottom: "12px",
  },
}));

const reviewGraphicsItems = [
  { mark: 5, value: 100 },
  { mark: 4, value: 30 },
  { mark: 3, value: 20 },
  { mark: 2, value: 10 },
  { mark: 1, value: 5 },
];

const RatingReview = ({ content }) => {
  const classes = useStyles();
  return (
    <div className={classes.reviewContent}>
      <div className={classes.reviewGraphics}>
        <div>
          {reviewGraphicsItems.map((item, i) => (
            <div className={classes.reviewGraphicsItem} key={i}>
              <span className={classes.reviewSpan}>{item.mark}</span>
              <LinearProgress
                className={classes.progress}
                classes={{ bar: classes.bar }}
                variant="determinate"
                value={item.value}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.reviewStars}>
        <span className={classes.reviewValue}>
          {numeral(content.ratingValue).format("0.0")}
        </span>
        <Rating
          name="read-only"
          value={content.ratingValue}
          size="small"
          readOnly
          precision={0.5}
        />
        <Button
          className={classes.textButton}
          color="primary"
          style={{ padding: "4px", fontSize: "12px" }}
        >{`${numeral(content.ratingCount).format("0,0")} reviews`}</Button>
      </div>
    </div>
  );
};

export default RatingReview;
