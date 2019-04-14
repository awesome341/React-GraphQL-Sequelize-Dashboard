import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import { employeesOperations, employeesSelectors } from "./state";
import EditEmployeeModalComponent, { styles } from "./EditEmployeeModal";

const mapStateToProps = state => {
  return {
    isOpen: employeesSelectors.isEditModalOpen(state),
    currentId: employeesSelectors.getEditModalEmployeeId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(employeesOperations.hideEditModal()),
    onCreate: (uid, checked, name, dept, title, country, salary) =>
      dispatch(
        employeesOperations.create({
          uid,
          checked,
          name,
          dept,
          title,
          country,
          salary
        })
      ),
    onEdit: (id, uid, checked, name, dept, title, country, salary) =>
      dispatch(
        employeesOperations.edit({
          id,
          uid,
          checked,
          name,
          dept,
          title,
          country,
          salary
        })
      )
  };
};

const EditEmployeeModal = withStyles(styles)(
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(EditEmployeeModalComponent)
  )
);

export default EditEmployeeModal;
