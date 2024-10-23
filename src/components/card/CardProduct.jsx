import { FiShoppingCart } from "react-icons/fi";
import useCartStore from "../../zustand/useCardstore";
import { Link } from "react-router-dom";


const CardProudct = ({ product_id, product_name, product_thumbnail, product_price, product_short_description, isLoading }) => {
    const truncateTitle = (title, limit = 35) => {
        return title.length > limit ? title.substring(0, limit) + "..." : title;
    };

    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = (product_id, product_name, price, product_thumbnail, product_short_description) => {
        const item = {
            id: product_id,
            name: product_name,
            product_thumbnail: product_thumbnail,
            price: +price,
            description: product_short_description
        };
        addToCart(item);
    };

    return (
        <>
            <div className="card">
                <div className="card-grid">
                    <div className="card-image">
                        <div className="card-content">
                            <Link to="/product/detail">
                                <img className="card-i" src={`${process.env.REACT_APP_PHOTO_URL}${product_thumbnail}`} alt={product_name} />
                            </Link>{" "}
                        </div>
                        <h3 className="card-title header-title">{truncateTitle(product_name)}</h3>
                        <p className="card-title pricing-tag">RM {product_price}</p>

                        <div className="button-head justify-content-start">
                            <Link className="dedcription-btn add-to-cart-border-color" to="#">
                                <span className="name-descripeion" onClick={() => handleAddToCart(product_id, product_name, product_price, product_thumbnail, product_short_description)}>
                                    Add to cart
                                </span>

                                <div className="btn-icon">
                                    <FiShoppingCart size={18} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardProudct;