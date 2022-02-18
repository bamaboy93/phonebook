import { useSelector } from "react-redux";

import UserMenu from "../UserMenu";

import s from "./AppBar.module.scss";

import authSelectors from "../../redux/auth/auth-selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <header className={s.header}>{isLoggedIn && <UserMenu />}</header>;
}
