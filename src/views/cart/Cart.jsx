import { lazy } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaHeart, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa"; // Importing icons
import "../../css/navbar.css";
import "../../css/cart.css";
import "../../css/signin.css";
import "../../css/button2.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useCartStore from "../../zustand/useCardstore";
import { useState } from "react";
import { CartRow } from "./CartRow";

const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

const CartView = () => {
  const [numberOfClick, setNumberofClick] = useState(0);

  const onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };

  const cart = useCartStore((state) => state.cart);
  const { cartuid, updateCardUID, addToCart } = useCartStore((state) => state)
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  // const clearCart =
  const totalPrice = cart?.items?.reduce(
    (total, item) => total + item?.product?.product_price * item.quantity,
    0
  );

  return (
    <div>
      <div className="cart-section text-white d-flex justify-content-center align-items-center ">
        <h5 className="display-6">Shopping Cart</h5>
      </div>
      <div className="container ">
        {cart?.items?.length > 0 ? <div className="row">
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
                    <>
                      {cart?.items.length > 0 && cart?.items?.map((item) => {
                        return <CartRow key={item?._id} Item={item} />
                      })}
                    </>
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
                  <dd className="col-6 text-end">RM {totalPrice.toFixed(2)}</dd>

                  <dt className="col-6 text-success">
                    Coupon:{" "}
                    <span className="small text-muted">EXAMPLECODE</span>{" "}
                  </dt>
                  <dd className="col-6 text-success text-end">- RM 68</dd>
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end h5">
                    <strong>RM {totalPrice.toFixed(2)}</strong>
                  </dd>
                </dl>
                <hr />

              </div>
            </div>
          </div>
        </div> : <div className="mb-4 d-flex flex-column justify-content-center align-items-center">
          <FaShoppingCart size={100} />
          <h5 className="mt-4">Your Cart is Empty.</h5>
        </div>}
      </div>
    </div>
  );
};

export default CartView;
