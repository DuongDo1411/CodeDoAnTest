import React from "react";
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="Services" />
    </h2>
    <div className="row">
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-drafting-compass"></i>
        <h3>
          <FormattedMessage
            id="design"
            defaultMessage="ADesign UX/UIboult me"
          />
        </h3>
        <p>
          <FormattedMessage
            id="design-info"
            defaultMessage="Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-laptop"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="Web development" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="400">
        <i className="fas fa-chart-line"></i>
        <h3>
          <FormattedMessage id="marketing" defaultMessage="Digital marketing" />
        </h3>
        <p>
          <FormattedMessage
            id="marketing-info"
            defaultMessage="Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="500">
        <i className="fas fa-wrench"></i>
        <h3>
          <FormattedMessage id="maintenance" defaultMessage="Web maintenance" />
        </h3>
        <p>
          <FormattedMessage
            id="maintenance-info"
            defaultMessage="Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="600">
        <i className="fas fa-search"></i>
        <h3>
          <FormattedMessage id="seo" defaultMessage="Web positioning (SEO)" />
        </h3>
        <p>
          <FormattedMessage
            id="seo-info"
            defaultMessage="Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="700">
        <i className="fas fa-tachometer-alt"></i>
        <h3>
          <FormattedMessage
            id="optimization"
            defaultMessage="Website optimization"
          />
        </h3>
        <p>
          <FormattedMessage
            id="optimization-info"
            defaultMessage="Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website"
          />
        </p>
      </div>
    </div>
    {/* <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div> */}
  </section>
);

export default React.memo(Service);
