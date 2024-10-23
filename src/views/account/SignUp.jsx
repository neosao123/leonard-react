import { lazy } from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.jpeg"
import "../../css/navbar.css"
import "../../css/cart.css"

const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

const SignUpView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="container vertical-margin">
      <div className="row ">
      <div className="signin-form ">
        <div className="col-md-6 p-5 cat-bg-2 shadow rounded">
          <h4 className="text-center">Sign Up</h4>
          <SingUpForm onSubmit={onSubmit} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
