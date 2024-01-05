import classes from "./Contact.module.css";

export function Contact() {
  return (
    <div>
      <div className={classes.contactContainer}>
        <div className={classes.contactHeader}>
          <p>Masz pytania?</p>
          <p>Z chęcią odpowiem</p>
        </div>
        <section className={classes.contactSection}>
          <p className={classes.contactBox}>
            Telefon: <br /> +48 693-739-517
          </p>
          <p className={classes.contactBox}>
            Email:
            <br /> k.krzykalski47@gmail.com
          </p>
          <p className={classes.contactBox}>
            Adres: <br />
            ul. Zachodnia 10/90 Kraków
          </p>
        </section>
      </div>
    </div>
  );
}
