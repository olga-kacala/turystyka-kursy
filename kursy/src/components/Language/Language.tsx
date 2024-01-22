import classes from "./Language.module.css";
import { useRef } from "react";

export function Language() {
  const bottomOfferRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottomOffer = () => {
    if (bottomOfferRef.current) {
      bottomOfferRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.offerContainer}>
      <div className={classes.titleContainer}>
        <div className={classes.offerText}>
          Odkryj fascynujący świat języków z naszymi różnorodnymi kursami, w tym
          intensywnymi kursami języka polskiego, angielskiego, niemieckiego i
          rosyjskiego. Specjalnie zaprojektowane kursy obejmują także
          doskonalenie umiejętności językowych dla przewodników po Krakowie.
        </div>
      </div>

      <section className={classes.languageOffer}>
        <article className={classes.LANG}
        onClick={scrollToBottomOffer}>
          <div className={classes.marqueeText}>
            POLISH FOR FOREINERS - preparing for the respective certificate of
            proficiency in the Polish language as a foreign language.
          </div>
        </article>
        <article className={classes.LANG}
        onClick={scrollToBottomOffer}>
          <div className={classes.marqueeText}>
            JĘZYK ANGIELSKI - Przeżyj przygodę z językiem angielskim na różnych
            poziomach naszych kursów!
          </div>
        </article>
        <article className={classes.LANG}
        onClick={scrollToBottomOffer}>
          <div className={classes.marqueeText}>
            JĘZYK NIEMIECKI - Wzmożony kurs języka niemieckiego, doskonały
            zwłaszcza dla tych, którzy planują podjąć pracę w Niemczech lub
            przygotowują się do matury!
          </div>
        </article>
        <article className={classes.LANG}
        onClick={scrollToBottomOffer}>
          <div className={classes.marqueeText}>
            JĘZYK ROSYJSKI - Wzmożony kurs języka rosyjskiego, doskonały
            zwłaszcza dla tych, którzy potrzebują go w relacjach biznesowych lub
            przygotowują się do matury!
          </div>
        </article>
        <article className={classes.LANG}
        onClick={scrollToBottomOffer}>
          <div className={classes.marqueeText}>
            KURS DOSKONALENIA JĘZYKOWEGO - dla przewodników po Krakowie,
            przygotowujących się do oprowadzania turystów zagranicznych w języku
            angielskim, czeskim, francuskim, hiszpańskim, niemieckim, rosyjskim
            i włoskim!
          </div>
        </article>
        <div className={classes.titleContainer}>
        <div className={classes.bottomOffer} ref={bottomOfferRef}>
        Oferujemy naukę w niewielkich grupach (2-6 osób) prowadzoną przez
        doświadczonych lektorów-neofilologów z wieloletnim doświadczeniem
        pedagogicznym. Stosujemy skuteczne metody nauczania, a atmosfera
        panująca na zajęciach jest przyjazna i sprzyjająca nauce. 
        <br/>Wypełnij
        <a
          href={process.env.PUBLIC_URL + "/Img/ankietaJezyki.pdf"}
          download="ankietaKursJezykowy.pdf"
        >
          ankietę,
        </a>
         a przygotujemy dla Ciebie spersonalizowaną ofertę dostosowaną do
        Twoich indywidualnych potrzeb.
      </div>
      </div>


       


      </section>
      
    </div>
  );
}
