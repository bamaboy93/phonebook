import IconButton from "../IconButton";
import PropTypes from "prop-types";

import { ReactComponent as DeleteButton } from "../../images/icons/delete.svg";

const Contact = ({ name, number, onDelete }) => (
  <div>
    <p>
      {name} :<a href="tel:{number}">{number}</a>
    </p>
    <IconButton onClick={onDelete} aria-label="Delete contact">
      <DeleteButton width="32" height="32" fill="white" />
    </IconButton>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
