import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 380);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 750;
      setIsMobile(mobile);
      if (mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.topContact}>
          <p>
            <img
              className={classes.icons}
              title="telephone"
              alt="telephone"
              src={process.env.PUBLIC_URL + "/Img/tel.png"}
            />{" "}
            +48 693 739 517{" "}
            <img
              className={classes.icons}
              title="mail"
              alt="mail"
              src={process.env.PUBLIC_URL + "/Img/mail.png"}
            />{" "}
            k.krzykalski47@gmail.com
            <a
              href="https://www.facebook.com/profile.php?id=61555837297160&locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.icons}
                title="Facebook"
                alt="Facebook"
                src={process.env.PUBLIC_URL + "/Img/fb.png"}
              />
            </a>
          </p>
        </div>

        {isMobile && (
          <div
            className={`${classes.nav} ${
              isMenuOpen ? classes.navActive : classes.navInactive
            }`}
          >
            <div className={classes.logoContainer}>
              <Link className={classes.logo} to="*" key="logo">
                <div onClick={closeMenu}>KRZYKALSKI - KURSY</div>
              </Link>
            </div>
            <div className={classes.hamburger} onClick={handleMenuToggle}>
              &#9776;
            </div>
            {isMenuOpen && (
              <React.Fragment>
                <Link
                  className={classes.link}
                  to="/Tour"
                  key="offer1"
                  onClick={closeMenu}
                >
                  <p>Kurs dla przewodników turystycznych</p>
                </Link>
                <Link
                  className={classes.link}
                  to="/Language"
                  key="offer2"
                  onClick={closeMenu}
                >
                  <p>Kursy językowe</p>
                </Link>
                <Link
                  className={classes.link}
                  to="/Contact"
                  key="contact"
                  onClick={closeMenu}
                >
                  <p>Kontakt</p>
                </Link>
              </React.Fragment>
            )}
          </div>
        )}
        {!isMobile && (
          <div className={classes.nav}>
            <Link className={classes.logo} to="*" key="logo">
              <div onClick={closeMenu}>KRZYKALSKI - KURSY</div>
            </Link>
            <Link className={classes.link} to="/Tour" key="offer1">
              <p>Kurs dla przewodników turystycznych</p>
            </Link>
            <Link className={classes.link} to="/Language" key="offer2">
              <p>Kursy językowe</p>
            </Link>
            <Link className={classes.link} to="/Contact" key="contact">
              <p>Kontakt</p>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
