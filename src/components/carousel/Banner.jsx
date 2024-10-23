import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bannerslider.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import login from "../../asset/login.png";
import { Link } from "react-router-dom";
import createUser from "../../zustand/createUser";
import toast from "react-hot-toast";

export default function Banner() {
  const { user, isAuthorized, token, logout } = createUser((state) => state)

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
          <img src="https://www.bookxcess.com/cdn/shop/files/BXOS_membership_e-comm-01_1.jpg?v=1718332574&width=1920" alt="Image" />
        </div>
        <div className="carousel-overlay">
          <img src="https://www.bookxcess.com/cdn/shop/files/BlindDateWithABook_POSM-03.jpg?v=1727174439&width=1920" alt="Image" />
        </div>
        <div className="carousel-overlay">
          <img src="https://www.bookxcess.com/cdn/shop/files/BlindDateWithABook_POSM-03.jpg?v=1727174439&width=1920" alt="Image" />
        </div>
        <div className="carousel-overlay">
          <img src="https://www.bookxcess.com/cdn/shop/files/BXOS_Singapore_2024_Desktop_2650x300-01_1.jpg?v=1714511428&width=1920" alt="Image" />
        </div>
        <div className="carousel-overlay">
          <img src="https://www.bookxcess.com/cdn/shop/files/free_shipping_2023_DESKTOP_BANNER_2560x300_89cf5c4b-b092-45a4-b327-1cde8f7c483f.jpg?v=1690188507&width=1920" alt="Image" />
        </div>
      </Slider>
      <div className="max-height-200">
        <Link to="/account/signin" className="pt-5">
          {" "}
          {isAuthorized == false && <Link to={"/account/signin"}><button className="btn btn-primary px-4  px-md-5 py-1 py-md-2  ">Sign In</button></Link>}
          {isAuthorized == true && <button onClick={handleSignOut} className="btn btn-primary px-4  px-md-5 py-1 py-md-2  ">Sign Out</button>}
        </Link>
      </div>
    </div>
  );
}