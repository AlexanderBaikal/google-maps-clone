import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

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

const BasicInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.basicInfo}>
      <Typography variant="h1">Trendy Quarter</Typography>
      <Typography variant="h2" style={{ marginTop: "4px" }}>
        Trendy Quarter
      </Typography>
      <Typography variant="body2" component="div" style={{ marginTop: "8px" }}>
        <div className={classes.rating}>
          <Box mr="3px">{4.2}</Box>
          <Rating name="read-only" value={4.2} readOnly size="small" />
          <Box ml="3px">{"1,432 reviews"}</Box>
        </div>
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          variant="body2"
          color="textSecondary"
        >
          {"Shopping mall"}
        </Link>
      </Typography>
    </div>
  );
};

export default BasicInfo;
