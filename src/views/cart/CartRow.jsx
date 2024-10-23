import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react"
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom";
import useCartStore from "../../zustand/useCardstore";
import * as api from "../../services/index";
import toast from "react-hot-toast";

export const CartRow = (item) => {
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
        mutationFn: (id) => api.RemoveCartItem(id),
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
            product_id: item?.Item?.product_id
        }
        mutate(payload)
    }

    const handleDecrement = () => {
        let payload = {
            cart_uid: cartuid,
            quantity: -1,
            product_id: item?.Item?.product_id
        }
        mutate(payload)
    }

    const RemoveCartItem = () => {
        deleteMutation({ cart_id: cartuid, product_id: item?.Item?.product_id })
    }


    return (
        <tr key={item.id}>
            <td className="py-4">
                <div className="row">
                    <div className="col-3 d-none d-md-block">
                        <img
                            src={`${process.env.REACT_APP_PHOTO_URL}${item?.Item?.product?.product_thumbnail}`}
                            width="80"
                            alt="..."
                        />
                    </div>
                    <div className="col">
                        <Link
                            to="/product/detail"
                            className="text-decoration-none"
                        >
                            {item?.Item?.product?.product_name}
                        </Link>
                        {/* <p className="small text-muted">
                                  {item?.description}
                                </p> */}
                    </div>
                </div>
            </td>

            <td className="p-3">
                <div className="input-group input-group-sm mw-140">
                    <button
                        className="btn theme btn-1 text-white"
                        type="button"
                        disabled={item?.Item?.quantity == 1}
                        onClick={() => handleDecrement()}
                    >
                        <FaMinus /> {/* Using React Icon */}
                    </button>
                    <input
                        type="text"
                        className="form-control"
                        value={+item?.Item?.quantity}
                        readOnly
                    />
                    <button
                        className="btn theme btn-1 text-white"
                        type="button"
                        onClick={() => handleIncrement()}
                    >
                        <FaPlus /> {/* Using React Icon */}
                    </button>
                </div>
            </td>

            <td className="p-3">
                <var className="price">
                    RM {item?.Item?.product?.product_price * item?.Item?.quantity}
                </var>
                <small className="d-block text-muted">
                    RM {item?.Item?.product?.product_price} each
                </small>
            </td>

            <td className="p- text-ce">
                {/* <button className="btn btn-sm btn-outline-secondary me-2">
                <FaHeart /> 
              </button> */}
                <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => RemoveCartItem()}

                >
                    <FaTrash /> {/* Using React Icon */}
                </button>
            </td>
        </tr>
    )
}