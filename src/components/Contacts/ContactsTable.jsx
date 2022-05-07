import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Filter from "../../components/Filter";
import { ReactComponent as DeleteIcon } from "../../images/icons/delete.svg";
import contactLogo from "../../images/icons/user.png";

import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import styles from "./ContactsTable.module.scss";
import Pagination from "../Pagination";

const DeleteBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  background-color: transparent;

  opacity: 0.6;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
const ContactLogo = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const ContactsTable = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const totalPages = useSelector(contactsSelectors.getTotalPages);
  const page = useSelector(contactsSelectors.getPage);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts(page));
  }, [dispatch, page]);

  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tabler}>
            <th>
              <Filter />
            </th>
            <th>Name</th>
            <th>Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {contacts.map(({ name, phone, id }) => (
            <tr key={id} className={styles.tr}>
              <td>
                <ContactLogo src={contactLogo} />
              </td>

              <td>{name}</td>
              <td>
                <a className={styles.telLink} href="tel:{number}">
                  {phone}
                </a>
              </td>
              <td>
                <DeleteBtn onClick={() => onDeleteContact(id)} type="button">
                  <DeleteIcon width="20" height="20" fill="#ff6596" />
                </DeleteBtn>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} page={page} />
    </div>
  );
};

export default ContactsTable;
