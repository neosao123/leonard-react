import Slider from "react-slick";
import e1 from "../../asset/e-1.png";
import e2 from "../../asset/e-2.png";
import e3 from "../../asset/e-3.png";
import img2 from "../../asset/img2.png";
import img3 from "../../asset/img3.png";
import CardProudct from "../card/CardProduct";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const EbookSlider = ({ data }) => {
    const { category_id, category_name, products } = data;
    console.log("category:", category_name)
    const ebookSliderRef = useRef(null);

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        leftMode: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const ebooks = [
        { title: "EBOOK Enjoy Emotional Excellence", image: e3 },
        { title: "EBOOK Emotional Excellence in the Workplace", image: img2 },
        { title: "EBOOK Yellow Therapy 1 ", image: e1 },
        { title: "EBOOK Yellow Therapy 2", image: e2 },
        { title: "EBOOK Kecemerlangan Emosi Di Tempat Kerja", image: img3 },
        { title: "EBOOK Kecemerlangan Emosi Di Tempat Kerja", image: img3 }
    ];

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
                <div className="slider-navigation">
                    <button
                        className="prev-button"
                        onClick={() => ebookSliderRef.current.slickPrev()}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="next-button"
                        onClick={() => ebookSliderRef.current.slickNext()}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div> : <></>}
        </>
    )
};

export default EbookSlider