import {
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { createRef } from "react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { uploadPhotoFirebase } from "../../../firebase";
import clsx from "clsx";
import { useEffect } from "react";
import PhotoPreviews from "./../PhotoPreviews";
import { compress } from "../../../utils/compress";
import { getPreviews } from "../../../utils/previews";

const useStyles = makeStyles((theme) => {
  return {
    dropzone: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      color: "#bdbdbd",
    },
    dropzoneStandard: {
      borderWidth: "4px",
      borderColor: "#ccc",
      borderStyle: "dashed",
      backgroundColor: "#fafafa",
      outline: "none",
      transition: "border .24s ease-in-out",
    },
    dropzoneLite: {},

    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    },
    containerStandard: {
      height: "350px",
    },

    containerLite: {
      height: "330px",
    },
    small: {
      fontSize: "0.7rem",
    },
    progress: {
      width: "70%",
      margin: "10px 0",
      height: "10px",
      border: "1px solid",
      backgroundColor: "#fff",
    },
    loadingBlock: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    dragImage: {
      background:
        'no-repeat url("https://ssl.gstatic.com/docs/picker/images/picker_sprite-v113.png")',
      backgroundPosition: "-204px 0",
      width: "74px",
      height: "86px",
      opacity: 0.4,
    },

    "@media screen and (max-width: 540px)": {
      containerStandard: {
        height: "55vh",
      },},
  };
});

const MyDropzone = ({
  openUploadPhoto,
  photoFiles,
  setPhotoFiles,
  keyword,
  setOpenUploadPhoto,
  setOpenCompletePhoto,
}) => {
  const classes = useStyles();

  const dropStates = {
    UPLOAD: "UPLOAD",
    LOADING: "LOADING",
    PREVIEW: "PREVIEW",
  };

  const [dropzoneState, setDropzoneState] = useState(dropStates.UPLOAD);

  const dropzoneRef = createRef();
  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const [previewFiles, setPreviewFiles] = useState([]);

  useEffect(() => {
    if (!previewFiles.length) {
      setDropzoneState(dropStates.UPLOAD);
    }
  }, [previewFiles]);

  async function onDrop(files) {
    if (!openUploadPhoto) {
      setPreviewFiles(files);
      var newFiles = await getPreviews(files);
      setPhotoFiles(photoFiles.concat(newFiles));
      setDropzoneState(dropStates.PREVIEW);
    } else {
      standardUpload(files);
    }
  }

  const onComplete = () => {
    setOpenUploadPhoto(false);
    setOpenCompletePhoto(true);
  };

  async function standardUpload(files) {
    setDropzoneState(dropStates.LOADING);
    var promises = files.map((file) => uploadPhotoFirebase(file, keyword));
    await Promise.all(promises);
    setDropzoneState(dropStates.UPLOAD);
    onComplete();
  }

  return (
    <Dropzone
      ref={dropzoneRef}
      noClick
      noKeyboard
      onDrop={(acceptedFiles) => onDrop(acceptedFiles)}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        return (
          <div
            className={clsx(
              classes.container,
              !openUploadPhoto
                ? classes.containerLite
                : classes.containerStandard
            )}
          >
            {dropzoneState === dropStates.LOADING ? (
              <div className={classes.loadingBlock}>
                <Typography variant="subtitle2" style={{ marginBottom: "4px" }}>
                  Uploading...
                </Typography>
                <LinearProgress className={classes.progress} />
              </div>
            ) : (
              <div
                {...getRootProps({
                  className: clsx(
                    classes.dropzone,
                    !openUploadPhoto
                      ? classes.dropzonelite
                      : classes.dropzoneStandard
                  ),
                })}
              >
                <input {...getInputProps()} />
                {dropzoneState === dropStates.PREVIEW ? (
                  <PhotoPreviews
                    photoFiles={photoFiles}
                    setPhotoFiles={setPhotoFiles}
                    previewFiles={previewFiles}
                    setPreviewFiles={setPreviewFiles}
                  />
                ) : (
                  <>
                    {!openUploadPhoto ? (
                      <div className={classes.dragImage} />
                    ) : null}
                    <Typography variant="h5" style={{ marginBottom: "10px" }}>
                      Drag photos here
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ marginBottom: "4px" }}
                    >
                      or if you prefer...
                    </Typography>
                    <Button
                      variant="contained"
                      classes={{ containedSizeSmall: classes.small }}
                      color="primary"
                      size="small"
                      onClick={openDialog}
                    >
                      Choose photos to upload
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        );
      }}
    </Dropzone>
  );
};

export default MyDropzone;
