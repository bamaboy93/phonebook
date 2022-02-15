const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Filter
      <input type="text" value={filter} onChange={onChange}></input>
    </label>
  );
};

export default Filter;
