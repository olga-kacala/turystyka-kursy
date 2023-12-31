import { useEffect, useState } from "react";
import classes from "./Tour.module.css";

export function Tour() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes.offerContainer}>
      <div className={classes.carousel} data-ride="carousel">
        <div className={classes.carouselInner}>
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`${classes["carousel-item"]} ${
                index - 1 === activeIndex ? classes.active : ""
              }`}
            >
              <img
                className="dBlockw100"
                src={`${process.env.PUBLIC_URL}/Img/image${index}.webp`}
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.offerText}>
        <article>
          Zapraszam serdecznie do udziału w moim kursie dla przewodników
          turystycznych po Krakowie! To wyjątkowa okazja, aby poszerzyć swoją
          wiedzę i umiejętności w dziedzinie oprowadzania po jednym z
          najpiękniejszych miast w Europie.
        </article>
        <article>
          Podczas kursu będziesz miał/a okazję zgłębić historię Krakowa, odkryć
          ukryte perły tej malowniczej miejscowości oraz nauczyć się skutecznych
          technik oprowadzania grupą turystyczną. Wspólnie będziemy eksplorować
          nie tylko znane atrakcje, ale także tajemnicze zakątki, które z
          pewnością zaskoczą nawet doświadczonych przewodników.
        </article>

        <article>
          Przygotuj się na praktyczne zajęcia, inspirujące prezentacje i ciekawe
          warsztaty, które pozwolą Ci podnieść jakość swoich opowieści i zyskać
          nowe narzędzia do zachwycania turystów. Nie tylko pogłębisz swoją
          wiedzę historyczną, ale także otrzymasz praktyczne wskazówki dotyczące
          komunikacji z różnorodnymi grupami turystycznymi.
        </article>

        <article>
          Dołącz do nas, aby stać się jeszcze lepszym przewodnikiem turystycznym
          i zapewnić niezapomniane przeżycia każdemu odwiedzającemu Kraków.
          Zapisz się już teraz i otwórz drzwi do fascynującego świata opowieści
          o historii, kulturze i tradycji tego urokliwego miasta!
        </article>
      </div>
    </div>
  );
}
