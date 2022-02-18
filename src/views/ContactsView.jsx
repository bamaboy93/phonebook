import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material//Typography";

import Container from "../components/Container";
import ContactForm from "../components/ContactsForm";
import ContactModal from "../components/ContactModal";
import Contacts from "../components/Contacts";
import Filter from "../components/Filter";
import IconButton from "../components/IconButton";
import { ReactComponent as IconAdd } from "../images/icons/add.svg";

import contactsSelectors from "../redux/contacts/contacts-selectors";
import { contactsOperations } from "../redux/contacts";

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const [showModal, setshowModal] = useState(false);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <Container>
      <Typography component="h1" variant="h2" sx={{ mt: 10, mb: 5 }}>
        Phonebook
      </Typography>
      <IconButton onClick={toggleModal} aria-label="Add contact">
        <IconAdd width="40" height="40" fill="white" />
      </IconButton>
      {isLoadingContacts && <h1>Загружаем...</h1>}
      {showModal && (
        <ContactModal onClose={toggleModal}>
          <ContactForm />
        </ContactModal>
      )}

      <Typography component="h2" variant="h4" sx={{ mt: 5, mb: 5 }}>
        Contacts
      </Typography>

      <Filter />

      <Contacts onToggleModal={toggleModal} />
    </Container>
  );
}
