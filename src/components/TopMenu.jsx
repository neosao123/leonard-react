import { Link, NavLink } from "react-router-dom";
import logo from "../asset/logo.jpeg";
import "../App.css";
import "../css/navbar.css";
import { useState } from "react";
import Sidebar from "../views/product/Sidebar";
import useCartStore from "../zustand/useCardstore";
import { RiUser3Line, RiShoppingCart2Line, RiLockPasswordFill, RiMenuFill } from "react-icons/ri";
import createUser from "../zustand/createUser";
import { CgProfile } from "react-icons/cg";
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
      <nav className="navbar background shadow-lg text-light navbar-expand-lg py-2 sticky-top shadow-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <Link className="navbar-brand" to="/">
              <img alt="logo" className="top-logo" src={logo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
              aria-expanded={isDropdownOpen}
            >
              <RiMenuFill size={20} />
            </button>
          </div>
          <div className="d-flex align-items-center d-lg-none">
            <div className="position-relative nav-item me-2">
              <Link
                onClick={handleSidebarToggle}
                className="cart bg-light"
              >
                <RiShoppingCart2Line size={20} className="text-theme" />
                {cart?.items?.length > 0 && (
                  <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                    {cart?.items?.length}
                  </div>
                )}
              </Link>
            </div>
            <div className="d-flex align-items-center d-lg-none">
              <div className="position-relative nav-item me-2 dropdown">
                <Link
                  className="cart bg-light p-0"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  {
                    isAuthorized === true && user?.avatar != null ?
                      (
                        <img width={40} height={40} style={{ objectFit: "cover" }} className="rounded-circle" src={`${process.env.REACT_APP_PHOTO_URL}${user?.avatar}`} alt="User Icon" />
                      )
                      : (
                        <RiUser3Line size={20} className="text-theme" />
                      )
                  }
                </Link>
                {
                  isAuthorized ? (
                    <ul class="dropdown-menu dropdown-menu-end shadow border-0 opacity-1 mt-3 p-3" aria-labelledby="dropdownMenuButton1"
                      style={{
                        minWidth: "260px"
                      }}>
                      <li>
                        <p>
                          {
                            user?.avatar !== null ?
                              (
                                <img width={20} height={20} className="me-2 rounded-circle" src={`${process.env.REACT_APP_PHOTO_URL}${user?.avatar}`} alt="User Icon" />
                              )
                              : (<RiUser3Line size={20} className="me-2" />)
                          }
                          {user?.first_name + " " + user?.last_name}
                        </p>
                      </li>
                      <li>
                        <Link to={"/profile"} className="profile-link">
                          <p>{<CgProfile size={20} className="me-2" />} My Account</p>
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link className="w-100"
                          to={"#"}
                        >
                          <button onClick={handleSignOut} className="btn btn-primary w-100 sign-in-btn">Sign Out</button>
                        </Link>
                      </li>
                    </ul>
                  ) :
                    (
                      <ul class="dropdown-menu dropdown-menu-end shadow border-0 opacity-1 mt-2" aria-labelledby="dropdownMenuButton1"
                        style={{
                          minWidth: "260px"
                        }}>
                        <li className="d-flex justify-content-center p-3">
                          <Link className="w-100"
                            to={"/account/signin"}
                          >
                            <button className="btn btn-primary w-100 sign-in-btn">Sign In</button>
                          </Link>
                        </li>
                      </ul>
                    )
                }
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
                  <RiShoppingCart2Line size={20} className="text-theme" />
                  {cart?.items?.length > 0 && (
                    <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                      {cart?.items?.length}
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="d-none align-items-center d-lg-flex">
              <div className="position-relative nav-item me-2 dropdown">
                <Link
                  className="cart bg-light p-0"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  {
                    isAuthorized === true && user?.avatar != null ?
                      (
                        <img width={20} height={20} style={{ objectFit: "cover" }} className="rounded-circle" src={`${process.env.REACT_APP_PHOTO_URL}${user?.avatar}`} alt="User Icon" />
                      )
                      : (
                        <RiUser3Line size={20} className="text-theme" />
                      )
                  }
                </Link>
                {
                  isAuthorized ? (
                    <ul class="dropdown-menu dropdown-menu-end shadow border-0 opacity-1 mt-3 p-3" aria-labelledby="dropdownMenuButton1"
                      style={{
                        minWidth: "260px"
                      }}>
                      <li>
                        <p>
                          {
                            user?.avatar !== null ?
                              (
                                <img width={40} height={40} className="me-2 rounded-circle" src={`${process.env.REACT_APP_PHOTO_URL}${user?.avatar}`} alt="User Icon" />
                              )
                              : (<RiUser3Line size={20} className="me-2" />)
                          }
                          {user?.first_name + " " + user?.last_name}
                        </p>
                      </li>
                      <li>
                        <Link to={"/profile"} className="profile-link">
                          <p>{<CgProfile size={20} className="me-2" />}My Account</p>
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link className="w-100"
                          to={"#"}
                        >
                          <button onClick={handleSignOut} className="btn btn-primary w-100 sign-in-btn">Sign Out</button>
                        </Link>
                      </li>
                    </ul>
                  ) :
                    (
                      <ul class="dropdown-menu dropdown-menu-end shadow border-0 opacity-1 mt-2" aria-labelledby="dropdownMenuButton1"
                        style={{
                          minWidth: "260px"
                        }}>
                        <li className="d-flex justify-content-center p-3">
                          <Link className="w-100"
                            to={"/account/signin"}
                          >
                            <button className="btn btn-primary w-100 sign-in-btn">Sign In</button>
                          </Link>
                        </li>
                      </ul>
                    )
                }
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
