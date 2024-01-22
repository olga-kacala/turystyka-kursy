import classes from "./Language.module.css";

export function Language() {
  return (
    <div className={classes.offerContainer}>
      <div className={classes.titleContainer}>
       
        <div className={classes.offerText}>
          
Odkryj fascynujący świat języków z naszymi różnorodnymi kursami, w tym intensywnymi kursami języka polskiego, angielskiego, niemieckiego i rosyjskiego. Specjalnie zaprojektowane kursy obejmują także doskonalenie umiejętności językowych dla przewodników po Krakowie. Zapewniamy małe grupy, wykwalifikowanych lektorów i przyjazną atmosferę. Zapisz się już dziś, aby rozwijać swoje umiejętności językowe i otworzyć nowe możliwości!
        </div>
      </div>

      <section className={classes.languageOffer}>
      <article className={classes.GER}>
          <div className={classes.marqueeText}>
          Polish for foreigners - preparing for the respective certificate of proficiency in the Polish language as a foreign language.
          </div>
        </article>


        <article className={classes.GER}>
          <div className={classes.marqueeText}>
            Unser Fortgeschrittenenkurs bietet eine einzigartige Gelegenheit,
            Ihre Deutschkenntnisse zu perfektionieren und in die Feinheiten der
            Sprache einzutauchen
          </div>
        </article>
        <article className={classes.RUS}>
          <div className={classes.marqueeText}>
            Наш продвинутый курс предоставляет уникальную возможность
            совершенствовать знания русского языка, погружаясь в его тонкости и
            нюансы
          </div>
        </article>
      </section>
    </div>
  );
}
