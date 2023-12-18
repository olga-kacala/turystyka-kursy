import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header () {

    return (
        <div>
      <header className={classes.header}>
        <Link className={classes.link} to="*">
          <h1>Kursy</h1>
        </Link>
        </header>
        </div>
    )
}