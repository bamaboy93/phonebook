import { useSelector, useDispatch } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import * as actions from "../../redux/contacts";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = (e) => dispatch(actions.changeFilter(e.target.value));

  return (
    <label>
      Filter
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

export default Filter;
