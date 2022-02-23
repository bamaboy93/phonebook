import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import contactsSelectors from "../../redux/contacts/contacts-selectors";
import * as actions from "../../redux/contacts";

const FilterInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.75rem + 2px);
  padding: 0.375rem 0.75rem;

  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #97cba9;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
  @media (min-width: 768px) {
    width: 200px;
    height: calc(2.25rem + 2px);
  }
  @media (min-width: 1280px) {
    width: 300px;
    height: calc(2.25rem + 2px);
  }
`;

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <FilterInput
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
