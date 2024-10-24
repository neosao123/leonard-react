import Slider from "react-slick";
// import CardProduct from "../card/CardProduct";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { lazy, useRef } from "react";
import "./slider.css"

const CardProduct = lazy(() => import("../card/CardProduct"))

const ShowcaseSlider = ({ data, index }) => {
    const { category_id, category_name, category_image, products } = data;
    const ebookSliderRef = useRef(null); 

    console.log(" Slider ", category_name, index)
    const PrevButton = (props) => {
        const { onClick, currentSlide } = props;
        return <button
            className={`prev-button ${currentSlide === 0 ? "hide_button" : ""}`}
            onClick={onClick}
            disabled={currentSlide === 0}
        >
            <FaChevronLeft size={20} />
        </button>
    }

    const NextButton = (props) => {
        const { onClick, currentSlide, slideCount } = props;
        return <button
            className={`next-button ${currentSlide === (+slideCount - 1) ? "hide_button" : ""}`}
            onClick={onClick}
            disabled={currentSlide === (+slideCount - 1)}
        >
            <FaChevronRight size={20} />
        </button>
    }

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        leftMode: true,
        arrows: true,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };

    return (
        <>
            {products?.length > 0 ?
                <div className={index === 0 ? "category-section book-slider" : "category-section book-slider alternate-color"} >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10">
                                <div className="big-heading ms-2">{category_name}</div>
                            </div>
                        </div>
                        <Slider ref={ebookSliderRef} {...sliderSettings}>
                            {products?.length > 0 && products?.map((ebook, index) => (
                                <CardProduct key={index} {...ebook} />
                            ))}
                        </Slider>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
};

export default ShowcaseSlider;