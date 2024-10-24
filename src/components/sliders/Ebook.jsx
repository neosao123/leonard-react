import Slider from "react-slick";
// import CardProudct from "../card/CardProduct";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { lazy, useRef } from "react";
import "./slider.css"

const CardProudct = lazy(() => import("../card/CardProduct"))

const EbookSlider = ({ data, index }) => {
    const { category_id, category_name, category_image, products } = data;
    const ebookSliderRef = useRef(null);
    const sliderNumber = index;
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
        slidesToShow: 5,
        slidesToScroll: 1,
        leftMode: true,
        arrows: true,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    };

    return (
        <>
            {products?.length > 0 ?
                <div className="category-section book-slider" >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10">
                                <div className="title">{category_name}</div>
                            </div>
                        </div>

                        <Slider ref={ebookSliderRef} {...sliderSettings}>
                            {products?.length > 0 && products?.map((ebook, index) => (
                                <CardProudct key={index} {...ebook} />
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

export default EbookSlider