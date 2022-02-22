import { useSelector, useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";

import contactsSelectors from "../../redux/contacts/contacts-selectors";
import * as actions from "../../redux/contacts";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <TextField
      label="Filter"
      color="secondary"
      size="small"
      type="text"
      value={value}
      onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
    />
  );
};

export default Filter;
