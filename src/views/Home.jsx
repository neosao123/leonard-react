import React, { lazy, Component } from "react";
import "../App.css";
import "../css/card.css";
import "../css/CardGrid.css";
import "../css/title.css";
import "../css/button.css";
import { FiShoppingCart } from "react-icons/fi";
import Search from "../components/Search";
import { data } from "../data";
import Slider from "react-slick";
import * as api from "../services/index";

import img1 from "../asset/img1.png";
import lpi1 from "../asset/lpi.jpg";

import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";
import img4 from "../asset/img4.png";
import e1 from "../asset/e-1.png";
import e2 from "../asset/e-2.png";
import e3 from "../asset/e-3.png";

import s1 from "../asset/s1.png";
import s2 from "../asset/s2.png";
import s3 from "../asset/s3.png";
import s4 from "../asset/s4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AboutUs from "./product/Aboutus";
import Services from "./product/Services";
import Publication from "./product/Publication";
import License from "./product/License";
import Testimonial from "./product/Testimonial";
import useCartStore from "../zustand/useCardstore";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import AboutUs from "./product/Aboutus";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Ebook = lazy(() => import("../components/sliders/Ebook"))

const books = [
  { title: "Kecemerlangan Emosi Di Tempat Kerja", image: img1 },
  { title: "Emotional Excellence in the Workplace", image: img4 },
];

const ebooks = [
  { title: "EBOOK Enjoy Emotional Excellence", image: e3 },
  { title: "EBOOK Emotional Excellence in the Workplace", image: img2 },
  { title: "EBOOK Yellow Therapy 1 ", image: e1 },
  { title: "EBOOK Yellow Therapy 2", image: e2 },
  { title: "EBOOK Kecemerlangan Emosi Di Tempat Kerja", image: img3 },
];

const lpi = [
  { title: "Leonard Personality Inventory (LPI) Assessment", image: lpi1 },
];

const service = [
  { title: "Counseling", image: s1 },
  { title: "Marital Therapy", image: s2 },
  { title: "Statistical analysis", image: s3 },
  { title: "Thesis editing", image: s4 },
];

const Card = ({ title, author, rating, image }) => {
  // Function to truncate the title to 30 characters
  const truncateTitle = (title, limit = 35) => {
    return title.length > limit ? title.substring(0, limit) + "..." : title;
  };

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    const item = {
      id: new Date().getTime(),
      name: "Product Name",
      price: 237.0,
    };
    addToCart(item);
  };

  return (
    <div className="card">
      <div className="card-grid">
        <div className="card-image">
          <div className="card-content">
            <Link to="/product/detail">
              <img className="card-i" src={image} alt={title} />
            </Link>{" "}
          </div>
          <div className="ti">
            <h3 className="card-title">{truncateTitle(title)}</h3>
          </div>

          <div className="button-head justify-content-start">
            <Link className="dedcription-btn add-to-cart-border-color" to="/cart">
              <span className="name-descripeion" onClick={handleAddToCart}>
                Add to cart
              </span>

              <div className="btn-icon">
                <FiShoppingCart size={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeView = () => {
  // booksSliderRef = React.createRef();
  // ebooksSliderRef = React.createRef();
  // lpiSliderRef = React.createRef();
  // serviceSliderRef = React.createRef();

  // nextSlide = (sliderRef) => {
  //   sliderRef.current.slickNext();
  // };

  // prevSlide = (sliderRef) => {
  //   sliderRef.current.slickPrev();
  // };

  // render() {
  //   const sliderSettings = {
  //     dots: false,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     leftMode: true, // Ensure center mode is false
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 4,
  //           slidesToScroll: 1,
  //           infinite: false,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           infinite: false,
  //           dots: false,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 599,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 500,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };


  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () => api.getBooksData()
  })
  if (error) {
    console.log("error:", error)
  }
  console.log("data:", data)



  return (
    <>
      <Banner className="mb-3" id="carouselHomeBanner" />

      {data?.data?.length > 0 && data?.data?.map((el) => {
        return <Ebook key={el?.category_id} data={el} />
      })}

      {/* <div className="book-slider">
        <div className="d-flex justify-content-start align-items-center">
          <div className="">
            <h1 className="title">E-Books</h1>
          </div>
        </div> */}
      {/* <Slider ref={this.ebooksSliderRef} {...sliderSettings}>
            {ebooks.map((ebook, index) => (
              <Card key={index} {...ebook} />
            ))}
          </Slider> */}

      {/* <div className="slider-navigation">
          <button
            className="prev-button"
            onClick={() => this.prevSlide(this.ebooksSliderRef)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-button"
            onClick={() => this.nextSlide(this.ebooksSliderRef)}
          >
            <FaChevronRight />
          </button>
        </div> */}
      {/* </div> */}

      <div className="book-slider">
        <div className="d-flex justify-content-start align-items-center">
          <div className="">
            <h1 className="title">Services</h1>
          </div>
        </div>

        {/* <Slider ref={this.serviceSliderRef} {...sliderSettings}>
          {service.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </Slider> */}

        <div className="slider-navigation">
          <button
            className="prev-button"
            onClick={() => this.prevSlide(this.serviceSliderRef)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-button"
            onClick={() => this.nextSlide(this.serviceSliderRef)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="book-slider ">
        <div className="d-flex justify-content-start align-items-center">
          <div className="">
            <h1 className="title">Books</h1>
          </div>
        </div>
        {/* <Slider ref={this.booksSliderRef} {...sliderSettings}>
          {books.map((book, index) => (
            <Card key={index} {...book} />
          ))}
        </Slider> */}

        <div className="slider-navigation">
          <button
            className="prev-button"
            onClick={() => this.prevSlide(this.booksSliderRef)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-button"
            onClick={() => this.nextSlide(this.booksSliderRef)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="book-slider">
        <div className="d-flex justify-content-start align-items-center">
          <div className="">
            <h1 className="title">LPI</h1>
          </div>
        </div>
        {/* <Slider ref={this.lpiSliderRef} {...sliderSettings}>
          {lpi.map((lpi, index) => (
            <Card key={index} {...lpi} />
          ))}
        </Slider> */}

        {/* <div className="slider-navigation">
          <button
            className="prev-button"
            onClick={() => this.prevSlide(this.lpiSliderRef)}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-button"
            onClick={() => this.nextSlide(this.lpiSliderRef)}
          >
            <FaChevronRight />
          </button>
        </div> */}
      </div>

      <AboutUs />

      <Services />
      <Publication />
      {/* <License/> */}
      <Testimonial />
    </>
  );
}


export default HomeView;
