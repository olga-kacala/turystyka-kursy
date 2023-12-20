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
    <div className={classes.offerContainer}>
      <div
        id="carouselExample"
        className={classes.carousel}
        data-ride="carousel"
      >
        <div className={classes.carouselInner}>
          {[1, 2, 3, 4].map((index) => (
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
      <div className={classes.offerText}>
        <p>
          Zapraszam serdecznie do udziału w moim kursie dla przewodników
          turystycznych po Krakowie! To wyjątkowa okazja, aby poszerzyć swoją
          wiedzę i umiejętności w dziedzinie oprowadzania po jednym z
          najpiękniejszych miast w Europie.
        </p>
        <p>
          Podczas kursu będziesz miał/a okazję zgłębić historię Krakowa, odkryć
          ukryte perły tej malowniczej miejscowości oraz nauczyć się skutecznych
          technik oprowadzania grupą turystyczną. Wspólnie z ekspertami z branży
          turystycznej będziemy eksplorować nie tylko znane atrakcje, ale także
          tajemnicze zakątki, które z pewnością zaskoczą nawet doświadczonych
          przewodników.
        </p>

        <p>
          Przygotuj się na praktyczne zajęcia, inspirujące prezentacje i ciekawe
          warsztaty, które pozwolą Ci podnieść jakość swoich opowieści i zyskać
          nowe narzędzia do zachwycania turystów. Nie tylko pogłębisz swoją
          wiedzę historyczną, ale także otrzymasz praktyczne wskazówki dotyczące
          komunikacji z różnorodnymi grupami turystycznymi.
        </p>

        <p>
          Dołącz do nas, aby stać się jeszcze lepszym przewodnikiem turystycznym
          i zapewnić niezapomniane przeżycia każdemu odwiedzającemu Kraków.
          Zapisz się już teraz i otwórz drzwi do fascynującego świata opowieści
          o historii, kulturze i tradycji tego urokliwego miasta!
        </p>
      </div>
    </div>
  );
}
