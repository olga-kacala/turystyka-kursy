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
        <div className={classes.offerHeader}><article>
          <em>Kazimierz Krzykalski Wycieczki Lokalne i Kursy</em> jest rezultatem ponad
          pięćdziesięcioletniego doświadczenia w prowadzeniu fascynujących
          wycieczek po Krakowie.
        </article>
        <article>
          Jesteśmy gotowi poprowadzić Cię przez zakamarki Krakowa, odkrywając
          jego historię i tajemnice. Dołącz do nas, aby przeżyć niezapomniane
          chwile podczas naszych autorskich wycieczek lokalnych i kursów. Odkryj
          Kraków z pasją i doświadczeniem!
        </article>
</div>
        
        <div className={classes.offerDescription}>
          <h2>Kurs Przewodnika po Krakowie (5. edycja)</h2>

          <p>
            Serdecznie zapraszamy do udziału w naszym jednosemestralnym kursie
            przewodnika po Krakowie, który rozpocznie się 3 lutego 2024 r. i
            potrwa do 29 czerwca 2024 r. To unikalna okazja, aby zdobyć wiedzę
            teoretyczną, praktyczną i terenową, dzięki której staniecie się
            wykwalifikowanymi przewodnikami.
          </p>

          <h2>Termin i Płatności:</h2>
          <ul>
            <li>Kurs trwa 5 miesięcy.</li>
            <li>Czas trwania: 03.02.2024 - 29.06.2024.</li>
            <li>Płatny w 5 dogodnych ratach miesięcznych po 300 zł każda.</li>
            <li>Koszt całkowity kursu wynosi 1500 zł.</li>
          </ul>

          <h2>Program Kursu Obejmuje:</h2>
          <ul>
            <li>168 godzin wykładów teoretycznych i zawodowych.</li>
            <li>42 godziny szkoleń terenowych (trasy miejskie).</li>
            <li>
              22 godziny szkoleń muzealnych w 11 najważniejszych muzeach
              krakowskich z 5 egzaminami.
            </li>
            <li>2 praktyki zawodowe (1 słuchana, 1 mówiona).</li>
          </ul>

          <h2>Wykładowcy:</h2>
<ul>
    <li>
        <strong>Dr hab. Zygmunt Kruczek, prof. AWF Kraków</strong>
        <ul>
            <li>Kierownik Zakładu Geografii Turystyki i Ekologii (geografia turystyczna Polski).</li>
            <li>Pracownik naukowo-dydaktyczny na AWF Kraków.</li>
            <li>Absolwent odpowiedniego kierunku na Uniwersytecie Jagiellońskim.</li>
            <li>Posiada wieloletnią praktykę jako przewodnik miejski po Krakowie.</li>
        </ul>
    </li>
    <li>
        <strong>Mgr Zuzanna Krzykalska</strong>
        <ul>
            <li>Absolwentka Uniwersytetu Jagiellońskiego (prawo).</li>
            <li>Zawód przewodnika turystycznego zgodnie z obowiązującym prawodawstwem.</li>
            <li>Posiada podstawowe prawa i obowiązki przewodnika.</li>
            <li>Doświadczona przewodniczka z wieloletnim stażem.</li>
        </ul>
    </li>
    <li>
        <strong>Mgr Maciej Zapiór</strong>
        <ul>
            <li>Absolwent historii na Uniwersytecie Jagiellońskim.</li>
            <li>Nauczyciel historii w XX LO w Krakowie.</li>
            <li>Długoletni przewodnik po Krakowie, specjalizujący się w historii Krakowa na tle historii Polski.</li>
        </ul>
    </li>
    <li>
        <strong>Dr Kazimierz Krzykalski</strong>
        <ul>
            <li>Neofilolog (mgr filologii polskiej UJ 1971, mgr filologii rosyjskiej WSP Kraków 1991).</li>
            <li>Germanista (zaliczone 10 semestrów germanistyki zaocznej na Uniwersytecie Wrocławskim 1981-1986 bez magisterium).</li>
            <li>Mgr historii sztuki na Uniwersytecie Jagiellońskim (1978).</li>
            <li>Dr filozofii na Uniwersytecie Jagiellońskim (2010).</li>
            <li>Prowadzi wykłady teoretyczne m.in. z dziejów kultury polskiej, sztuki Krakowa, literatury polskiej, Krakowa współczesnego, topografii Krakowa i strefy podmiejskiej.</li>
            <li>Specjalista w zakresie wykładów metodyczno-zawodowych, metodyki oprowadzania wycieczek miejskich, specyfiki wycieczek szkolnych, wycieczek osób niepełnosprawnych, szkoleń terenowych (trasy miejskie) jako instruktor szkoleń terenowych.</li>
            <li>Prowadzi szkolenia muzealne, a także współpracuje z pracownikami działów oświatowych muzeów, często z ich kierownikami.</li>
        </ul>
    </li>
</ul>


          <h2>Warunki Uczestnictwa:</h2>
          <ul>
            <li>Pełnoletność.</li>
            <li>Min. średnie wykształcenie (matura).</li>
            <li>Niekaralność za przestępstwa pospolite.</li>
            <li>Dobry stan zdrowia.</li>
          </ul>

          <h2>Terminy Zajęć (Soboty):</h2>
          <ul>
            <li>Luty: 3, 10, 17, 24.</li>
            <li>Marzec: 2, 9, 16, 23, 30.</li>
            <li>Kwiecień: 6, 13, 20, 27.</li>
            <li>Maj: 11, 18, 25.</li>
            <li>Czerwiec: 1, 8, 15, 22, 29.</li>
          </ul>

          <h2>Miejsce Zajęć:</h2>

          <ul><li>Kraków, ul. Zachodnia 10/50</li></ul>
          
          <h2>Dodatkowe Informacje:</h2>
          <ul>
            <li>
              Organizator zastrzega sobie prawo do dodatkowych terminów na
              szkolenia muzealne.
            </li>
            <li>Zajęcia odbywają się w godzinach 8:00 - 19:00.</li>
          </ul>

          <h2>Zapisy:</h2>
          <ul>
    <li>Osobiście: w biurze firmy (pn.-pt. 10-18) Kraków, ul. Zachodnia 10/50. Dostarczenie wypełnionej <a href={
          process.env.PUBLIC_URL +
          "/Img/ankietaPrzewodnik.pdf"
        } download="ankietaPrzewodnik.pdf">ankiety</a> wpisowej + kserokopia świadectwa dojrzałości + 2 fotografie  </li>
    <li>Email: wypełnioną <a href={
          process.env.PUBLIC_URL +
          "/Img/ankietaPrzewodnik.pdf"
        } download="ankietaPrzewodnik.pdf">ankietę</a> prześlij na k.krzykalski47@gmail.com. Pozostałe dokumenty można dostarczyć podczas kursu (kserokopia świadectwa dojrzałości + 2 fotografie)</li>
</ul>
          <p>Jeśli jesteś bliżej zainteresowany szczegółami kursu, serdecznie
            zapraszamy do naszego biura w godzinach otwarcia, aby otrzymać pełną
            dokumentację kursu. Zapisz się już teraz i rozpocznij swoją przygodę
            z przewodnictwem po Krakowie!</p>
        </div>
      </div>
    </div>
  );
}
