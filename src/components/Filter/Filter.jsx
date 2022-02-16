import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Filter
      <input type="text" value={filter} onChange={onChange}></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
