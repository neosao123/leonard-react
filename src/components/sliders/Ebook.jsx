import Slider from "react-slick";
// import CardProudct from "../card/CardProduct";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { lazy, useRef } from "react";
import "./slider.css"

const CardProudct = lazy(()=>import("../card/CardProduct"))

const EbookSlider = ({ data }) => {
    const { category_id, category_name, products } = data;
    const ebookSliderRef = useRef(null);

    const PrevButton = (props) => {
        const { onClick, currentSlide } = props;
        return <button
            className={`prev-button ${currentSlide == 0 ? "hide_button" : ""}`}
            onClick={onClick}
            disabled={currentSlide == 0}
        >
            <FaChevronLeft size={20} />
        </button>
    }

    const NextButton = (props) => {
        const { onClick, currentSlide, slideCount } = props;
        return <button
            className={`next-button ${currentSlide == (+slideCount - 1) ? "hide_button" : ""}`}
            onClick={onClick}
            disabled={currentSlide == (+slideCount - 1)}
        >
            <FaChevronRight size={20} />
        </button>
    }

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        leftMode: true,
        arrows: true,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            {products?.length > 0 ? <div id="EbookSlider" className="book-slider">
                <div className="d-flex justify-content-start align-items-center">
                    <div className="">
                        <h1 className="title">{category_name}</h1>
                    </div>
                </div>
                <Slider ref={ebookSliderRef} {...sliderSettings}>
                    {products?.length > 0 && products?.map((ebook, index) => (
                        <CardProudct key={index} {...ebook} />
                    ))}
                </Slider>
            </div> : <></>}
        </>
    )
};

export default EbookSlider