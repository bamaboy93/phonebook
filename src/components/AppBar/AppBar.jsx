import Navigation from "../Navigation";

import s from "./AppBar.module.scss";

export default function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
