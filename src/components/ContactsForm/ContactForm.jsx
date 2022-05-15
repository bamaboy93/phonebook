import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./ContactForm.module.scss";

const Form = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const page = useSelector(contactsSelectors.getPage);

  const inputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "phone":
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPhone("");
    if (!name || !phone) return;

    const contactName = contacts.map((contact) => contact.name.toLowerCase());
    if (contactName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(contactsOperations.addContact(name, phone, page));

    onClose();
  };

  return (
    <div className={s.userModal}>
      <h2 className={s.modalTitle}>Add Contact</h2>
      <form onSubmit={formSubmit}>
        <div className={s.modalBox}>
          <input
            className={s.input}
            type="text"
            onChange={inputChange}
            value={name}
            placeholder="Name"
            name="name"
            id="name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          />
          <label htmlFor="name" className={s.label}>
            Name
          </label>
        </div>
        <div className={s.modalBox}>
          <input
            className={s.input}
            type="text"
            value={phone}
            onChange={inputChange}
            placeholder="Phone"
            id="phone"
            required
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          />
          <label htmlFor="name" className={s.label}>
            Telephone
          </label>
        </div>
        <button className={s.formBtn} type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Form;
