import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Filter from "../../Filter";
import { ReactComponent as DeleteIcon } from "../../../images/icons/delete.svg";
import contactLogo from "../../../images/icons/user.png";

import contactsOperations from "../../../redux/contacts/contacts-operations";
import contactsSelectors from "../../../redux/contacts/contacts-selectors";

import styles from "./ContactsTableMobile.module.scss";
import Pagination from "../../Pagination";

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
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {contacts.map(({ name, phone, id }) => (
            <tr key={id} className={styles.tr}>
              <td>
                <img
                  className={styles.contactLogo}
                  src={contactLogo}
                  alt="Contact Logo"
                />
              </td>

              <td>
                <p className={styles.contactName}>{name}</p>
                <a className={styles.telLink} href="tel:{number}">
                  {[phone.slice(0, 3), phone.slice(3, 7), phone.slice(7)].join(
                    " "
                  )}
                </a>
              </td>
              <td>
                <button
                  className={styles.deleteBtn}
                  onClick={() => onDeleteContact(id)}
                  type="button"
                >
                  <DeleteIcon width="20" height="20" fill="#ff6596" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && <Pagination totalPages={totalPages} page={page} />}
    </div>
  );
};

export default ContactsTable;
