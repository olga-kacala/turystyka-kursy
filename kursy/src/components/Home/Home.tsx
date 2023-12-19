import classes from "./Home.module.css";

export function Home () {

    return (
        <div className={classes.picContainer}>
     
          <img src={"../../Img/lucas-albuquerque-i-p1zqFros8-unsplash.jpg"} alt="Cracow main square"/>
          <div className={classes.overlay}>
            <p className={classes.textOverlay}>Dowiedz się wszystkiego o Krakowie i badź najlepszym przewodnikiem po mieście</p>
          </div>
          <div className={classes.overlay}>
            <p className={classes.textOverlay}>Dowiedz się wszystkiego o Krakowie i badź najlepszym przewodnikiem po mieście</p>
          </div>
        </div>
    )
}