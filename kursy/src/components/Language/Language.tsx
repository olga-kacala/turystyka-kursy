import classes from "./Language.module.css";

export function Language() {
  return (
    <div className={classes.offerContainer}>
      <div className={classes.titleContainer}>
        <img
          className={classes.image}
          src={
            process.env.PUBLIC_URL +
            "/Img/annika-gordon-cZISY8ai2iA-unsplash.webp"
          }
          alt="People learning a new language"
        />
        <div className={classes.offerText}>
          Odkryj fascynujący świat języków obcych, zgłębiając tajniki
          rosyjskiego i niemieckiego w naszym kursie doskonalącym. Rozwijaj
          umiejętności językowe, zdobywaj pewność siebie w komunikacji
          międzykulturowej i otwórz nowe możliwości w karierze!
        </div>
      </div>

      <section className={classes.languageOffer}>
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
