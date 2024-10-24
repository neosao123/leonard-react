import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bannerslider.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import createUser from "../../zustand/createUser";
import toast from "react-hot-toast";

export default function Banner() {
  const { isAuthorized, logout } = createUser((state) => state)

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div
      className="slick-prev-button"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft
        size={40}
      />
    </div>
  }

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div
      className="slick-next-button"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight
        size={40}
      />
    </div>
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    padding: 0,
    arrows: true,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots slick-dots1 custom-dots",
  };

  const handleSignOut = () => {
    toast.success("Logged out successfully.")
    logout()
  }

  return (
    <div className="position-relative" id="main-banner-slider">
      <Slider {...settings}>
        <div className="carousel-overlay">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://www.bookxcess.com/cdn/shop/files/comic_craze_2_360pxW-x-150px.jpg?width=768" />
            <img src="https://www.bookxcess.com/cdn/shop/files/comic_craze_2_2650pxW-x-300pxH.jpg?width=1920" alt="Banner 1" />
          </picture>
        </div>
        <div className="carousel-overlay">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://www.bookxcess.com/cdn/shop/files/comic_craze_2_360pxW-x-150px.jpg?width=768" />
            <img src="https://www.bookxcess.com/cdn/shop/files/BXOS_membership_e-comm-01_1.jpg?v=1718332574?width=1920" alt="Banner 1" />
          </picture>
        </div>
      </Slider>
      {
        !isAuthorized &&
        <div className="max-height-200">
          <Link to="/account/signin" className="pt-5">
            <Link to={"/account/signin"}>
              <button className="animated-button px-4  px-md-5 py-1 py-md-2  ">
                Sign In
              </button>
            </Link>
          </Link>
        </div>
      }
    </div>
  );
}