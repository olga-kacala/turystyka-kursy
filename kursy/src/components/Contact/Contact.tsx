import classes from "./Contact.module.css";

export function Contact() {
  return (
    <div>
      <div className={classes.contactContainer}>
        <div className={classes.contactHeader}>
          <p>Masz pytania?</p>
          <p>Z chęcią odpowiem</p>
        </div>
        <address className={classes.contactSection}>
          <p className={classes.contactBox}>
            Telefon: <br /> (+48) 693 739 517 <br /> 12 307 38 82
          </p>
          <p className={classes.contactBox}>
            Email:
            <br /> k.krzykalski47@gmail.com
          </p>
          <p className={classes.contactBox}>
            Adres: <br />
            ul. Zachodnia 10/50
            <br />
            30-350 Kraków
          </p>
        </address>
        <div className={classes.companyName}>
          <p> Kazimierz Krzykalski Wycieczki Lokalne i Kursy</p>
          <p>NIP: 9441590188</p>
        </div>

        <div className={classes.mapsComponent}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.2803977088665!2d19.904233177317654!3d50.024841517916286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165d8ed9bb0f57%3A0xb74abcf315a17048!2sKazimierz%20Krzykalski%20Wycieczki%20i%20Kursy!5e0!3m2!1spl!2spl!4v1707838625887!5m2!1spl!2spl"
            width="500px"
            height="450px"
            style={{ border: "0", marginBottom: "10vh", padding: "2vh" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <img
            className={classes.qrCode}
            title="Scan me"
            alt="QR code"
            src={process.env.PUBLIC_URL + "/Img/qr.png"}
          />
        </div>
      </div>
    </div>
  );
}
