import React, { useContext } from "react";
import EN from "../../img/US.png";
import VN from "../../img/VN.png";
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";

/* React router */
import { NavLink } from "react-router-dom";

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";

const Header = () => {
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
        <Link to="start" spy={true} offset={-150} href="#start">
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
        <Link to="about-me" spy={true} offset={-150} href="#about-me">
          <FormattedMessage id="about" defaultMessage="About me" />
        </Link>
        <Link to="servicios" spy={true} offset={-150} href="#servicios">
          <FormattedMessage id="services" defaultMessage="Services" />
        </Link>
        <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </Link>
        <Link to="contactos" spy={true} offset={-150} href="#contactos">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </Link>
        <div id="buttons">
          <img
            onClick={() => idioma.selectLanguage("en-US")}
            src={EN}
            alt="English"
          />
          <img
            onClick={() => idioma.selectLanguage("vi-VN")}
            src={VN}
            alt="VietNamese"
          />
        </div>
      </nav>
      <div></div>
    </header>
  );
};

export default React.memo(Header);
