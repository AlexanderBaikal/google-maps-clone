import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => {
  return {
    thumbsContainer: {
      display: "flex",
      flexWrap: "wrap",
    },

    thumb: {
      marginBottom: 8,
      marginRight: 8,
    },

    thumbInner: {
      display: "flex",
      minWidth: 0,
      overflow: "hidden",
      position: "relative",
    },

    thumbImg: {
      display: "block",
      width: "auto",
      height: "100%",
    },
    bar: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
      width: "100%",
      bottom: 0,
      textAlign: "right",
    },
    deleteIcon: {
      cursor: "pointer",
      fontSize: "1.2rem",
      margin: "2px 4px",
    },
  };
});

const PhotoPreviews = ({ files, setFiles, previewFiles, setPreviewFiles }) => {
  const classes = useStyles();

  const [activeElem, setActiveElem] = useState(null);

  const handleMouseOver = (file) => {
    setActiveElem(file);
  };

  const handleMouseLeave = () => {
    setActiveElem(null);
  };

  const onDeleteClick = (file) => {
    setFiles(files.filter((f) => f !== file));
    setPreviewFiles(previewFiles.filter((f) => f !== file));
  };

  return (
    <div className={classes.thumbsContainer}>
      {previewFiles.map((file, i) => (
        <div
          className={classes.thumb}
          key={file.name}
          onMouseOver={() => handleMouseOver(i)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.thumbInner}>
            <img src={file.preview} className={classes.thumbImg}></img>
            <div
              style={{ display: activeElem === i ? "block" : "none" }}
              className={classes.bar}
            >
              <DeleteOutlineOutlinedIcon
                className={classes.deleteIcon}
                onClick={() => onDeleteClick(file)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoPreviews;
