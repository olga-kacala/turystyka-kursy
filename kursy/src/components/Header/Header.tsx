import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header () {

    return (
        <div>
      <header className={classes.header}>
        <div className={classes.topContact}></div>
        <nav>
        <p>Krzykalski-kursy</p>
        <Link className={classes.link} to="*">
          <p>Kursy</p>
        </Link>
        <Link className={classes.link} to="*">
          <p>Kontakt</p>
        </Link>
        </nav>
        </header>
        </div>
    )
}