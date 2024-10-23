import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import * as api from "../../services/index";
import { useMutation } from "@tanstack/react-query";
import useCartStore from "../../zustand/useCardstore";
import toast from "react-hot-toast";


const CartItem = (item) => {
    const { cartuid, updateCardUID, addToCart } = useCartStore((state) => state)
    const { mutate } = useMutation({
        mutationFn: (payload) => api.AddProductToCart(payload),
        onSuccess: (data) => {
            addToCart(data?.data?.cart)
        },
        onError: (error) => {
            console.log("error:", error)
        }
    })

    const { mutate: deleteMutation } = useMutation({
        mutationFn: (payload) => api.RemoveCartItem(payload),
        onSuccess: (data) => {
            console.log(data)
            addToCart(data?.data?.cart);
            toast.success(data?.data?.message)
        },
        onError: (error) => {
            console.log("error:", error)
        }
    })

    const handleIncrement = () => {
        let payload = {
            cart_uid: cartuid,
            quantity: 1,
            product_id: item?.item?.product_id
        }
        mutate(payload)
    }

    const handleDecrement = () => {
        let payload = {
            cart_uid: cartuid,
            quantity: -1,
            product_id: item?.item?.product_id
        }
        mutate(payload)
    }

    const RemoveCartItem = () => {
        deleteMutation({ cart_id: cartuid, product_id: item?.item?.product_id })
    }


    return (
        <div className="cart-item-card">
            <div className="cart-item-image">
                <img src={`${process.env.REACT_APP_PHOTO_URL}${item?.item?.product?.product_thumbnail}`} alt={item?.item?.product_name} />
            </div>
            <div className="cart-item-info">
                <p className="cart-item-title">{item?.item?.product_name}</p>
                <p className="cart-item-price mt-2">
                    {" "}
                    <var className="price">
                        RM {(item?.item?.product?.product_price * item?.item?.quantity).toFixed(2)}
                    </var>
                    <small className="d-block text-muted">
                        RM {item?.item?.product?.product_price} each
                    </small>
                </p>
                <div className="input-group increase ">
                    <button
                        className="btn theme btn-1 text-white"
                        type="button"
                        onClick={() => handleDecrement()}
                        disabled={item?.item?.quantity == 1}
                        style={{
                            height: "28px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FaMinus />
                    </button>
                    <input
                        type="text"
                        className="form-control"
                        value={item?.item?.quantity}
                        readOnly
                        style={{
                            height: "28px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "0px 8px"
                        }}
                    />
                    <button
                        className="btn theme btn-1 text-white"
                        type="button"
                        onClick={() => handleIncrement()}
                        style={{
                            height: "28px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <FaPlus />
                    </button>
                </div>
                <button
                    className="remove-item mt-2"
                    onClick={() => RemoveCartItem()}
                >
                    <FaTimes /> Remove Item
                </button>
            </div>
        </div>
    )
}

export default CartItem;