import React from "react";
import below from "../../assets/images/all_icon.png";
import above from "../../assets/images/abt_img.png";
import "../../css/aboutus.css";
import "../../css/cart.css";
const AboutUs = () => {
  return (
    <>
      <div class="main-about tnb7 carts " id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="abut-text-img">
                <img src={above} />
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="abut-text">
                <div class="small-heading"> About Us</div>
                <div class="big-heading">
                  {" "}
                  DR. LEONARD YONG <br />
                  <span>(PhD; M.Ed; B.Sc.Hon)</span>
                </div>
                <p>
                  Dr. Leonard Yong is an international consultant who has
                  trained and consulted in many countries internationally. He is
                  an Educational & Industrial Psychologist. Prior to his
                  retirement as Professor, Universiti Malaya's Dept of
                  Counseling & Educational Psychology, he has taught more than
                  20 years in Universiti Malaya. He was also the pioneering
                  Director of Universiti Malaya Centre for Continuing Education.
                </p>
                <a class="more_btn animated fadeIn go" href="home/about">
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> Read
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="dot-6">
          <img src={below} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
