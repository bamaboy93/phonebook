import styles from "./ContactsView.module.scss";

import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar/Sidebar";

import ContactsTable from "../../components/Contacts/ContactsTable";

export default function ContactsView() {
  return (
    <Container>
      <div className={styles.dashboard}>
        <Sidebar />

        <ContactsTable />
      </div>
    </Container>
  );
}
