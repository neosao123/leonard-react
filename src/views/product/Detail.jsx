import { lazy } from "react";
import { data } from "../../data";
import { Link } from "react-router-dom";

import img2 from "../../asset/img1.png";
import img3 from "../../asset/img3.png";
import img1 from "../../asset/img4.png";
import "../../css/cart.css";
import "../../css/button.css";

import { FiShoppingCart } from "react-icons/fi";
const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct")
);
// const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));

const ProductDetailView = () => {
  return (
    <div className="cart-section">
      <div className="container-fluid">
        <div className="row">
          
          
          
          
          
          
          
          
          
          
          
          <div className="col-md-12">
            <div className="row mb-3">
            <div className="col-md-6 d-flex flex-column align-items-center">
  {/* Main product image */}
  <img
    src={img1}
    className="img-fluid mb-3"
    alt="Main Product"
  />

  {/* Thumbnail images */}
  <div className="d-flex justify-content-center">
    <img
      src={img2}
      className="border border-secondary me-2"
      width="75"
      alt="Grey T-shirt"
    />
    <img
      src={img3}
      className="border border-secondary me-2"
      width="75"
      alt="Black T-shirt"
    />
    <img
      src={img1}
      className="border border-secondary me-2"
      width="75"
      alt="Green T-shirt"
    />
  </div>
</div>













            <div className="col-md-5">
              <h1 className="h5 d-inline me-2">Great product name goes here</h1>
              <span className="badge bg-success me-2">New</span>
              <span className="badge bg-danger me-2 mb-3">Hot</span>
              {/* <div className="mb-3">
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />|{" "}
                <span className="text-muted small">
                  42 ratings and 4 reviews
                </span>
              </div> */}
              <dl className="row small mb-3">
                <dt className="col-sm-3">Author</dt>
                <dd className="col-sm-9"> Dr Leonard Yong</dd>
                <dt className="col-sm-3">Paperback</dt>
                <dd className="col-sm-9">280 pages</dd>
              
                <dt className="col-sm-3">Language</dt>
                <dd className="col-sm-9"> Malay</dd>
                <dt className="col-sm-3">Dimensions</dt>
                <dd className="col-sm-9">6 x 9 inches</dd>

              </dl>

              <div className="mb-3">
                <span className="fw-bold h5 me-2">RM60.00</span>
                {/* <del className="small text-muted me-2">$2000</del>
                <span className="rounded p-1 bg-warning  me-2 small">
                  -$100
                </span> */}
              </div>
             
              <div className="mb-3">
  <div className="d-inline float-start me-2">
    <div className="input-group input-group-sm mw-140">
      <button className="btn btn-primary text-white" type="button">
        <i className="bi bi-dash-lg"></i>
      </button>
      <input type="text" className="form-control" defaultValue="1" />
      <button className="btn btn-primary text-white" type="button">
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  </div>
<div className="my-3 d-flex">

    <div className="button-head justify-content-start  mb-2">
      <Link className="dedcription-btn" to="/cart">
        <span className="name-descripeion p-1">Add to cart</span>
        <div className="btn-icon">
          <FiShoppingCart size={16} />
        </div>
      </Link>
    </div>
    
    <div className="button-head justify-content-start ">
      <Link className="dedcription-btn" to="/cart">
        <span className="name-descripeion p-2">Buy now</span>
        <div className="btn-icon">
          <FiShoppingCart size={16} />
        </div>
      </Link>
    </div>

</div>
</div>
                
            </div>
              <div >
                <p className="fw-bold mb-2 small">Product Highlights</p>
                <ul className="small">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                  <li>Cras consequat felis ut vulputate porttitor.</li>
                </ul>
              </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-link active"
                    id="nav-details-tab"
                    data-bs-toggle="tab"
                    href="#nav-details"
                    role="tab"
                    aria-controls="nav-details"
                    aria-selected="true"
                  >
                    Details
                  </a>
                  <a
                    className="nav-link"
                    id="nav-randr-tab"
                    data-bs-toggle="tab"
                    href="#nav-randr"
                    role="tab"
                    aria-controls="nav-randr"
                    aria-selected="false"
                  >
                    Ratings & Reviews
                  </a>
                  <a
                    className="nav-link"
                    id="nav-faq-tab"
                    data-bs-toggle="tab"
                    href="#nav-faq"
                    role="tab"
                    aria-controls="nav-faq"
                    aria-selected="false"
                  >
                    Questions and Answers
                  </a>
                  <a
                    className="nav-link"
                    id="nav-ship-returns-tab"
                    data-bs-toggle="tab"
                    href="#nav-ship-returns"
                    role="tab"
                    aria-controls="nav-ship-returns"
                    aria-selected="false"
                  >
                    Shipping & Returns
                  </a>

                </div>
              </nav>
              <div className="tab-content p-3 small" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <Details />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-randr"
                  role="tabpanel"
                  aria-labelledby="nav-randr-tab"
                >
                  {Array.from({ length: 5 }, (_, key) => (
                    <RatingsReviews key={key} />
                  ))}
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-faq"
                  role="tabpanel"
                  aria-labelledby="nav-faq-tab"
                >
                  <dl>
                    {Array.from({ length: 5 }, (_, key) => (
                      <QuestionAnswer key={key} />
                    ))}
                  </dl>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-ship-returns"
                  role="tabpanel"
                  aria-labelledby="nav-ship-returns-tab"
                >
                  <ShippingReturns />
                </div>

              </div>
            </div>
          </div>
        </div>








        {/* <div className="col-md-4">
          <CardFeaturedProduct data={data.products} />
       
        </div> */}
      </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
