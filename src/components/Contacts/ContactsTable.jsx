import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Filter from "../../components/Filter";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import styles from "./ContactsTable.module.scss";
import Pagination from "../Pagination";

const DeleteBtn = styled(DeleteForeverIcon)`
  cursor: pointer;
  color: #ff6596;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
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
          <tr className={styles.tr}>
            <th>
              <Filter />
            </th>

            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {contacts.map(({ name, phone, id }) => (
            <tr key={id} className={styles.tr}>
              <td></td>

              <td>{name}</td>
              <td>
                <a href="tel:{number}">{phone}</a>
              </td>
              <td>
                <DeleteBtn
                  onClick={() => onDeleteContact(id)}
                  aria-label="Delete contact"
                />
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
