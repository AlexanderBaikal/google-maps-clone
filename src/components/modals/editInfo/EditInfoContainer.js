import { connect } from "react-redux";
import EditInfoModal from "./EditInfoModal";
import {
  setOpenEditInfo,
  setOpenCompleteEditInfo,
} from "./../../../redux/sidebars/placeDescription/actions";
import { setData } from "./../../../redux/sidebars/placeDescription/data/actions";
import CompleteEditInfoModal from "./CompleteEditInfoModal";
import EditCategory from "./EditCategory";
import { useState } from "react";

const EditInfoContainer = (props) => {
  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <>
      <EditInfoModal
        content={props.content}
        openEditInfo={props.openEditInfo}
        setOpenEditInfo={props.setOpenEditInfo}
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
        categoryModal={categoryModal}
        setCategoryModal={setCategoryModal}
      />
      <CompleteEditInfoModal
        setOpenCompleteEditInfo={props.setOpenCompleteEditInfo}
        openCompleteEditInfo={props.openCompleteEditInfo}
      />
      <EditCategory
        categoryModal={categoryModal}
        setCategoryModal={setCategoryModal}
        setData={props.setData}
        content={props.content}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.sidebars.descriptionBar.data.content,
    openEditInfo: state.sidebars.descriptionBar.main.openEditInfo,
    openCompleteEditInfo:
      state.sidebars.descriptionBar.main.openCompleteEditInfo,
  };
};

const mapDispatchToProps = {
  setOpenEditInfo,
  setOpenCompleteEditInfo,
  setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoContainer);
