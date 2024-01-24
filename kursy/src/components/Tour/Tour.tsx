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
        <div className={classes.offerHeader}>
          <article>
            <em>"Kazimierz Krzykalski Wycieczki Lokalne i Kursy</em> jest
            rezultatem ponad 50 lat doświadczenia w prowadzeniu fascynujących
            wycieczek po Krakowie.
          </article>
          <article>
            Jesteśmy gotowi poprowadzić Cię przez zakamarki Krakowa, odkrywając
            jego historię i tajemnice. Dołącz do nas, aby przeżyć niezapomniane
            chwile podczas naszych autorskich wycieczek lokalnych i kursów.
            Odkryj Kraków z pasją i doświadczeniem!"
          </article>
        </div>

        <div className={classes.offerDescription}>
          <h2>Kurs Przewodnika po Krakowie (5. edycja)</h2>

          <p>
            Serdecznie zapraszamy do udziału w naszym jednosemestralnym kursie
            przewodnika po Krakowie, który rozpocznie się{" "}
            <strong>3 lutego 2024 r. i potrwa do 29 czerwca 2024 r.</strong> To
            unikalna okazja, aby zdobyć wiedzę teoretyczną, praktyczną i
            terenową, dzięki której staniecie się wykwalifikowanymi
            przewodnikami.
          </p>

          <h3>Termin i Płatności:</h3>
          <ul>
            <li>Kurs trwa 5 miesięcy.</li>
            <li>Czas trwania: 03.02.2024 - 29.06.2024.</li>
            <li>Płatny w 5 dogodnych ratach miesięcznych po 300 zł każda.</li>
            <li>Koszt całkowity kursu wynosi 1500 zł.</li>
          </ul>

          <h3>Program Kursu Obejmuje:</h3>
          <ul>
            <li>168 godzin wykładów teoretycznych i zawodowych.</li>
            <li>42 godziny szkoleń terenowych (trasy miejskie).</li>
            <li>
              22 godziny szkoleń muzealnych w 11 najważniejszych muzeach
              krakowskich z 5 egzaminami.
            </li>
            <li>2 praktyki zawodowe (1 słuchana, 1 mówiona).</li>
          </ul>

          <h3>Wykładowcy i przedmioty:</h3>
          <ul>
            <li>
              <strong>
                Dr hab. Zygmunt Kruczek (Geografia Turystyczna Polski)
              </strong>
              <ul>
                <li>Kierownik Zakładu Geografii Turystyki i Ekologii.</li>
                <li>Profesor na AWF Kraków.</li>
                <li>Absolwent geografii na Uniwersytecie Jagiellońskim.</li>
              </ul>
            </li>
            <li>
              <strong>
                Mgr Zuzanna Krzykalska (Prawne Podstawy Przewodnictwa w Polsce)
              </strong>
              <ul>
                <li>Absolwentka prawa na Uniwersytetu Jagiellońskiego.</li>
              </ul>
            </li>
            <li>
              <strong>
                Mgr Maciej Zapiór (Historia Krakowa na Tle Historii Polski)
              </strong>
              <ul>
                <li>Absolwent historii na Uniwersytecie Jagiellońskim.</li>
                <li>Nauczyciel historii w XX LO w Krakowie.</li>
                <li>Długoletni przewodnik po Krakowie.</li>
              </ul>
            </li>
            <li>
              <strong>Lek med. Miłosz Białoszewski (Reanimacja) </strong>
              <ul>
                <li>Absolwent medycyny na Uniwersytecie Jagiellońskim.</li>
              </ul>
            </li>
            <li>
              <strong>Dr Kazimierz Krzykalski</strong>
              <ul>
                <li>
                  Neofilolog (mgr filologii polskiej UJ 1971, mgr filologii
                  rosyjskiej WSP Kraków 1991).
                </li>
                <li>
                  Germanista (zaliczone 10 semestrów germanistyki zaocznej na
                  Uniwersytecie Wrocławskim 1981-1986 bez magisterium).
                </li>
                <li>
                  Mgr historii sztuki na Uniwersytecie Jagiellońskim (1978).
                </li>
                <li>Dr filozofii na Uniwersytecie Jagiellońskim (2010).</li>
                <li>
                  Propowadzi na kursie wykłady teoretyczne m.in. z dziejów
                  kultury polskiej, sztuki Krakowa na tle sztuki polskiej,
                  Kraków w literaturze polskiej, Kraków współczesny, topografia
                  Krakowa i strefy podmiejskiej.
                </li>
                <li>
                  Poprowadzi na kursie wykłady metodyczno-zadowodwe: metodykę
                  oprowadzania wycieczek miejskich, specyfika oprowadzania grup
                  dzieci i młodzieży szkoleniej po Krakowie, osoby
                  niepełnosprawne jako zwiedzające Kraków.
                </li>
                <li>
                  Poprowadzi szkolenia terenowe (trasy miejskie) jako
                  doświadczony instruktor szkoleń terenowych po Krakowie z
                  50-letnim doswiadczeniem przewodnika.
                </li>

                <li>
                  Organizuje szkolenia muzealne powierzając je doświadczonym
                  pracownikom działów oświatowych muzeów krakowiskich,
                  najczęściej kierownikom tych działów.
                </li>
              </ul>
            </li>
          </ul>

          <h3>Warunki Uczestnictwa:</h3>
          <ul>
            <li>Pełnoletność.</li>
            <li>Min. średnie wykształcenie (matura).</li>
            <li>Niekaralność za przestępstwa pospolite.</li>
            <li>Dobry stan zdrowia.</li>
          </ul>

          <h3>Terminy Zajęć (Soboty):</h3>
          <ul>
            <li>Luty 2024: 3, 10, 17, 24.</li>
            <li>Marzec 2024: 2, 9, 16, 23, 30.</li>
            <li>Kwiecień 2024: 6, 13, 20, 27.</li>
            <li>Maj 2024: 11, 18, 25.</li>
            <li>Czerwiec 2024: 1, 8, 15, 22, 29.</li>
          </ul>

          <h3>Godziny zajęć:</h3>
          <ul>
            <li>8:00 - 14:00 wykłady teoretyczne i zawodowe.</li>
            <li>14:00 -16:30 przerwa obiadowa.</li>
            <li>16:30 - 18:00 lub 19:00 szkolenia terenowe.</li>
          </ul>

          <h3>Miejsce Zajęć:</h3>

          <ul>
            <li>
              Wykłady teoretyczne i zawodowe: Kraków, ul. Zachodnia 10/50.
            </li>
            <li>
              Szkolenia terenowe: Kraków - Stare miasto, Kazimierz i Podgórze
              (trasy miejskie).
            </li>
            <li>
              Szkolenia muzealne: najważniejsze ekspozycje wybranych muzeów
              krakowskich.
            </li>
          </ul>

          <h3>Dodatkowe Informacje:</h3>
          <ul>
            <li>
              Organizator zastrzega sobie prawo do kilku dodatkowych terminów na
              szkolenia muzealne w czasie otwarcia muzeum (może wypaść w dzień
              powszedni) po uprzednim ustaleniu z wszystkimi uczestniami kursu.
            </li>
          </ul>

          <h3>Zapisy:</h3>
          <ul>
            <li>
              Osobiście: w biurze firmy (pn.-pt. 10-18) Kraków, ul. Zachodnia
              10/50 przez dostarczenie wypełnionej
              <a
                href={process.env.PUBLIC_URL + "/Img/ankietaPrzewodnik.pdf"}
                download="ankietaPrzewodnik.pdf"
              >
                {" "}
                ankiety{" "}
              </a>
              wpisowej (formularz również dostępny w biurze) + kserokopia
              świadectwa dojrzałości + 2 fotografie.
            </li>
            <li>
              Email: wypełnioną
              <a
                href={process.env.PUBLIC_URL + "/Img/ankietaPrzewodnik.pdf"}
                download="ankietaPrzewodnik.pdf"
              >
                {" "}
                ankietę{" "}
              </a>
              prześlij na k.krzykalski47@gmail.com. Pozostałe dokumenty można
              dostarczyć podczas kursu (kserokopia świadectwa dojrzałości + 2
              fotografie).
            </li>
          </ul>
          <p>
            Jeśli jesteś bardziej zainteresowany szczegółami kursu, serdecznie
            zapraszamy do naszego biura w godzinach otwarcia, aby otrzymać
            bezpłatnie teczkę informacyjną uczestnika kursu zawierającą:
            szczegółowy wykaz wykładów teoretycznych i zawodowych, z podaniem
            nazwiska wykładowcy oraz ilości przewidzianych godzin wykładu;
            dokładny wykaz 21 szkoleń terenowych (trasy miejskie po Starym
            Mieście, Kazimierzu i Podgórzu); wykaz 11 szkoleń muzealnych z
            informacją o wystawach stałych i miejscach, w których odbędą się
            szkolenia i gdzie dodatkowo przewidziane są egzaminy; regulamin
            kursu. Zapisz się już teraz i rozpocznij swoją przygodę z
            przewodnictwem po Krakowie!
          </p>
        </div>
      </div>
    </div>
  );
}
