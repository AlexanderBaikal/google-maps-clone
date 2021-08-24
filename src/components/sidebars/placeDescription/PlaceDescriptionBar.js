//

import {
  Divider,
  Input,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";

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
import UploadPhotoModal from "./../../modals/uploadPhoto/UploadPhotoModal";
import CompletePhotoModal from "./../../modals/uploadPhoto/CompletePhotoModal";
import ReviewModalContainer from "../../modals/review/ReviewModalContainer";
import EditModalContainer from "../../modals/edit/EditModalContainer";
import UploadPhotoContainer from "../../modals/uploadPhoto/UploadPhotoContainer";

const useStyles = makeStyles((theme) => ({
  root: {},
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
}) => {
  const classes = useStyles();

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleOpenUploadPhoto = () => {
    setOpenUploadPhoto(true);
  };

  const [topImgSrc, setTopImgSrc] = useState(content.imageUrl);

  const onTopImageError = () => {
    setTopImgSrc(
      "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
    );
  };

  return (
    <div>
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
        <BottomButton
          title="Suggest an edit"
          startIcon={CreateOutlinedIcon}
          onClick={handleOpenEdit}
        />
        <EditModalContainer />
      </div>
      <Divider />
      <div className={classes.photos}>
        <HeaderBar title="Photos" />
        <PhotoCards images={images} />

        <BottomButton
          title="Add a photo"
          startIcon={CameraAltOutlinedIcon}
          onClick={handleOpenUploadPhoto}
        />
        <UploadPhotoContainer />
        <CompletePhotoModal
          setOpenCompletePhoto={setOpenCompletePhoto}
          openCompletePhoto={openCompletePhoto}
        />
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
            />
          </div>
        ) : null}
        <BottomButton title="View all" textButton />
      </div>
      <Divider />
      <div className={classes.review}>
        <HeaderBar title="Review Summary" />
        <RatingReview content={content} />
        <BottomButton
          onClick={() => setAddComment(true)}
          title="Write a review"
          startIcon={RateReviewOutlinedIcon}
        />
      </div>
      <Divider />
      <div className={classes.comments}>
        <ReviewModalContainer />
        <HeaderBar
          title="Reviews"
          buttons={
            <>
              <Button
                className={classes.subheaderButton}
                variant="outlined"
                style={{ padding: "7px 8px", marginRight: "5px" }}
              >
                <SearchOutlinedIcon fontSize="small" color="primary" />
              </Button>
              <Button variant="outlined" className={classes.subheaderButton}>
                <SortOutlinedIcon fontSize="small" color="primary" />
                Sort
              </Button>
            </>
          }
        />

        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default PlaceDescriptionBar;
