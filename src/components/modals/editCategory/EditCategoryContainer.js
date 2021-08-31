import { connect } from "react-redux";
import { setContent } from "../../../redux/place/actions";
import { setCategoryModal } from "./../../../redux/active/actions";
import EditCategory from "../editCategory/EditCategory";

const EditCategoryContainer = (props) => {
  return (
    <EditCategory
      categoryModal={props.categoryModal}
      setCategoryModal={props.setCategoryModal}
      setContent={props.setContent}
      content={props.content}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.place.content,
    categoryModal: state.active.categoryModal,
  };
};

const mapDispatchToProps = {
  setContent,
  setCategoryModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryContainer);
