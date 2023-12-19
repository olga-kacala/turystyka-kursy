import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <p>All rights reserved.</p>
      <div className={classes.logos}>
        <p>Created by:</p>
        <a href="https://www.linkedin.com/in/olga-kacala/" target="_blank">
          <img className={classes.Lin}
            title="My LinkedIn"
            alt="LinkedIn"
            src={"../../Img/LI-logo.png"}
          />
        </a>
      </div>
    </footer>
  );
}