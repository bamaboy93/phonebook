import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

const Wrapper = styled.div`
  padding: 12px;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Link to="/preview">Homepage</Link>
        <Link to="/list">Contacts</Link>
      </Nav>
    </Wrapper>
  );
};

export default Navigation;
