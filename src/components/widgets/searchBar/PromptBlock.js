import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import { IconButton, Paper, ListItemText, makeStyles } from "@material-ui/core";
import Extras from "../../inlines/extras/Extras";
import History from "../../inlines/history/History";
import ExtrasContainer from "../../inlines/extras/ExtrasContainer";
import HistoryContainer from "../../inlines/history/HistoryContainer";

const useStyles = makeStyles((theme) => {
  return {
    history: {
      position: "relative",
      borderRadius: "0 0 8px 8px",
      zIndex: -1,
    },
    underHistory: {
      position: "relative",
      marginTop: "10px",
    },
    prompt: {
      color: theme.palette.grey[500],
      position: "relative",
      zIndex: -1,
      cursor: "pointer",
      display: "flex",
      top: "-20px",
      padding: "20px 4px 0 4px",
      "&:hover": {
        color: "black",
      },
    },
    promptButton: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    promptText: {
      marginLeft: "13px",
      marginRight: "20px",
      color: "inherit",
    },
    underHistoryPrompt: {
      color: theme.palette.grey[500],
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        color: "black",
      },
    },
    underHistoryPromptText: {
      textAlign: "center",
      width: "300px",
      color: "inherit",
    },
    dividerHorizontal: {
      height: "0px",
      borderTop: "1px solid #E8EAED",
    },
  };
});

const PromptBlock = ({
  searchPrompt,
  underSearchBar,
  handleUnderSearchBar,
}) => {
  const classes = useStyles();

  console.log(underSearchBar);

  const promptText = "Show traffic jams, expected time and places close to you";

  return searchPrompt || underSearchBar ? (
    <>
      {searchPrompt ? (
        <Paper elevation={2} className={classes.history}>
          <HistoryContainer />
        </Paper>
      ) : null}
      {!underSearchBar ? (
        <Paper className={classes.underHistory} elevation={2}>
          <ExtrasContainer countItems={4} />
          <div className={classes.dividerHorizontal} />
          <div
            className={classes.underHistoryPrompt}
            onClick={handleUnderSearchBar}
          >
            <IconButton
              className={classes.promptButton}
              style={{ marginLeft: "4px" }}
              aria-label="show extras"
            >
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
            <ListItemText
              secondaryTypographyProps={{
                className: classes.underHistoryPromptText,
              }}
              secondary={"Show similar"}
            />
          </div>
        </Paper>
      ) : null}
    </>
  ) : (
    <Paper onClick={handleUnderSearchBar} className={classes.prompt}>
      <IconButton className={classes.promptButton} aria-label="show extras">
        <KeyboardArrowDownOutlinedIcon />
      </IconButton>
      <ListItemText
        secondaryTypographyProps={{ className: classes.promptText }}
        secondary={promptText}
      />
    </Paper>
  );
};

export default PromptBlock;
