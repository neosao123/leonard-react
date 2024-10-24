import React, { lazy, Component } from "react";
import "../App.css";
import "../css/card.css";
import "../css/CardGrid.css";
import "../css/title.css";
import "../css/button.css";
import * as api from "../services/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./product/Aboutus";
import Services from "./product/Services";
import Publication from "./product/Publication";
import License from "./product/License";
import Testimonial from "./product/Testimonial";
import { useQuery } from "@tanstack/react-query";
// import AboutUs from "./product/Aboutus";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Product = lazy(() => import("../components/sliders/Ebook"));

const HomeView = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () => api.getBooksData()
  })
  if (error) {
    console.log("error:", error)
  }



  return (
    <>
      <Banner className="mb-3" id="carouselHomeBanner" />

      {!isLoading ? data?.data?.map((el, index) => {
        return <Product key={el?.category_id} data={el} index={index + 1} />
      }) : (
        <div class="d-flex justify-content-center my-5 gap-2" >
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )
      }

      <AboutUs />

      <Services />

      <Publication />

      {/* <License/> */}
      <Testimonial />
    </>
  );
}


export default HomeView;
