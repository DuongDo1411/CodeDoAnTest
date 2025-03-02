import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    {/* <ParticleHeaderBg /> */}

    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage id="name" defaultMessage="I am Vu Le Thai Duong" />
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage id="rol" defaultMessage="Full-stack developer" />
        </p>

        <div className="redes-sociales">
          <a
            href="https://github.com/Nahuel61920/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/nahuelcarrizolc/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100026028642349&locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600">
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://youtube.com/@oduong376?si=7rgcnofZAryJ-GH0"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="wrapper">
          <a
            className="button"
            href="https://github.com/DuongDo1411"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400">
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Do An nhom 7</span>
          </a>
          <a
            className="button"
            href="https://www.instagram.com/akainuuzzz/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600">
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
          <a
            className="button"
            href="https://www.facebook.com/profile.php?id=100026028642349&locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400">
            <div className="icon">
              <i className="fab fa-facebook"></i>
            </div>
            <span>Facebook</span>
          </a>
          <a
            className="button"
            href="https://youtube.com/@oduong376?si=7rgcnofZAryJ-GH0"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400">
            <div className="icon">
              <i className="fab fa-youtube"></i>
            </div>
            <span>Youtube</span>
          </a>
        </div>

        {/* <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link> */}
      </div>
    </section>
  </div>
);

export default Content;
