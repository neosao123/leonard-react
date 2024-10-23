import React, { useEffect, useRef } from "react";
import {
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../../css/sidebar.css";
import { Link } from "react-router-dom";
import useCartStore from "../../zustand/useCardstore";
import { FiChevronRight } from "react-icons/fi";
import CartItem from "../cart/CartItem";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../services/index";
import toast from "react-hot-toast";

const Sidebar = ({ isOpen, handleSidebarToggle, cartItems }) => {
  const { addToCart, cartuid } = useCartStore((state) => state);
  const sidebarRef = useRef(null);
  const { mutate } = useMutation({
    mutationFn: (key) => api.ClearCart(key),
    onSuccess: (data) => {
      addToCart(data?.data?.data);
      toast.success(data?.data?.message)
    },
    onError: (error) => {
      console.log("error:", error);
    }
  })

  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart?.items?.reduce(
    (total, item) => total + item?.product?.product_price * item.quantity,
    0
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleSidebarToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleSidebarToggle]);

  const handleClearCart = () => {
    mutate(cartuid)
  }

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <Link
          className="sidebar-title d-flex "
          to="/cart"
          onClick={handleSidebarToggle}
        >
          <FiChevronRight size={19} className="arrow-icon" />
          <h5 className="cart-title">In your cart</h5>
        </Link>
        <div>
          <span onClick={() => handleClearCart()}>
            <MdDelete size={25} />
          </span>

          <button className="close-btn" onClick={handleSidebarToggle}>
            <FaTimes />
          </button>
        </div>
      </div>
      <div className="sidebar-content">
        {cart?.items?.length === 0 ? (
          <div className="d-flex flex-column align-items-center justify-content-center">
            <FaShoppingCart size={25} />
            <p className="">Your cart is empty.</p>
          </div>
        ) : (
          <div className="cart-items-list">
            {cart?.items?.map((item, index) => {
              return <CartItem item={item} key={index} />
            })}
          </div>
        )}
      </div>
      <div className="sidebar-first-footer">
        <h5 className="cart-title">Total Price:</h5>
        <p>RM {totalPrice?.toFixed(2)}</p>
      </div>
      <div className="sidebar-footer">
        <Link to="/checkout">
          <button className="checkout-btn rounded-2xl">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
