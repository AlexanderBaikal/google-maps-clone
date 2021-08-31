import {
  DialogContent,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
  OutlinedInput,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { categoryItems, findCategories } from "./categoryItems";

const useStyles = makeStyles((theme) => ({
  root: {},
  dialog: {
    maxWidth: "764px",
    height: "546px",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    right: "8px",
    top: "4px",
    color: theme.palette.grey[700],
  },
  backButton: {
    position: "absolute",
    left: "8px",
    top: "4px",
    color: theme.palette.grey[700],
  },

  dialogContent: {
    padding: 0,
  },

  searchBlock: {
    display: "flex",
    justifyContent: "center",
    margin: "16px 48px",
  },
  searchIcon: {},
  formControl: {
    width: "100%",
  },
  inputOutlined: {
    borderRadius: "8px",
  },
  listItem: {
    padding: "8px 48px",
  },
  listItemEndIcon: {
    display: "flex",
    justifyContent: "end",
    minWidth: "0px",
  },
  listTitle: {
    marginLeft: "48px",
    marginTop: "12px",
  },
  fontSmall: {
    fontSize: "0.9rem",
  },
  notFound: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const EditCategory = ({
  categoryModal,
  setCategoryModal,
  setContent,
  content,
}) => {
  const classes = useStyles();

  const onClose = () => {
    setCategoryModal(!categoryModal);
  };

  const [shadow, setShadow] = useState(false);

  const dialogRef = useCallback((node) => {
    if (node !== null) {
      node.addEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScroll = (e) => {
    if (e.target.scrollTop) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  const [selected, setSelected] = useState(null);

  const [textSearch, setTextSearch] = useState("");

  const onTextChange = (e) => {
    const value = e.target.value;
    setTextSearch(value);
    if (value === "") setSelected(null);
    else {
      setSelected(findCategories(value));
    }
  };

  const onClear = () => {
    setTextSearch("");
    setSelected(null);
  };

  const onChoose = (item) => {
    onClose();
    setContent({ ...content, type: item });
  };

  return (
    <Dialog
      open={categoryModal}
      PaperProps={{ className: classes.dialog, square: true }}
      fullWidth
    >
      <DialogTitle
        className={classes.dialogTitle}
        style={{
          boxShadow: shadow
            ? "0 1px 2px rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)"
            : "none",
        }}
        onClose={onClose}
      >
        <div className={classes.title}>
          <Typography variant="h3" component="span">
            Category
          </Typography>
          <Typography variant="body1" color="textSecondary" component="span">
            {content.name}
          </Typography>
        </div>

        <IconButton
          aria-label="close"
          className={classes.backButton}
          onClick={selected ? () => setSelected(null) : onClose}
        >
          <ArrowBackIcon />
        </IconButton>

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent classes={{ root: classes.dialogContent }} ref={dialogRef}>
        <div className={classes.searchBlock}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-edit-cat">
              Search more categories
            </InputLabel>
            <OutlinedInput
              type={"text"}
              labelWidth={170}
              id="outlined-adornment-edit-cat"
              className={classes.inputOutlined}
              value={textSearch}
              onChange={onTextChange}
              endAdornment={
                <InputAdornment position="end">
                  {textSearch ? (
                    <CloseIcon
                      onClick={onClear}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <SearchIcon />
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <Divider />
        {!selected ? (
          <Typography className={classes.listTitle}>
            {"Popular categories"}
          </Typography>
        ) : null}
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.list}
        >
          {selected ? (
            selected.length ? (
              selected.map((item) => (
                <ListItem
                  key={item}
                  button
                  className={classes.listItem}
                  onClick={() => onChoose(item)}
                >
                  <ListItemText primary={item} />
                </ListItem>
              ))
            ) : (
              <div className={classes.notFound}>
                <Typography variant="subtitle1">No results found</Typography>
                <Typography variant="body2">
                  Try searching for something else or go back to the category
                  picker
                </Typography>
              </div>
            )
          ) : (
            categoryItems.map((item) => (
              <ListItem
                key={item.key}
                button
                className={classes.listItem}
                onClick={() => {
                  setSelected(item.value.nested);
                }}
              >
                <ListItemIcon>
                  <item.value.IconComponent color="primary" />
                </ListItemIcon>
                <ListItemText primary={item.key} />
                <ListItemIcon className={classes.listItemEndIcon}>
                  <ArrowForwardIosIcon
                    fontSize="small"
                    classes={{ fontSizeSmall: classes.fontSmall }}
                  />
                </ListItemIcon>
              </ListItem>
            ))
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategory;
