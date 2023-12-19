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
          <Link className={classes.logo} to="*">
            <p>KRZYKALSKI - KURSY</p>
          </Link>
          <Link className={classes.link} to="Offer">
            <p>Kurs dla przewodników turystycznych</p>
          </Link>
          <Link className={classes.link} to="Offer">
            <p>Kursy językowe</p>
          </Link>
          <Link className={classes.link} to="Contact">
            <p>Kontakt</p>
          </Link>
        </nav>
      </header>
    </div>
  );
}
