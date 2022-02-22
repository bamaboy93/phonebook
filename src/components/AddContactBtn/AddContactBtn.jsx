import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as IconAdd } from "../../images/icons/add.svg";

const Button = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;

  font: inherit;
  background-color: #fcd2c5;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: "0px 5px 5px 0px #000";
  }
  position: fixed;
  @media (max-width: 767px) {
    right: 20px;
    bottom: 30px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    right: 40px;
    bottom: 40px;
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
