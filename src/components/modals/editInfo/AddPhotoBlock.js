import { Button, makeStyles, Typography } from "@material-ui/core";
import PhotoSection from "../review/PhotoSection";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useRef, useState } from "react";
import { getPreviews } from "../../../utils/previews";

const useStyles = makeStyles((theme) => ({
  root: {},
  wideButton: {
    marginBottom: "10px",
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    borderColor: theme.palette.grey[400],
  },
  bottonIcon: {
    marginRight: "8px",
    marginBottom: "4px",
  },
  underButtonText: {
    fontStyle: "italic",
  },
}));

const AddPhotoBlock = ({ files, setFiles }) => {
  const classes = useStyles();

  const inputFileRef = useRef(null);

  const onAddPhotoClick = () => {
    inputFileRef.current.click();
  };

  async function addPhotoHandler(e) {
    var newFiles = await getPreviews(Array.from(e.target.files));
    if (files.length) {
      setFiles(files.concat(newFiles));
    } else {
      setFiles(newFiles);
    }
  }


  return (
    <div>
      {files.length ? (
        <PhotoSection
          files={files}
          setFiles={setFiles}
          handleAddPhoto={onAddPhotoClick}
          fullHeight
        />
      ) : (
        <Button
          variant="outlined"
          color="primary"
          className={classes.wideButton}
          onClick={onAddPhotoClick}
        >
          <AddAPhotoIcon fontSize="small" className={classes.bottonIcon} />
          Add a photo
        </Button>
      )}

      <input
        type="file"
        id="file"
        ref={inputFileRef}
        style={{ display: "none" }}
        onChange={addPhotoHandler}
      />
      <Typography
        variant="h2"
        color="textSecondary"
        className={classes.underButtonText}
      >
        Helpful photos include the shopfront, notices and hours. If you add
        photos, they will appear publicly with your profile name and picture.
        They will appear on Google services across the web, like Maps and
        Search, and on third-party sites and apps that use Google services.
        Google may also use them to update other information about this place.
      </Typography>
    </div>
  );
};

export default AddPhotoBlock;
