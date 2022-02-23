import React from "react";
import { useState } from "react";

import styles from "./ContactsView.module.scss";

import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar/Sidebar";
import ContactForm from "../../components/ContactsForm/ContactForm";
import ContactModal from "../../components/ContactModal";
import ContactsTable from "../../components/Contacts/ContactsTable";
import AddContactBtn from "../../components/AddContactBtn";
import { ReactComponent as IconAdd } from "../../images/icons/add.svg";

export default function ContactsView() {
  const [showModal, setshowModal] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <div className={styles.contactsMain}>
      <Container>
        <div className={styles.dashboard}>
          <AddContactBtn onClick={toggleModal} aria-label="Add contact">
            <IconAdd width="40" height="40" fill="white" />
          </AddContactBtn>

          {showModal && (
            <ContactModal onClose={toggleModal}>
              <ContactForm onClose={toggleModal} />
            </ContactModal>
          )}

          <Sidebar />

          <ContactsTable onToggleModal={toggleModal} />
        </div>
      </Container>
    </div>
  );
}
