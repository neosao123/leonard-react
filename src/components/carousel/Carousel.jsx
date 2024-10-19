import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import "../../css/slider.css";

const Carousel = (props) => {
  return (
    <div id={props.id} className={`carousel slide ${props.className}`} data-bs-ride="carousel">
      <div className="carousel-inner">{props.children}</div>

      <a
        className="carousel-control-prev"
        href={"#" + props.id}
        role="button"
        data-bs-slide="prev"
      >
        <span className="prev-icon" aria-hidden="true">
          <FaChevronLeft />
        </span>
      </a>

      <a
        className="carousel-control-next"
        href={"#" + props.id}
        role="button"
        data-bs-slide="next"
      >
        <span className="next-icon" aria-hidden="true">
          <FaChevronRight /> 
        </span>
      </a>
    </div>
  );
};

export default Carousel;
