import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.topContact}>
          <p>T: +48 693-739-517 | E: k.krzykalski47@gmail.com</p>
        </div>
        <nav className={classes.nav}>
        <Link className={classes.logo} to="*" key="logo">
            <p>KRZYKALSKI - KURSY</p>
          </Link>
          <Link className={classes.link} to="Offer" key="offer1">
            <p>Kurs dla przewodników turystycznych</p>
          </Link>
          <Link className={classes.link} to="Offer" key="offer2">
            <p>Kursy językowe</p>
          </Link>
          <Link className={classes.link} to="Contact" key="contact">
            <p>Kontakt</p>
          </Link>
        </nav>
      </header>
    </div>
  );
}
