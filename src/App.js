import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Container from "./components/Container";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import Filter from "./components/Filter";
import ContactModal from "./components/ContactModal";
import IconButton from "./components/IconButton";
import { ReactComponent as IconAdd } from "./images/icons/add.svg";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.some(
      (contact) => contact.name.toLocaleLowerCase() === name.toLowerCase()
    )
      ? toast.warn(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));

    this.toggleModal();
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, showModal } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <IconButton onClick={this.toggleModal} aria-label="Add contact">
          <IconAdd width="40" height="40" fill="white" />
        </IconButton>

        <ToastContainer position="top-center" autoClose={2000} />

        {showModal && (
          <ContactModal onClose={this.toggleModal}>
            <ContactsForm onSubmit={this.addContact} />
          </ContactModal>
        )}

        <Filter filter={filter} onChange={this.changeFilter} />

        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
          onToggleModal={this.toggleModal}
        />
      </Container>
    );
  }
}

export default App;
