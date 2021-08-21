import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useEffect } from "react";
import numeral from "numeral";

const useStyles = makeStyles((theme) => ({
  root: {},
  rating: {
    display: "flex",
    alignItems: "center",
  },
  basicInfo: {
    padding: "15px 25px",
  },
}));

const BasicInfo = ({ content }) => {
  const classes = useStyles();

  return (
    <div className={classes.basicInfo}>
      <Typography variant="h1">{content.name}</Typography>
      <Typography variant="h2" style={{ marginTop: "4px" }}>
        {content.name}
      </Typography>
      <Typography variant="body2" component="div" style={{ marginTop: "8px" }}>
        <div className={classes.rating}>
          <Box mr="3px">{numeral(content.ratingValue).format("0.0")}</Box>
          <Rating
            name="read-only"
            value={content.ratingValue || 5}
            readOnly
            size="small"
          />
          <Box ml="3px">
            {numeral(content.ratingCount).format("0,0") + " rewiews"}
          </Box>
        </div>
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          variant="body2"
          color="textSecondary"
        >
          {content.type}
        </Link>
      </Typography>
    </div>
  );
};

export default BasicInfo;
