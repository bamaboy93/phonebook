import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Container from "./components/Container";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Filter from "./components/Filter";
import ContactModal from "./components/ContactModal";
import IconButton from "./components/IconButton";
import AppBar from "./components/AppBar";
import { ReactComponent as IconAdd } from "./images/icons/add.svg";
import useLocalStorage from "./hooks/useLocalStorage";

import HomeView from "./views/HomeView";
import ContactsView from "./views/ContactsView";

const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", "");
  const [filter, setFilter] = useState("");
  const [showModal, setshowModal] = useState(false);

  const addContact = ({ name, number }) => {
    if (contacts.find((contact) => contact.name === name)) {
      toast.warn(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    setContacts((prevState) => [...prevState, contact]);
    toggleModal();
  };

  const deleteContact = (contactID) => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const onFilter = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const visibleContacts = onFilter();

  const toggleModal = () => {
    setshowModal(!showModal);
  };
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
      <AppBar />

      <IconButton onClick={toggleModal} aria-label="Add contact">
        <IconAdd width="40" height="40" fill="white" />
      </IconButton>

      <ToastContainer position="top-center" autoClose={2000} />

      {showModal && (
        <ContactModal onClose={toggleModal}>
          <ContactsForm onSubmit={addContact} />
        </ContactModal>
      )}

      <Filter filter={filter} onChange={changeFilter} />

      <Contacts
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
        onToggleModal={toggleModal}
      />
    </Container>
  );
};

export default App;
