// import React from "react";
// import { Link } from "react-router-dom";
// import "../../css/banner.css";
// import "../../css/card.css";
// import "../../css/CardGrid.css";
// import "../../css/button.css";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import login from "../../asset/login.png";
// // Carousel item component, renders each carousel slide
// const Item = ({ item, index }) => (
//   <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
//     <Link to={item.to}>
//       <img src={item.img} className="img-fluid banner-image" alt={item.title} />
//       <div className="gradient-overlay" /> {/* Gradient overlay here */}
//     </Link>
//   </div>
// );

// const Indicator = ({ item, index }) => (
//   <li
//     data-bs-target={`#${item}`}
//     data-bs-slide-to={index}
//     className={`${index === 0 ? "active" : ""}`}
//     style={{ listStyleType: "none" }}
//   />
// );

// const Banner = (props) => {
//   return (
//     <div className="row banner-section border border-danger" >
//       {/* Slider section with col-8 */}
//       <div className="col-9 ">
//         <div
//           id={props.id}
//           className={`carousel slide banner-height  ${props.className}`}
//           data-bs-ride="carousel"
//         >
//           {/* Carousel indicators for slide navigation */}
//           <ol className="carousel-indicators">
//             {props.data.map((item, index) => (
//               <Indicator item={props.id} index={index} key={index} />
//             ))}
//           </ol>

//           {/* Carousel inner section with slides */}
//           <div className="carousel-inner">
//             {props.data.map((item, index) => (
//               <Item item={item} index={index} key={index} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Image section with col-4 */}
//       <div className="col-3 d-flex align-items-center justify-content-center">
//         <Link to="/account/signin" className="pt-5">
//           {" "}
//           {/* Wrap the image inside a Link component */}
//           <img
//             src={login}
//             alt="Side Image"
//             className="img-fluid banner-login-img"
//             style={{ maxHeight: "100%" }}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bannerslider.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import login from "../../asset/login.png";
import { Link } from "react-router-dom";

export default function Banner() {

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
          <button className="btn btn-primary px-4  px-md-5 py-1 py-md-2  ">Log In</button>
        </Link>
      </div>
    </div>
  );
}