import { Chip, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const directoryChipItems = [
  "Food & Drink",
  "Clothing",
  "Shoes",
  "Health & Beauty",
  "+5",
];

const useStyles = makeStyles((theme) => ({
  root: {},

  directoryChips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

const Chips = () => {
  const classes = useStyles();

  return (
    <div className={classes.directoryChips}>
      {directoryChipItems.map((item, i) => (
        <Chip
          key={i}
          variant="outlined"
          label={<Typography variant="body2">{item}</Typography>}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default Chips;
