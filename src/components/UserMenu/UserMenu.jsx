import { useDispatch, useSelector } from "react-redux";

import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";

import { ReactComponent as LogoutButton } from "../../images/icons/logout2.svg";
import styled from "styled-components";
import defaultAvatar from "../../images/icons/user.png";

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const ExitButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  color: grey;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.1);
  }
`;
const UserName = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: grey;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Avatar = styled.img`
  width: 50px;
  margin-right: 15px;
  border-radius: 50%;
  @media (max-width: 767px) {
    margin-right: 0;
  }
`;

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = useSelector(authSelectors.getAvatar);

  return (
    <Menu>
      {avatar ? (
        <Avatar src={avatar} alt="user avatar" />
      ) : (
        <Avatar src={defaultAvatar} alt="user avatar" />
      )}
      <UserName>{name}</UserName>
      <ExitButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        aria-label="Logout"
        fill="grey"
      >
        <LogoutButton width="28" height="28" fill="grey" />
      </ExitButton>
    </Menu>
  );
}
