import { FiShoppingCart } from "react-icons/fi";
import useCartStore from "../../zustand/useCardstore";
import { Link } from "react-router-dom";
import * as api from "../../services/index";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const CardProudct = ({ product_id, product_name, product_thumbnail, product_price }) => {
    const { cartuid, updateCardUID, addToCart } = useCartStore((state) => state)

    const { mutate } = useMutation({
        mutationFn: (payload) => api.AddProductToCart(payload),
        onSuccess: (data) => {
            updateCardUID(data?.data?.cart_uid);
            addToCart(data?.data?.cart)
            toast.success(data?.data?.message)
        },
        onError: (error) => {
            console.log("error:", error)
        }
    })

    const handleAddToCart = (product_id) => {
        let payload = {
            cart_uid: cartuid,
            product_id: product_id,
            quantity: 1
        }
        mutate(payload)
    };

    return (
        <>
            <div className="card">
                <div className="card-grid">
                    <div className="card-image">
                        <div className="card-content">
                            <Link to="/product/detail">
                                <img className="card-i" src={`${process.env.REACT_APP_PHOTO_URL}${product_thumbnail}`} alt={product_name} />
                            </Link>
                        </div>
                    </div>
                    <h3 className="card-title header-title text-ellipsis">{product_name}</h3>
                    <p className="pricing-tag my-2">RM {product_price}</p>
                    <div className="button-head justify-content-start">
                        <Link className="cart-btn add-to-cart-border-color" to="#" onClick={() => handleAddToCart(product_id)}>
                            <span className="name-descripeion" >
                                Add to cart
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardProudct;