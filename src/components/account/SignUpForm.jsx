import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import "../../css/signin.css";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  email,
  name,
} from "../../helpers/validation";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="row mb-3">
        <div className="col-md-6">
          <Field
            name="firstName"
            type="text"
            label="First Name"
            component={renderFormField}
            placeholder="First Name"
            validate={[required, name]}
            required={true}
            icon={FaUser}
          />
        </div>
        <div className="col-md-6">
          <Field
            name="lastName"
            type="text"
            label="Last Name"
            component={renderFormField}
            placeholder="Last Name"
            validate={[required, name]}
            required={true}
            icon={FaUser}
          />
        </div>
      </div>
      <Field
        name="email"
        type="email"
        label="Email"
        component={renderFormGroupField}
        placeholder="Enter your email"
        icon={FaEnvelope}
        validate={[required, email]}
        required={true}
        className="mb-3"
      />
      <Field
        name="password"
        type="password"
        label="password"
        component={renderFormGroupField}
        placeholder="******"
        icon={FaLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn theme-1 mb-3 text-light"
          disabled={submitting}
        >
          Create
        </button>
      </div>
      <Link className="float-start " to="/account/signin" title="Sign In">
        Sign In
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
    form: "signup",
  })
)(SignUpForm);
