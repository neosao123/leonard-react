import React, { useEffect, useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import "../../css/sidebar.css";
import { Link } from "react-router-dom";
import useCartStore from "../../zustand/useCardstore";
import { FiChevronRight } from "react-icons/fi";

import img from "../../asset/img1.png";

const Sidebar = ({ isOpen, handleSidebarToggle, cartItems }) => {
  const sidebarRef = useRef(null);

  const cart = useCartStore((state) => state.cart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
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
        <button className="close-btn" onClick={handleSidebarToggle}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-content">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item-card">
                <div className="cart-item-image">
                  <img src={img} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.name}</p>
                  <p className="cart-item-price mt-2">
                    {" "}
                    <var className="price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </var>
                    <small className="d-block text-muted">
                      ${item.price.toFixed(2)} each
                    </small>
                  </p>
                  <div className="input-group increase ">
                    <button
                      className="btn theme btn-1 text-white"
                      type="button"
                      onClick={() => decrementQuantity(item.id)}
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
                      value={item.quantity}
                      readOnly
                      style={{
                        height: "28px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                    <button
                      className="btn theme btn-1 text-white"
                      type="button"
                      onClick={() => incrementQuantity(item.id)}
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
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTimes /> Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="sidebar-first-footer">
        <h5 className="cart-title">Total Price:</h5>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="sidebar-footer">
        <Link to="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
