import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as IconAdd } from "../../images/icons/add.svg";

const Button = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  position: fixed;
  font: inherit;
  background-color: #97cba9;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    position: relative;
    left: 50px;
    top: 100px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    position: relative;
    left: 100px;
    top: 100px;
  }

  @media (min-width: 1280px) {
    right: 85px;
    bottom: 40px;
  }
`;

const AddContactBtn = ({ onClick }) => (
  <Button type="button" onClick={onClick} aria-label="Add contact">
    <IconAdd width="40" height="40" fill="white" />
  </Button>
);

AddContactBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};

export default AddContactBtn;
