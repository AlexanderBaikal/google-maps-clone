//

import { Divider, Input, makeStyles, Button } from "@material-ui/core";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

import clsx from "clsx";
import { useState } from "react";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import PlacesList from "./../../inlines/PlacesList";
import Comments from "./../../inlines/Comments";
import Chips from "./../../inlines/Chips";
import RatingReview from "./../../inlines/RatingReview";
import PhotoCards from "./../../inlines/PhotoCards";
import ListInfo from "./../../inlines/ListInfo";
import ActionButtons from "./../../inlines/ActionButtons";
import BasicInfo from "./../../inlines/BasicInfo";
import HeaderBar from "./../../inlines/HeaderBar";
import BottomButton from "./../../inlines/BottomButton";
import ReviewModalContainer from "../../modals/review/ReviewModalContainer";


const useStyles = makeStyles((theme) => ({
  topImage: {
    overflow: "hidden",
    width: "100%",
    objectFit: "cover",
    height: "235px",
  },

  listInfo: {
    padding: "6px 0",
  },

  photos: {
    // padding: "12px",
  },

  directoryInput: {
    border: "1px solid",
    boxSizing: "border-box",
    borderRadius: "8px",
    borderColor: "rgba(0, 0, 0, 0.23)",
    padding: "0 16px",
    marginBottom: "8px",
    height: "36px",

    "&:focus": {
      border: "2px solid",
      padding: "0 15px",
      borderColor: theme.palette.primary.main,
    },
  },

  directoryFilters: {
    padding: "0 5%",
  },

  directoryInputWrapper: {
    width: "97%",
    margin: "0 1.5%",
  },

  iconButton: {
    border: "1px solid blue",
    fontSize: "1rem",
  },

  subheaderButton: {
    borderRadius: "100px",
    padding: "5px 15px",
    minWidth: "35px",
  },
  searchShadow: {
    position: "fixed",
    width: "423px",
    height: "80px",
    background: "-webkit-linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0))",
  },
  signInButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "8px",
  },
}));

const PlaceDescriptionBar = ({
  setActiveBar,
  content,
  images,
  places,
  comments,
  setDescriptionData,
  setAddComment,
  setOpenEdit,
  setOpenUploadPhoto,
  openCompletePhoto,
  setOpenCompletePhoto,
  loadComments,
  profile,
  login,
  anyLoading,
  setPhotoGallery,
  setImagesType
}) => {
  const classes = useStyles();

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleOpenUploadPhoto = () => {
    setOpenUploadPhoto(true);
  };

  const [topImgSrc, setTopImgSrc] = useState(
    content.imageUrl ||
      "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
  );

  const onTopImageError = () => {
    setTopImgSrc(
      "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
    );
  };

  const [extended, setExtended] = useState(false);
  const handleExtended = () => {
    const limit = !extended ? 20 : 3;
    setExtended((v) => !v);
    loadComments(content.name, limit);
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchShadow}></div>
      <img
        src={topImgSrc}
        onError={onTopImageError}
        alt="top image"
        className={classes.topImage}
      />
      <BasicInfo content={content} />
      <Divider />
      <ActionButtons />
      <Divider />
      <div className={classes.listInfo}>
        <ListInfo content={content} />
        {profile ? (
          <BottomButton
            title="Suggest an edit"
            startIcon={CreateOutlinedIcon}
            onClick={handleOpenEdit}
          />
        ) : (
          <div className={classes.signInButton}>
            <Button color="primary" variant="outlined" onClick={login}>
              Sign in to edit
            </Button>
          </div>
        )}
      </div>
      <Divider />
      <div className={classes.photos}>
        <HeaderBar title="Photos" />
        <PhotoCards images={images} setPhotoGallery={setPhotoGallery} setImagesType={setImagesType}/>
        {profile ? (
          <BottomButton
            title="Add a photo"
            startIcon={CameraAltOutlinedIcon}
            onClick={handleOpenUploadPhoto}
          />
        ) : (
          <div className={classes.signInButton}>
            <Button color="primary" variant="outlined" onClick={login}>
              Sign in upload photo
            </Button>
          </div>
        )}

      </div>

      <Divider />
      <div className={classes.directory}>
        <HeaderBar title="Directory" />
        <div className={classes.directoryFilters}>
          <Input
            placeholder="Search for places"
            className={classes.directoryInputWrapper}
            inputProps={{
              "aria-label": "description",
              className: classes.directoryInput,
            }}
            disableUnderline
          />
          <Chips />
        </div>
        {places ? (
          <div className={classes.directoryPlaces}>
            <PlacesList
              items={places}
              maxCount={4}
              short
              setActiveBar={setActiveBar}
              setDescriptionData={setDescriptionData}
              loading={anyLoading}
              data={content}
            />
          </div>
        ) : null}
        <BottomButton title="View all" textButton />
      </div>
      <Divider />
      <div className={classes.review}>
        <HeaderBar title="Review Summary" />
        <RatingReview content={content} />
        {profile ? (
          <BottomButton
            onClick={() => setAddComment(true)}
            title="Write a review"
            startIcon={RateReviewOutlinedIcon}
          />
        ) : (
          <div className={classes.signInButton}>
            <Button color="primary" variant="outlined" onClick={login}>
              Sign in to write a review
            </Button>
          </div>
        )}
      </div>
      <Divider />
      <ReviewModalContainer />

      <div className={classes.comments}>
        <HeaderBar
          title="Reviews"
          buttons={
            <>
              <Button
                className={classes.subheaderButton}
                variant="outlined"
                style={{ padding: "7px 8px", marginRight: "5px" }}
                onClick={handleExtended}
              >
                <SearchOutlinedIcon fontSize="small" color="primary" />
              </Button>
              <Button
                variant="outlined"
                className={classes.subheaderButton}
                onClick={handleExtended}
              >
                <SortOutlinedIcon fontSize="small" color="primary" />
                Sort
              </Button>
            </>
          }
        />

        <Comments
          comments={comments}
          content={content}
          handleExtended={handleExtended}
          extended={extended}
        />
      </div>
    </div>
  );
};

export default PlaceDescriptionBar;
