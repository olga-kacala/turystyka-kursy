import { useEffect, useState } from "react";
import classes from "./Offer.module.css";

export function Offer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4); 
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="carouselExample" className={classes.carousel} data-ride="carousel">
      <div className={classes.carouselInner}>
        {[1, 2, 3,4].map((index) => (
          <div
            key={index}
            className={`${classes["carousel-item"]} ${
              index - 1 === activeIndex ? classes.active : ""
            }`}
          >
            <img
              className="d-block w-100"
              src={`../../Img/image${index}.jpg`}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
