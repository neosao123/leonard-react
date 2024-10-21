import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import "../../css/signin.css";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  email,
} from "../../helpers/validation";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const SignInForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <Field
        name="email"
        type="email"
        label="Email"
        component={renderFormGroupField}
        placeholder="Enter your email"
        icon={FaEnvelope}
        validate={[required, email]}
        required={true}
        className="mb-4"
      />
      <Field
        name="password"
        type="password"
        label=" password"
        component={renderFormGroupField}
        placeholder="******"
        icon={FaLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-4"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn theme-1 mb-4 text-light"
          disabled={submitting}
        >
          Log In
        </button>
      </div>
      <Link className="float-start" to="/account/signup" title="Sign Up">
        Create your account
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signin",
  })
)(SignInForm);
