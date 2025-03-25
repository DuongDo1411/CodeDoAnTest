import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="proyect-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="proyectos-slider mySwiper">
          <SwiperSlide className="caja">
            <img src={proyectImg(`./CR7.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Shoppee 7Cho</h3>
              <p>So 7 Nguoi Bo Up Bo Dong Bao</p>
              <p className="tecnologias">
                React
                <span> -</span> CSS
                <span> -</span> Redux
                <span> -</span> Bootstrap
                <span> -</span> TypeScript
                <span> -</span> Solidity
                <span> -</span> NodeJS
                <span> -</span> MongoDB
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./2ThgNgu.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>2 Goats</h3>
              <p>lawyers website</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> jQuery
                <span> -</span> Bootstrap
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                React
                <span> -</span> CSS
                <span> -</span> Redux
                <span> -</span> NodeJS
                <span> -</span> ExpressJS
                <span> -</span> Sequelize
                <span> -</span> PostgreSQL
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> Bootstrap
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> Bootstrap
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> Sass
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> Sass
                <span> -</span> JavaScript
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTest"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./anime.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Anime</h3>
              <p>Anime</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>

              <a
                href="https://github.com/DuongDo1411/CodeDoAnTestqa"
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
