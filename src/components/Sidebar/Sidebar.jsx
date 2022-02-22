import { useSelector } from "react-redux";
import styled from "styled-components";

import { contactsSelectors } from "../../redux/contacts";

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .sidebar {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 204px;
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    .sidebar {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 204px;
      padding-top: 13px;
      padding-right: 0;
    }
  }
`;

export default function Sidebar() {
  const total = useSelector(contactsSelectors.getTotalContacts);
  return (
    <SideWrapper>
      <p>
        <span>Total Contacts:</span>
        <span>{total}</span>
      </p>
    </SideWrapper>
  );
}
