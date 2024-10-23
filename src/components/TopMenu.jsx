import { Link, NavLink } from "react-router-dom";
import logo from "../asset/logo.jpeg";
import "../App.css";
import "../css/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../views/product/Sidebar";
import useCartStore from "../zustand/useCardstore";
import { RiAccountCircleFill } from "react-icons/ri";
import createUser from "../zustand/createUser";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import toast from "react-hot-toast";

const TopMenu = () => {
  const { user, token, isAuthorized } = createUser((state) => state);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const logout = createUser((state) => state.logout);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(false); // Close sidebar on menu click
    setIsDropdownOpen(false); // Close dropdown on menu click
  };

  const handleSignOut = () => {
    toast.success("Logged out successfully.")
    logout()
  }

  return (
    <>
      <nav className="navbar background shadow-lg text-light navbar-expand-lg p-0 sticky-top shadow-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
              aria-expanded={isDropdownOpen}
            >
              {/* <i className="navbar-toggler-icon" /> */}
              <RxHamburgerMenu size={30} />
            </button>
            <Link className="navbar-brand" to="/">
              <img alt="logo" className="top-logo" src={logo} />
            </Link>
          </div>
          <div className="d-flex d-lg-none">
            <div className="d-flex align-items-center">
              <div className="position-relative nav-item">
                <Link
                  onClick={handleSidebarToggle}
                  className="cart bg-light"
                >
                  <FaShoppingCart size={15} className="text-theme" />
                  {cart.length > 0 && (
                    <div className="position-absolute top-5 top-lg-1 start-50 start-lg-100 translate-middle badge bg-danger rounded-circle">
                      {cart.length}
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center d-lg-none">
              <div className="position-relative nav-item me-2 dropdown">
                <Link
                  className="cart bg-light p-0"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  {isAuthorized == true && user?.avatar == null ? <><img width={40} height={40} className="rounded-circle" src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="image" /></> : <RiAccountCircleFill size={40} className="text-theme" />}
                </Link>
                <ul class="dropdown-menu dropdown-menu-end shadow border-0 opacity-1" aria-labelledby="dropdownMenuButton1"
                  style={{
                    minWidth: "280px"
                  }}
                >
                  {isAuthorized == true && <li className="d-flex justify-content-start px-3">
                    <p className="mb-0">{user?.avatar == null ? <><img width={40} height={40} className="me-2 rounded-circle" src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="image" /></> : <RiAccountCircleFill size={40} className="me-2" />}{user?.first_name + " " + user?.last_name}</p>
                  </li>}
                  {isAuthorized == true && <hr />}
                  {isAuthorized == true && <li className="d-flex justify-content-start px-3">
                    <Link to={"/account/profile"} className="profile-link">
                      <p>{<CgProfile size={20} className="me-2" />}  Profile</p>
                    </Link>
                  </li>}
                  {isAuthorized == true && <li className="d-flex justify-content-start px-3">
                    <Link className="profile-link"
                      to={"#"}
                    >
                      <p>{<RiLockPasswordFill size={20} className="me-2" />} Change Password</p>
                    </Link>
                  </li>}
                  {isAuthorized == true && <li className="d-flex justify-content-center px-3 pb-3">
                    <button onClick={handleSignOut} className="btn btn-primary w-100 sign-in-btn">Sign Out</button>
                  </li>}
                  {isAuthorized == false && <li className="d-flex justify-content-center px-3 py-3">
                    <Link className="w-100"
                      to={"/account/signin"}
                    >
                      <button className="btn btn-primary w-100 sign-in-btn">Sign In</button>
                    </Link>
                  </li>}
                  {isAuthorized == false && <li className="d-flex justify-content-center px-3 pb-3">
                    <Link
                      to={"/account/signup"}
                      className="text-underline signup-link"
                    >Create an account</Link>
                  </li>}
                </ul>
              </div>
            </div>
          </div>

          <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-4">
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

            <div className="d-none align-items-center d-lg-flex me-2">
              <div className="position-relative nav-item me-2">
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
            <div className="d-none align-items-center d-lg-flex me-4">
              <div className="position-relative nav-item me-2 dropdown">
                <Link
                  className="cart bg-light p-0"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  {isAuthorized == true && user?.avatar == null ? <><img width={40} height={40} className="rounded-circle" src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="image" /></> : <RiAccountCircleFill size={40} className="text-theme" />}
                </Link>
                <ul class="dropdown-menu dropdown-menu-end shadow border-0 opacity-1" aria-labelledby="dropdownMenuButton1"
                  style={{
                    minWidth: "280px"
                  }}
                >
                  {isAuthorized == true && <li className="d-flex justify-content-start px-3">
                    <p className="mb-0">{user?.avatar == null ? <><img width={40} height={40} className="me-2 rounded-circle" src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="image" /></> : <RiAccountCircleFill size={40} className="me-2" />}{user?.first_name + " " + user?.last_name}</p>
                  </li>}
                  {isAuthorized == true && <hr />}
                  {isAuthorized == true && <li className="d-flex justify-content-start px-3">
                    <Link to={"/account/profile"} className="profile-link">
                      <p>{<CgProfile size={20} className="me-2" />}  Profile</p>
                    </Link>
                  </li>}
                  {isAuthorized == true && <li className="d-flex justify-content-start px-3">
                    <Link className="profile-link">
                      <p>{<RiLockPasswordFill size={20} className="me-2" />} Change Password</p>
                    </Link>
                  </li>}
                  {isAuthorized == true && <li className="d-flex justify-content-center px-3 pb-3">
                    <Link className="w-100"
                      to={"#"}
                    >
                      <button onClick={handleSignOut} className="btn btn-primary w-100 sign-in-btn">Sign Out</button>
                    </Link>
                  </li>}
                  {isAuthorized == false && <li className="d-flex justify-content-center px-3 py-3">
                    <Link className="w-100"
                      to={"/account/signin"}
                    >
                      <button className="btn btn-primary w-100 sign-in-btn">Sign In</button>
                    </Link>
                  </li>}
                  {isAuthorized == false && <li className="d-flex justify-content-center px-3 pb-3">
                    <Link
                      to={"/account/signup"}
                      className="text-underline signup-link"
                    >Create an account</Link>
                  </li>}
                </ul>
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
