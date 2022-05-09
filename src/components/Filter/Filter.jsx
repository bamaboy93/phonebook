import { useSelector, useDispatch } from "react-redux";

import contactsSelectors from "../../redux/contacts/contacts-selectors";
import * as actions from "../../redux/contacts";

import s from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <input
      className={s.filter}
      type="text"
      name="filter"
      id="filter"
      placeholder="Filter..."
      value={value}
      onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
    />
  );
};

export default Filter;
