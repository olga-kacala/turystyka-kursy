import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <p>&copy; 2023 Krzykalski-kursy. Wszelkie prawa zastrzeżone.</p>
      <div className={classes.logos}>
        <p>Autor:</p>
        <a href="https://www.linkedin.com/in/olga-kacala/" target="_blank">
          <img
            className={classes.Lin}
            title="My LinkedIn"
            alt="LinkedIn"
            src={"../../Img/LI-logo.png"}
          />
        </a>
      </div>
    </footer>
  );
}
