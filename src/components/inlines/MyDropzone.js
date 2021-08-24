import {
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { createRef } from "react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { uploadPhotoFirebase } from "../../firebase";
import clsx from "clsx";
import { useEffect } from "react";
import Jimp from "jimp";
import PhotoPreviews from "./PhotoPreviews";

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
      height: "400px",
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
  };
});

const MyDropzone = ({ onComplete, lite, preview, files, setFiles, keyword }) => {
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

  function onDrop(files) {
    if (preview) {
      setPreviewFiles(files);
      getPreviews(files);
      setDropzoneState(dropStates.PREVIEW);
    } else {
      standardUpload(files);
    }
  }

  async function compress(file) {
    var image = await Jimp.read(URL.createObjectURL(file));
    var [w, h] = [image.bitmap.width, image.bitmap.height];
    const coef = 130;
    await image.resize((w * coef) / h, coef);
    var buf = await image.getBufferAsync(Jimp.MIME_PNG);
    return new File([buf], "filename.png", { type: Jimp.MIME_PNG });
  }

  async function getPreviews(receivedFiles) {
    const promises = receivedFiles.map((file) => compress(file));
    var res = await Promise.all(promises);
    var newFiles = res.map((file, i) => {
      return Object.assign(receivedFiles[i], {
        preview: URL.createObjectURL(file),
      });
    });
    setFiles(files.concat(newFiles));
  }

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
              lite ? classes.containerLite : classes.containerStandard
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
                    lite ? classes.dropzonelite : classes.dropzoneStandard
                  ),
                })}
              >
                <input {...getInputProps()} />
                {dropzoneState === dropStates.PREVIEW ? (
                  <PhotoPreviews
                    files={files}
                    setFiles={setFiles}
                    previewFiles={previewFiles}
                    setPreviewFiles={setPreviewFiles}
                  />
                ) : (
                  <>
                    {lite ? <div className={classes.dragImage} /> : null}
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
