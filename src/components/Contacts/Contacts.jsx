import IconButton from "../IconButton";
import { ReactComponent as DeleteButton } from "../../images/icons/delete.svg";
import { GlobalStyle } from "../GlobalStyle";
import operations from "../../redux/contacts/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  const onDeleteContact = (id) => dispatch(operations.deleteContact(id));

  return (
    <>
      <GlobalStyle />

      <ul>
        {contacts.map(({ name, phone, id }) => (
          <li key={id}>
            <p>
              {name} :<a href="tel:{number}">{phone}</a>
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
