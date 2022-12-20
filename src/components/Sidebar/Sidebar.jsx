import { useSelector } from "react-redux";
import { useState } from "react";

import DatePicker from "sassy-datepicker";

import { contactsSelectors } from "../../redux/contacts";

import ContactForm from "../../components/ContactsForm/ContactForm";
import ContactModal from "../../components/ContactModal";
import AddContactBtn from "../../components/AddContactBtn";
import { ReactComponent as IconAdd } from "../../images/icons/add.svg";

import s from "./Sidebar.module.scss";

export default function Sidebar() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const [showModal, setshowModal] = useState(false);
  const total = contacts.length;
  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <div className={s.sideWrapper}>
      <div className={s.totalWrapper}>
        <h3 className={s.title}>
          Contacts:
          <span className={s.total}>{total}</span>
        </h3>
      </div>
      <div className={s.button}>
        <AddContactBtn onClick={toggleModal} aria-label="Add contact">
          <IconAdd width="40" height="40" fill="white" />
        </AddContactBtn>
      </div>

      <div className={s.dateWrapper}>
        <DatePicker className={s.sdp} onChange={onChange} />
      </div>
      {showModal && (
        <ContactModal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </ContactModal>
      )}
    </div>
  );
}
