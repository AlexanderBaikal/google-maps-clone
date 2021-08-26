import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import { IconButton, makeStyles } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  addPhoto: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    border: "2px solid #efefef",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(66,133,244,0.078)",
      border: "2px solid #d2e3fc",
    },

    margin: "1px",
  },
  preview: {
    // height: "95px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    margin: "2px",
    position: "relative",
  },
  imgPreview: {
    // width: "117px",
  },
  photos: {
    display: "flex",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  deleteButton: {
    position: "absolute",
    padding: 0,
    right: "4px",
    top: "4px",
  },
  closeIcon: {
    fill: "white",
  },
  fullHeight: {
    height: "100%",
    objectFit: "cover",
  },
}));

const PhotoSection = ({
  files,
  setFiles,
  handleAddPhoto,
  fullHeight = false,
}) => {
  const classes = useStyles();

  const handleDeleteClick = (file) => {
    setFiles(files.filter((f) => f !== file));
  };

  return (
    <div
      className={classes.photos}
      style={{
        alignSelf: "start",
        marginBottom: "12px",
      }}
    >
      <div
        className={classes.addPhoto}
        onClick={handleAddPhoto}
        style={{
          width: fullHeight ? "72px" : "114px",
          height: fullHeight ? "72px" : "92px",
        }}
      >
        <AddAPhotoOutlinedIcon color="primary" />
      </div>
      {files.map((file, i) => (
        <div key={i}>
          <div
            className={classes.preview}
            style={{
              height: fullHeight ? "74px" : "95px",
              marginLeft: fullHeight ? "6px" : 0,
              borderRadius: fullHeight ?  0 : "4px" ,
            }}
          >
            <IconButton
              size="small"
              aria-label=""
              className={classes.deleteButton}
              onClick={() => handleDeleteClick(file)}
            >
              <HighlightOffIcon className={classes.closeIcon} />
            </IconButton>
            <img
              className={
                fullHeight
                  ? clsx(classes.imgPreview, classes.fullHeight)
                  : classes.imgPreview
              }
              style={{ width: fullHeight ? "74px" : "117px" }}
              src={file.preview}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoSection;
