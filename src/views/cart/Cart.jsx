import { lazy } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaHeart, FaPlus, FaMinus } from "react-icons/fa"; // Importing icons
import "../../css/navbar.css";
import "../../css/cart.css";
import "../../css/signin.css";
import "../../css/button2.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useCartStore from "../../zustand/useCardstore";

const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

const CartView = () => {
  const onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };

  const cart = useCartStore((state) => state.cart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="cart-section text-white d-flex justify-content-center align-items-center ">
        {/* <h1 className="display-6">Shopping Cart</h1> */}
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="text-muted p-2">
                    <tr
                      className="small text-uppercase table-header p-2"
                      style={{ backgroundColor: "#3152b4" }}
                    >
                      <th
                        scope="col"
                        style={{ backgroundColor: "#3152b4", color: "white" }}
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        width={120}
                        style={{ backgroundColor: "#3152b4", color: "white" }}
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        width={150}
                        style={{ backgroundColor: "#3152b4", color: "white" }}
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        style={{ backgroundColor: "#3152b4", color: "white" }}
                        width={130}
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center">
                          Your cart is empty.
                        </td>
                      </tr>
                    ) : (
                      <>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td className="py-4">
                              <div className="row">
                                <div className="col-3 d-none d-md-block">
                                  <img
                                    src="../../images/products/tshirt_red_480x400.webp"
                                    width="80"
                                    alt="..."
                                  />
                                </div>
                                <div className="col">
                                  <Link
                                    to="/product/detail"
                                    className="text-decoration-none"
                                  >
                                    {item.name}
                                  </Link>
                                  <p className="small text-muted">
                                    Size: XL, Color: blue, Brand: XYZ
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="p-3">
                              <div className="input-group input-group-sm mw-140">
                                <button
                                  className="btn theme btn-1 text-white"
                                  type="button"
                                  onClick={() => decrementQuantity(item.id)}
                                >
                                  <FaMinus /> {/* Using React Icon */}
                                </button>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  className="btn theme btn-1 text-white"
                                  type="button"
                                  onClick={() => incrementQuantity(item.id)}
                                >
                                  <FaPlus /> {/* Using React Icon */}
                                </button>
                              </div>
                            </td>

                            <td className="p-3">
                              <var className="price">
                                ${(item.price * item.quantity).toFixed(2)}
                              </var>
                              <small className="d-block text-muted">
                                ${item.price.toFixed(2)} each
                              </small>
                            </td>

                            <td className="p-2">
                              {/* <button className="btn btn-sm btn-outline-secondary me-2">
                <FaHeart /> 
              </button> */}
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <FaTrash /> {/* Using React Icon */}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="card-footers mt-3">
                <div className="button-head w-100 d-flex justify-content-start">
                  <Link to="/" className="cart-btn">
                    <div className="btn-icon">
                      <FiChevronRight size={24} />{" "}
                      {/* Use React Icon for the right chevron */}
                    </div>
                    <span className="name-descripeion">Continue shopping</span>
                  </Link>
                </div>
                <div className="button-head w-100 d-flex justify-content-end">
                  <Link to="/checkout" className="cart-btn">
                    <div className="btn-icon">
                      <FiChevronRight size={24} />{" "}
                      {/* Use React Icon for the right chevron */}
                    </div>
                    <span className="name-descripeion">Make Purchase</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-flex  justify-content-end gap-1 mb-3">
            <div className="card col-md-4">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-end">${totalPrice.toFixed(2)}</dd>

                  <dt className="col-6 text-success">
                    Coupon:{" "}
                    <span className="small text-muted">EXAMPLECODE</span>{" "}
                  </dt>
                  <dd className="col-6 text-success text-end">-$68</dd>
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end h5">
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </dd>
                </dl>
                <hr />
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
