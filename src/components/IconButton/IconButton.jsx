import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: floralwhite;
  font: inherit;
  background-color: blueviolet;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = ({ children, onClick, ...allyProps }) => (
  <Button type="button" onClick={onClick} {...allyProps}>
    {children}
  </Button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};

export default IconButton;
