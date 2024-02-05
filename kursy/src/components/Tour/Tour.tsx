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
            <strong>10 lutego 2024 r. i potrwa do 29 czerwca 2024 r.</strong> To
            unikalna okazja, aby zdobyć wiedzę teoretyczną, praktyczną i
            terenową, dzięki której staniecie się wykwalifikowanymi
            przewodnikami.
          </p>

          <h3>Termin i płatności:</h3>
          <ul>
            <li>kurs trwa 5 miesięcy</li>
            <li>czas trwania: 10.02.2024 - 29.06.2024</li>
            <li>płatny w 5 dogodnych ratach miesięcznych po 300 zł każda</li>
            <li>koszt całkowity kursu wynosi 1500 zł</li>
          </ul>

          <h3>Program kursu obejmuje:</h3>
          <ul>
            <li>160 godzin wykładów teoretycznych i zawodowych</li>
            <li>40 godziny szkoleń terenowych (trasy miejskie)</li>
            <li>
              22 godziny szkoleń muzealnych w 11 najważniejszych muzeach
              krakowskich z 5 egzaminami
            </li>
            <li>2 praktyki zawodowe (1 słuchana, 1 mówiona)</li>
          </ul>

          <h3>Wykładowcy i przedmioty:</h3>
          <ul>
            <li>
              <strong>
                dr hab. Zygmunt Kruczek, prof. AWF Kraków (Geografia turystyczna
                Polski)
              </strong>
              <ul>
                <li>Kierownik Zakładu Geografii Turystyki i Ekologii</li>
              </ul>
            </li>
            <li>
              <strong>
                mgr Zuzanna Krzykalska (Prawne podstawy przewodnictwa w Polsce)
              </strong>
              <ul>
                <li>absolwentka prawa Uniwersytetu Jagiellońskiego</li>
              </ul>
            </li>
            <li>
              <strong>
                mgr Maciej Zapiór (Historia Krakowa na tle historii Polski)
              </strong>
              <ul>
                <li>absolwent historii na Uniwersytecie Jagiellońskim</li>
                <li>nauczyciel historii w XX LO w Krakowie</li>
                <li>długoletni przewodnik po Krakowie</li>
              </ul>
            </li>
            <li>
              <strong>lek med. Miłosz Białoszewski (Reanimacja) </strong>
              <ul>
                <li>absolwent AM Kraków</li>
              </ul>
            </li>
            <li>
              <strong>dr Kazimierz Krzykalski</strong>
              <ul>
                <li>
                  neofilolog (mgr filologii polskiej UJ 1971, mgr filologii
                  rosyjskiej WSP Kraków 1991 i germanista: zaliczone 10
                  semestrów germanistyki zaocznej w latach 1981-1986 na
                  Uniwersytecie Wrocławskim bez magisterium)
                </li>
                <li>
                  mgr historii sztuki na Uniwersytecie Jagiellońskim (1978)
                </li>
                <li>dr filozofii na Uniwersytecie Jagiellońskim (2010)</li>
                <li>
                  poprowadzi na kursie wykłady teoretyczne m.in. z dziejów
                  kultury polskiej, sztuki Krakowa na tle sztuki polskiej,
                  Kraków w literaturze polskiej, Kraków współczesny, topografia
                  Krakowa i strefy podmiejskiej
                </li>
                <li>
                  poprowadzi na kursie wykłady metodyczno-zawodowe: metodykę
                  oprowadzania wycieczek miejskich, specyfika oprowadzania grup
                  dzieci i młodzieży szkoleniej po Krakowie, soby
                  niepełnosprawne jako turyści zwiedzający Kraków,
                </li>
                <li>
                  poprowadzi szkolenia terenowe (trasy miejskie) jako
                  doświadczony instruktor szkoleń terenowych po Krakowie z
                  50-letnim doswiadczeniem przewodnika
                </li>

                <li>
                  organizuje szkolenia muzealne powierzając je doświadczonym
                  pracownikom działów oświatowych muzeów krakowiskich,
                  najczęściej kierownikom tych działów
                </li>
              </ul>
            </li>
          </ul>

          <h3>Warunki uczestnictwa:</h3>
          <ul>
            <li>pełnoletność</li>
            <li>min. średnie wykształcenie (matura)</li>
            <li>niekaralność za przestępstwa pospolite</li>
            <li>
              dobry stan zdrowia (brak schorzeń narządów ruchu i wad wymowy, jak
              jąkanie się czy zacinanie)
            </li>
          </ul>

          <h3>Terminy zajęć (soboty):</h3>
          <ul>
            <li>luty 2024: 10, 17, 24</li>
            <li>marzec 2024: 2, 9, 16, 23, 30</li>
            <li>kwiecień 2024: 6, 13, 20, 27</li>
            <li>maj 2024: 11, 18, 25</li>
            <li>czerwiec 2024: 1, 8, 15, 22, 29</li>
          </ul>

          <h3>Godziny zajęć:</h3>
          <ul>
            <li>8:00 - 14:00 wykłady teoretyczne i zawodowe</li>
            <li>14:00 -16:30 przerwa obiadowa</li>
            <li>16:30 - 18:00 lub 19:00 szkolenia terenowe</li>
          </ul>

          <h3>Miejsce zajęć:</h3>

          <ul>
            <li>
              wykłady teoretyczne i zawodowe: w siedzibie firmy: Kraków, ul.
              Zachodnia 10/50
            </li>
            <li>
              szkolenia terenowe: w terenie w dzielnicach Kraków - Stare Miasto,
              Kazimierz lub Podgórze (dokładne miejsce spotkania, za każdym
              razem inne w zależności od zaplanowanej trasy terenowej będzie
              zawczasu podane do wiadomości uczestników kursu)
            </li>
            <li>
              szkolenia muzealne: na każdorazowo innych odpowiednich wystawach
              stałych najważniejszych muzeów krakowskich
            </li>
          </ul>

          <h3>Dodatkowe informacje:</h3>
          <ul>
            <li>
              szkolenia muzealne odbywać się będą w kilku dodatkowych dniach
              poza wymienionymi poprzednio 21 wykładowymi sobotami w dniach
              otwarcia muzeum w zależności od odpowiedniej ekspozycji muzealnej
              (a więc może się zdarzyć, że będzie to z konieczności nawet dzień
              roboczy) ale zawsze po każdorazowym ustaleniu odpowiedniego
              terminu z wszystkimi uczestnikami kursu i odpowiednim pracownikiem
              muzeum, przeprowadzającym dane szkolenie
            </li>
          </ul>

          <h3>Zapisy:</h3>
          <ul>
            <li>
              osobiście: w biurze firmy (pn.-pt. 10-18) Kraków, ul. Zachodnia
              10/50 przez dostarczenie wypełnionej
              <a
                href={process.env.PUBLIC_URL + "/Img/ankietaPrzewodnik.pdf"}
                download="ankietaPrzewodnik.pdf"
              >
                {" "}
                ankiety{" "}
              </a>
              wpisowej (formularz również dostępny w biurze) + kserokopia
              świadectwa dojrzałości + 2 fotografie
            </li>
            <li>
              e-mail: wypełnioną
              <a
                href={process.env.PUBLIC_URL + "/Img/ankietaPrzewodnik.pdf"}
                download="ankietaPrzewodnik.pdf"
              >
                {" "}
                ankietę{" "}
              </a>
              prześlij na k.krzykalski47@gmail.com. Pozostałe dokumenty można
              dostarczyć podczas kursu (kserokopia świadectwa dojrzałości + 2
              fotografie)
            </li>
          </ul>
          <div className={classes.bestOffer}>
            <h3 style={{ color: "white" }}>
              Czym nasz kurs przewodnicki różni się od analogicznych kursów
              konkurencji?
            </h3>
            <ol>
              <li>
                Przy maksymalnym dopuszczalnym skróceniu czasu trwania kursu z
                8-miu miesięcy jak zazwyczaj do 5-ciu miesięcy, jak w naszym
                przypadku i przy zagwarantowanej jeszcze możliwości
                zrealizowania wymaganego programu kursu, jeśli chodzi zarówno o
                wykłady, jak też ćwiczenia praktyczne (szkolenia terenowe i
                muzealne) uzyskano, możliwość bardzo{" "}
                <strong>
                  znacznej redukcji całkowitej opłaty za kurs wynoszącej obecnie
                  u nas 1500zł
                </strong>{" "}
                (przy przeciętnej analogicznej opłacie za podobny choć dłuższy
                kurs, u konkurencji wynoszącej od 2599 zł do 3300 zł) i w
                dodatku rozłożonej tylko u nas na 5 dogodnych rat miesięcznych
                po 300 zł każda płatnych przez cały okres trwania kursu
                (10.02.2024 - 29.06.2024). Po ukończeniu kursu, istnieje możliwość przystąpienia do egzaminu organizowanego przez Federację Stowarzyszeń Przewodnickich w Krakowie, który odbędzie się 1, 2 i 3 lipca 2024 roku w godzinach od 08:00 do 14:00. Egzamin składać się będzie z trzech komisji egzaminacyjnych, z których każda będzie oceniać jeden z następujących tematów: 1. Stare Miasto, 2. Wawel, 3. Kazimierz wraz z Podgórzem. Aby zdać egzamin, konieczne jest otrzymanie co najmniej oceny dostatecznej z każdego z wymienionych tematów przed każdą odrębną komisją. Warunkiem dopuszczenia do egzaminu jest dokonanie opłaty egzaminacyjnej w wysokości 300 zł na konto Federacji Stowarzyszeń w Krakowie.
              </li>
              <li>
                Rozszerzenie w jednym, ale bardzo istotnym ostatnio punkcie
                programu naszego kursu o{" "}
                <strong>
                  dodatkowy przedmiot: Mniejszości narodowe w dziejach i
                  kulturze Krakowa
                </strong>
                , a to w szczególności:
                <br />
                a/ Niemiecka mniejszość narodowa w Krakowie od średniowiecza i
                jej ożywione związki gospodarcze, handlowe i kulturalne z
                macierzystą Norymbergą w XV i początkach XVI w. (Wit Stwosz,
                Hans Durer - brat sławnego Albrechta, Hans Suess z Kulmbachu,
                Hans Behaim, Bonerowie, Decjusz Just): 2 godz. wykładu,
                <br />
                b/ Włoska mniejszość narodowa, tak ważna w kulturze i sztuce
                Krakowa, głównie w XVI i XVII w. (królowa Bona Sforza,
                Bartolomeo Berreci i jego włoski warsztat kamieniarski, Santi
                Gucci - nadworny rzeźbiarz i architekt królowej Bony, Tomasso
                Dolabella z Wenecji, jego warsztat malarski w Krakowie i jego
                wpływ na polskie malarstwo XVII w.): 2 godz. wykładu,
                <br />
                c/ a przede wszystkim jako odrębny dział bardzo rozbudowany
                temat: Żydzi krakowscy i ich wyjątkowa rola w życiu
                gospodarczym, handlu i kulturze Krakowa od czasów
                najdawniejszych do najnowszej historii Krakowa aż po zagładę
                Żydów krakowskich i cały ten skomplikowany zespół zagadnień,
                który jest znany ostatnio pod nazwą Holokaustu w sumie 20 godz
                wykładu, a to: 1. Judaizm, jego geneza i rozwój, główne kierunki
                i święta: 2 godz. wykładu, 2. Dzieje Żydów w Krakowie i na
                Kazimierzu na tle historii Żydów w Polsce: 14 godz. wykładu.
                3. Kultura i sztuka Żydów krakowskich wraz z wyjątkowym wpływem
                Żydów polskich i osób pochodzenia żydowskiego na kulturę i
                literaturę polską, zwłaszcza od XIX w.: Leopold Staff, Julian
                Tuwim, Bolesław Leśmian, Anatol Stern, Aleksander Wat, Janusz
                Korczak czy wcześniej w środowisku krakowskim Wilhelm Feldman -
                krytyk literacki i znawca literatury polskiej, czy też bardzo
                zasłużone dla literatury polskiej warszawskie rodziny żydowskich
                księgarzy i wydawców: Orgelbrandów czy późniejsza bardzo znana
                firma księgarsko-wydawnicza Gebettner i Wolff z bardzo licznymi
                filiami w wielu miastach polskich i działająca jeszcze po
                wojnie,czy wreszcie bardzo zasłużona dla kultury i nauki
                polskiej krakowska rodzina Estreicherów, a także zasłużony dla sztukii Krakowa wielki reformator teatru awangardowego Tadeusz Kantor: 4 godz. wykładu.
                <br/>
                Wszystko to wprowadziliśmy dodatkowo jako odrębny przedmiot
                wykładu, zachowując i rozszerzając jednocześnie, tak jak i na
                innych tego typu kursach u konkurencji wydatnie ilość i
                problematykę szkoleń terenowych na temat historii, kultury i
                zagłady krakowskich Żydów (Żydowskie zabytki Kazimierza, Getto z
                czasów II wojny w Podgórzu, Krakowskim szlakiem Listy
                Schindlera, Emalia Oskara Schindlera - fabryka - muzeum z czasów
                II wojny i okupacji, Obóz Pracy Przymusowej w
                Krakowie-Płaszowie), wszystko to uwzględniając ciągle rosnące
                 <strong> 
                   niezwykłe zainteresowanie problematyką żydowską, a szczególnie
                  zagadnieniem Holokaustu i ludobójstwa
                </strong>
                , bo to są tematy bardzo rozreklamowane i bardzo modne ostatnio,
                nie tylko na Zachodzie, tak że zdarza się i to często, że
                turyści pokonują olbrzymie odległości kilku czy nawet kilkunastu
                tysięcy kilometrów i przybywają do Krakowa z góry powziętym
                postanowieniem, że chcą zwiedzić tylko obóz koncentracyjny
                Auschwitz-Birkenau i przy okazji też żydowskie zabytki
                Kazimierza, Getto w Podgórzu, byłą fabrykę Oskara Schindlera,
                itp., a nie wykazują najmniejszego zainteresowania samym polskim
                Krakowem, jego burzliwą historią, bogatą kulturą i wysokiej
                klasy zabytkami.
              </li>
              <li>
                Idąc za ogólnym trendem ciągle rosnącego znaczenia zagranicznej
                turystyki przyjazdowej do Krakowa, a zwłaszcza turystów
                zagranicznych wyjątkowo zainteresowanych problematyką żydowską,
                szczególnie pod kątem Holokaustu i ludobójstwa wprowadziliśmy
                jako nieobowiązkowe ale szczególnie przez nas zalecane novum,
                już na poprzednich naszych kursach przewodnickich
                najpopularniejsze trasy miejskie, krakowskie ze szczególnym
                uwzględnieniem{" "}
                <strong>
                  specjalistycznych tras z problematyką żydowską i Holokaustu w
                  najważniejszych językach zachodnich (angielski, francuski,
                  hiszpański, niemiecki i włoski)
                </strong>
                , a mianowicie:
                <br />
                a/ Szlak Królewski w Krakowie,
                <br />
                b/ Żydowskie zabytki Kazimierza,
                <br />
                c/ Getto z czasów II wojny w krakowskim Podgórzu wraz z fabryką
                Oskara Schindlera
                <br />
                d/ Szlakiem "Listy Schindlera" w Krakowie.
                <br/>Z drugiej strony zapoznanie się naszych kursantów z
                najbardziej popularnymi trasami miejskimi krakowskimi w
                najbardziej znanych ma zachęcić naszych kursantow do dołożenia
                starań, aby oprowadzać też turystów zagranicznych po Krakowie bo
                warto, co prawda bardzo znacznie zmniejszyła się ogólnie liczba
                turystów też w Krakowie, a to głownie przez pandemię i ostatnio
                też przez wojnę na Ukrainie, przez co staliśmy się krajem
                przyfrontowym, ale zarówno jedno jak i drugie, nie będzie trwać
                wiecznie i należy się spodziewać, że w końcu ożywi się też ruch
                turystyczny także w Krakowie.
              </li>
            </ol>
          </div>

          <p className={classes.bottomPara}>
            Jeśli jesteś zainteresowany szczegółami kursu, serdecznie
            zapraszamy do naszego biura w godzinach otwarcia, aby otrzymać
            bezpłatnie teczkę informacyjną uczestnika kursu zawierającą:
            szczegółowy wykaz wykładów teoretycznych i zawodowych, z podaniem
            nazwiska wykładowcy oraz ilości przewidzianych godzin wykładu;
            dokładny wykaz 20 szkoleń terenowych (trasy miejskie po Starym
            Mieście, Kazimierzu i Podgórzu), wykaz 11 szkoleń muzealnych z
            informacją o wystawach stałych i miejscach, w których odbędą się
            szkolenia i gdzie dodatkowo przewidziane są egzaminy i regulamin
            kursu. Zapisz się już teraz i rozpocznij swoją przygodę z
            przewodnictwem po Krakowie!
          </p>
        </div>
      </div>
    </div>
  );
}
