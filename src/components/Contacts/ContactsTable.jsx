import DesktopTable from "./DeskTable/ContactsTableDesktop";
import MobileTable from "./MobileTable/ContactsTableMobile";

import MediaQuery from "react-responsive";

const TransactionTab = () => {
  return (
    <MediaQuery maxWidth={767}>
      {(matches) => (matches ? <MobileTable /> : <DesktopTable />)}
    </MediaQuery>
  );
};

export default TransactionTab;
