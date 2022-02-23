import { useSelector } from "react-redux";

import authSelectors from "../../redux/auth/auth-selectors";

import logo from "../../images/icons/Logo.png";
import UserMenu from "../UserMenu";

import styled from "styled-components";

const HeaderContainer = styled.div`
  background: white;
  border-bottom: 1px solid grey;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  padding-top: 15px;
  padding-bottom: 15px;

  @media  (max-width: 767px) {
    width: 480px;
    padding-left:30px;
    padding-right:30px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    padding-left:40px;
    padding-right:40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding-left:85px;
    padding-right:85px;
  }
}
`;

const Logo = styled.img`
  width: 220px;
  height: 50px;
`;

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <HeaderContainer>
      <Header>
        <Logo src={logo} alt="Logo" />
        {isLoggedIn && <UserMenu />}
      </Header>
    </HeaderContainer>
  );
}
