import { FC } from "react";
import "./style.scss";
import ce_image from "../../images/customer_service.jpg";
import react_logo from "../../images/react_logo.png";
import redux_logo from "../../images/redux_logo.png";
import postgresql_logo from "../../images/postgresql_logo.png";
import graphql_logo from "../../images/graphql_logo.png";
import typescript_logo from "../../images/typescript_logo.png";
import expressjs_logo from "../../images/expressjs_logo.png";
import axios_logo from "../../images/axios_logo.png";
import apollo_logo from "../../images/apollo_logo.png";

export const Home: FC = () => {
  return (
    <div>
      <h1 className="home-page-heading">WOW! Customer Experience</h1>
      <h3 className="home-description">
        Our service uses the following technologies:
      </h3>
      <div className="logo-wrapper">
        <img src={react_logo} alt="react" width={100} className="home-logo" />
        <img src={redux_logo} alt="redux" width={100} className="home-logo" />
        <img
          src={postgresql_logo}
          alt="redux"
          width={100}
          className="home-logo"
        />
        <img src={graphql_logo} alt="redux" width={100} className="home-logo" />
        <img
          src={typescript_logo}
          alt="redux"
          width={100}
          className="home-logo"
        />
        <img
          src={expressjs_logo}
          alt="redux"
          width={100}
          className="home-logo"
        />
        <img src={axios_logo} alt="redux" width={100} className="home-logo" />
        <img src={apollo_logo} alt="redux" width={100} className="home-logo" />
      </div>
      <h3 className="mission-description">Our mission is... </h3>
      <p className="mission-description">
        <em>
          to give to your company the necessary tools to provide a "Wow"
          experience in Customer Service and generate Data in order to identify
          early stage issues and opportunities.
        </em>
      </p>
      <div className="image-wrapper">
        <img src={ce_image} alt="customer_service" className="image-1" />
        <img src={ce_image} alt="customer_service" className="image-2" />
        <img src={ce_image} alt="customer_service" className="image-3" />
        <img src={ce_image} alt="customer_service" className="image-4" />
      </div>
    </div>
  );
};

<img src="../../images/React_icon.svg" alt="react" />;
