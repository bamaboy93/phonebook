import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

import s from "./VerifyView.module.scss";

export default function VerifyView() {
  return (
    <Container>
      <div className={s.wrapper}>
        <h1 className={s.title}>
          Thank you for verification your e-mail. Now you can SignIn.
        </h1>
        <button type="button" className={s.loginButton}>
          <NavLink to="/login">Sign In</NavLink>
        </button>
      </div>
    </Container>
  );
}
