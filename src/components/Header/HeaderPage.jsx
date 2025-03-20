import React, { useContext } from "react";
import EN from "../../img/US.png";
import VN from "../../img/VN.png";
import "./Header.css";

/* React router */
import { NavLink } from "react-router-dom";

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";

const HeaderPage = () => {
  // Buttom language
  const idioma = useContext(langContext);
  // Menu desplegable
  const menuDesplegable = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activar");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activar");
      } else document.querySelector(".site-header").classList.remove("activar");

      navbar.classList.remove("activar");
    };
  };

  document.body.classList.add("dark");

  return (
    <header className="site-header">
      <div
        id="menu-btn"
        className="fas fa-bars"
        onClick={menuDesplegable}></div>

      <NavLink className="logo" to="/">
        <p>
          <span>Do An Nhom 7</span>
        </p>
      </NavLink>

      <nav className="navbar">
        <NavLink to="/" offset={-150} duration={500}>
          <FormattedMessage id="home" defaultMessage="Home" />
        </NavLink>
        <NavLink to="/about" offset={-150} duration={500}>
          <FormattedMessage id="about" defaultMessage="About me" />
        </NavLink>
        <NavLink to="/service" offset={-150} duration={500}>
          <FormattedMessage id="services" defaultMessage="Services" />
        </NavLink>
        <NavLink to="/project" offset={-150} duration={500}>
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </NavLink>
        <div id="buttons">
          <img
            onClick={() => idioma.selectLanguage("en-US")}
            src={EN}
            alt="Enlish"
          />
          <img
            onClick={() => idioma.selectLanguage("vi-VN")}
            src={VN}
            alt="Vietnamese"
          />
        </div>
      </nav>
      <div></div>
    </header>
  );
};

export default React.memo(HeaderPage);
