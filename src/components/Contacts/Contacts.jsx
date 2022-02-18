import IconButton from "../IconButton";
import { ReactComponent as DeleteButton } from "../../images/icons/delete.svg";
import { GlobalStyle } from "../GlobalStyle";
import operations from "../../redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const Contacts = () => {
  const onDeleteContact = (id) => dispatch(operations.deleteContact(id));
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);
  return (
    <>
      <GlobalStyle />

      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} :<a href="tel:{number}">{number}</a>
            </p>
            <IconButton
              onClick={() => onDeleteContact(id)}
              aria-label="Delete contact"
            >
              <DeleteButton width="32" height="32" fill="white" />
            </IconButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
