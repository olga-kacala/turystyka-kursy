import classes from "./Home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={classes.picContainer}>
      <img
        src={
          process.env.PUBLIC_URL +
          "/Img/lucas-albuquerque-i-p1zqFros8-unsplash.webp"
        }
        alt="Cracow main square"
      />
      <div className={classes.overlayContainer}>
        <div className={classes.overlay}>
          <Link className={classes.link} to="Tour">
            <p className={classes.textOverlay}>
              Dowiedz się wszystkiego o Krakowie i badź najlepszym przewodnikiem
              po mieście
            </p>
          </Link>
        </div>
        <div className={classes.overlay}>
          <Link className={classes.link} to="Language">
            <p className={classes.textOverlay}>
              Zapisz się na kurs doskonalący język
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
