import React from "react";
import { Link } from "react-router-dom";
import "../../css/banner.css";
import "../../css/card.css";
import "../../css/CardGrid.css";
import "../../css/button.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import login from "../../asset/login.png";
// Carousel item component, renders each carousel slide
const Item = ({ item, index }) => (
  <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
    <Link to={item.to}>
      <img src={item.img} className="img-fluid banner-image" alt={item.title} />
      <div className="gradient-overlay" /> {/* Gradient overlay here */}
    </Link>
  </div>
);

const Indicator = ({ item, index }) => (
  <li
    data-bs-target={`#${item}`}
    data-bs-slide-to={index}
    className={`${index === 0 ? "active" : ""}`}
    style={{ listStyleType: "none" }}
  />
);

const Banner = (props) => {
  return (
    <div className="row banner-section">
      {/* Slider section with col-8 */}
      <div className="col-9 ">
        <div
          id={props.id}
          className={`carousel slide banner-height  ${props.className}`}
          data-bs-ride="carousel"
        >
          {/* Carousel indicators for slide navigation */}
          <ol className="carousel-indicators">
            {props.data.map((item, index) => (
              <Indicator item={props.id} index={index} key={index} />
            ))}
          </ol>

          {/* Carousel inner section with slides */}
          <div className="carousel-inner">
            {props.data.map((item, index) => (
              <Item item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Image section with col-4 */}
      <div className="col-3 d-flex align-items-center justify-content-center">
        <Link to="/account/signin" className="pt-5">
          {" "}
          {/* Wrap the image inside a Link component */}
          <img
            src={login}
            alt="Side Image"
            className="img-fluid banner-login-img"
            style={{ maxHeight: "100%" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
