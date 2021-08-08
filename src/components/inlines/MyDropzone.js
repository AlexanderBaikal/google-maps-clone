import {
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { createRef } from "react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import CompletePhotoModal from "../modals/CompletePhotoModal";

const useStyles = makeStyles((theme) => {
  return {
    dropzone: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      borderWidth: "4px",
      borderColor: "#ccc",
      borderStyle: "dashed",
      backgroundColor: "#fafafa",
      color: "#bdbdbd",
      outline: "none",
      transition: "border .24s ease-in-out",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      height: "400px",
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
  };
});

// Disable click and keydown behavior on the <Dropzone>
const MyDropzone = ({onComplete}) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  

  const dropzoneRef = createRef();
  const openDialog = () => {
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  return (
    <Dropzone ref={dropzoneRef} noClick noKeyboard>
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        console.log(getInputProps);
        return (
          <div className={classes.container}>
            <div
              {...getRootProps({ className: classes.dropzone })}
              onDrop={(f) => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  onComplete()
                }, 600);
              }}
            >
              {!loading ? (
                <>
                  <input {...getInputProps()} />
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
              ) : (
                <>
                  <Typography
                    variant="subtitle2"
                    style={{ marginBottom: "4px" }}
                  >
                    Uploading...
                  </Typography>
                  <LinearProgress className={classes.progress} />
                </>
              )}
            </div>
          </div>
        );
      }}
    </Dropzone>
  );
};

export default MyDropzone;
