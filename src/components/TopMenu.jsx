import { Link, NavLink } from "react-router-dom";
import logo from "../asset/logo.jpeg";
import "../App.css";
import "../css/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../views/product/Sidebar";
import useCartStore from "../zustand/useCardstore";

const TopMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(false); // Close sidebar on menu click
    setIsDropdownOpen(false); // Close dropdown on menu click
  };

  return (
    <>
      <nav className="navbar background shadow-lg text-light navbar-expand-lg p-0 sticky-top shadow-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img alt="logo" className="top-logo" src={logo} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
            aria-expanded={isDropdownOpen}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light ${isActive ? "active" : ""}`
                  }
                  to="/"
                  onClick={handleMenuClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light ${isActive ? "active" : ""}`
                  }
                  to="/about"
                  onClick={handleMenuClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light ${isActive ? "active" : ""}`
                  }
                  to="/services"
                  onClick={handleMenuClick}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light ${isActive ? "active" : ""}`
                  }
                  to="/publication"
                  onClick={handleMenuClick}
                >
                  Publications
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light ${isActive ? "active" : ""}`
                  }
                  to="/license"
                  onClick={handleMenuClick}
                >
                  Licensed Trainers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-light ${isActive ? "active" : ""}`
                  }
                  to="/contact"
                  onClick={handleMenuClick}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div className="position-relative nav-item me-4">
                <Link
                  onClick={handleSidebarToggle}
                  className="cart bg-light"
                >
                  <FaShoppingCart size={15} className="text-theme" />
                  {cart.length > 0 && (
                    <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                      {cart.length}
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
        cartItems={cart}
      />
    </>
  );
};

export default TopMenu;
