import React from "react";
import "../../css/testimonial.css";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto sliding
    slidesToShow: 2, // Show 2 slides at a time
    autoplaySpeed: 2000, // Time between slides in milliseconds
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Example breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };

  return (
    <div className="testi-main tnb7">
      <div className="container">
        <div className="small-heading">TESTIMONIALS</div>
        <div className="big-heading">What Our Clients Say</div>
        <Slider {...settings}>
          {/* First Slide */}
          <div className="testimonials">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <FaQuoteRight
                    className="fa fa-quote-right"
                    aria-hidden="true"
                  />
                  <h2>
                    “The EQ program has transformed my life. I have learnt how
                    to maximize my strengths and deal with my weaknesses.”
                  </h2>
                </div>
                <div className="testi-text-bottom">
                  <h3>Kriengsak Plussind</h3>
                  <span>General Manager, Ilicon Company, Thailand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <FaQuoteRight
                    className="fa fa-quote-right"
                    aria-hidden="true"
                  />
                  <h2>
                    "The LPI seminar was important to help us know ourselves and
                    then to know others. Interaction and relationships would be
                    that much more effective, pleasant and profitable.
                    Ultimately business is all about relationships."
                  </h2>
                </div>
                <div className="testi-text-bottom">
                  <h3>Wong Hong Meng</h3>
                  <span>
                    Company Director, BEcons (Hons), MBA, ACIS, FCA, CA(M)
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Second Slide */}
          <div className="testimonials">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <FaQuoteRight
                    className="fa fa-quote-right"
                    aria-hidden="true"
                  />
                  <h2>
                    "This is one of the most fantastic and fascinating seminars
                    I have attended. In the seminar, I could discover my
                    strengths and weaknesses. The seminar experience provided me
                    with greater self-motivation to manage my life."
                  </h2>
                </div>
                <div className="testi-text-bottom">
                  <h3>Hideshi Sawaki</h3>
                  <span>Regional Manager of Japanese Electronic Company</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <FaQuoteRight
                    className="fa fa-quote-right"
                    aria-hidden="true"
                  />
                  <h2>
                    "The LPI seminar provides an excellent opportunity to
                    understand not only ourself better but also the people
                    around us. Above all, it gives us insight into the personal
                    traits which may need adjustments for fulfillment of the
                    meaning of our life. I strongly recommend you value the
                    opportunity to learn something good for all of us."
                  </h2>
                </div>
                <div className="testi-text-bottom">
                  <h3>Jimmy Loke</h3>
                  <span> Senior Consultant, MBA, FCA, </span>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Slides (repeat the structure) */}
          <div className="testimonials">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <FaQuoteRight
                    className="fa fa-quote-right"
                    aria-hidden="true"
                  />
                  <h2>
                    "An interesting and thought-provoking seminar, which one
                    should not miss."
                  </h2>
                </div>
                <div className="testi-text-bottom">
                  <h3>HT Ong</h3>
                  <span>Managing Director, Entrusty Group of Companies</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <FaQuoteRight
                    className="fa fa-quote-right"
                    aria-hidden="true"
                  />
                  <h2>
                    “The LPI profiling has helped tremendously to enhance my
                    people skills and therefore made me a better leader. I now
                    feel more confident to motivate my team members.”
                  </h2>
                </div>
                <div className="testi-text-bottom">
                  <h3>Said Al Hajiri</h3>
                  <span>Administrator, Saudi Aramco</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <div className="row">
              <div className="col-md-12 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <FaQuoteRight
                    className="fa fa-quote-right"
                    aria-hidden="true"
                  />
                  <h2>
                    "LPI has helped me to understand what is EQ and most
                    importantly understand myself and others better. That
                    understanding and the LPI techniques have helped me a lot in
                    dealing effectively with people. I truly believe that LPI
                    can help a lot of people who are struggling with themselves
                    and others. The LPI programme is strongly recommended to
                    everyone!"
                  </h2>
                </div>
                <div className="testi-text-bottom">
                  <h3>Francis Wong</h3>
                  <span>Director, Genesis Equity Group</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
