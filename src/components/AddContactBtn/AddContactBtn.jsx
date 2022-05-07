import PropTypes from "prop-types";

import { ReactComponent as IconAdd } from "../../images/icons/add.svg";

import s from "./AddContactBtn.module.scss";

const AddContactBtn = ({ onClick }) => (
  <button className={s.formBtn} type="button" onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <IconAdd width="40" height="40" fill="white" />
  </button>
);

AddContactBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};

export default AddContactBtn;
