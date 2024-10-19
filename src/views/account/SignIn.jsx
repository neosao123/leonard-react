import { lazy } from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.jpeg";
import "../../css/navbar.css";
import "../../css/cart.css"
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignInView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="container cart-section mb-3">
      <div className="row ">
            <div className="signin-form ">
          <div className="col-md-6 p-5 cat-bg-2">
            <h4 className="text-center">Sign In</h4>
            <SignInForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
