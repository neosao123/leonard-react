import { FiShoppingCart } from "react-icons/fi";
import useCartStore from "../../zustand/useCardstore";
import { Link } from "react-router-dom";


const CardProudct = ({ product_name, product_thumbnail }) => {
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
                            <img className="card-i" src={`${process.env.REACT_APP_PHOTO_URL}${product_thumbnail}`} alt={product_name} />
                        </Link>{" "}
                    </div>
                    <div className="ti">
                        <h3 className="card-title">{truncateTitle(product_name)}</h3>
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

export default CardProudct;