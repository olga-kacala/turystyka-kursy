import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// export function Header() {
//   return (
//     <div>
//       <header className={classes.header}>
//         <div className={classes.topContact}>
//           <p>T: +48 693-739-517 | E: k.krzykalski47@gmail.com</p>
//         </div>
//         <nav className={classes.nav}>
//         <Link className={classes.logo} to="*" key="logo">
//             <p>KRZYKALSKI - KURSY</p>
//           </Link>
//           <Link className={classes.link} to="Offer" key="offer1">
//             <p>Kurs dla przewodników turystycznych</p>
//           </Link>
//           <Link className={classes.link} to="Offer" key="offer2">
//             <p>Kursy językowe</p>
//           </Link>
//           <Link className={classes.link} to="Contact" key="contact">
//             <p>Kontakt</p>
//           </Link>
//         </nav>
//       </header>
//     </div>
//   );
// }


// ... (your existing imports)




export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 380);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 380;
      setIsMobile(mobile);
      if (mobile) {
        setMenuOpen(false);
      }
      console.log("Is Mobile:", mobile); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("open", isMenuOpen)

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.topContact}>
          <p>T: +48 693-739-517 | E: k.krzykalski47@gmail.com</p>
        </div>
        {isMobile && (
          <div className={`${classes.nav} ${isMenuOpen ? classes.navActive : classes.navInactive}`}>
            <div className={classes.hamburger} onClick={handleMenuToggle}>
              &#9776;
            </div>
            {isMenuOpen && (
              <React.Fragment>
                <Link className={classes.link} to="Offer" key="offer1">
                  <p>Kurs dla przewodników turystycznych</p>
                </Link>
                <Link className={classes.link} to="Offer" key="offer2">
                  <p>Kursy językowe</p>
                </Link>
                <Link className={classes.link} to="Contact" key="contact">
                  <p>Kontakt</p>
                </Link>
              </React.Fragment>
            )}
          </div>
        )}
        {!isMobile && (
          <div className={classes.nav}>
            <Link className={classes.logo} to="*" key="logo">
              <p>KRZYKALSKI - KURSY</p>
            </Link>
            <Link className={classes.link} to="Offer" key="offer1">
              <p>Kurs dla przewodników turystycznych</p>
            </Link>
            <Link className={classes.link} to="Offer" key="offer2">
              <p>Kursy językowe</p>
            </Link>
            <Link className={classes.link} to="Contact" key="contact">
              <p>Kontakt</p>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}