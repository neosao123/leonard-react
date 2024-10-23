import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link, useNavigate } from "react-router-dom";
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
import * as Yup from "yup";


import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../services/index"
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required.").min(3, "Minimum 3 characters required.").matches(/^[A-Za-z]+$/, "Invalid First Name."),
  last_name: Yup.string().required("Last Name is required.").min(3, "Minimum 3 characters required.").matches(/^[A-Za-z]+$/, "Invalid Last Name."),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
});

const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (payload) => api.signUp(payload),
    onSuccess: (data) => {
      if (data?.data?.status == 200) {
        toast.success("Account created successfully.")
        navigate("/account/signin")
      }
      else {
        toast.error("The email has already been taken.")
      }
    },
    onError: (error) => {
      toast.error(error.response.data.email[0])
    }
  })

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate(values)
    }
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="row mb-3 mt-4">
        <div className="col-md-6 mb-2">
          <Field
            name="first_name"
            type="text"
            label="First Name"
            component={renderFormField}
            placeholder="First Name"
            required={true}
            icon={FaUser}
            value={formik.values.first_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <span className="error text-danger error-msg mt-0">{formik.errors.first_name}</span>
          ) : null}
        </div>
        <div className="col-md-6">
          <Field
            name="last_name"
            type="text"
            label="Last Name"
            component={renderFormField}
            placeholder="Last Name"
            required={true}
            icon={FaUser}
            value={formik.values.last_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <span className="error text-danger error-msg mt-0">{formik.errors.last_name}</span>
          ) : null}
        </div>
      </div>
      <Field
        name="email"
        type="email"
        label="Email"
        component={renderFormGroupField}
        placeholder="Enter your email"
        icon={FaEnvelope}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        required={true}
        className="mt-3"
      />
      {formik.touched.email && formik.errors.email ? (
        <span className="error text-danger error-msg mt-0">{formik.errors.email}</span>
      ) : null}
      <Field
        name="password"
        type="password"
        label="password"
        component={renderFormGroupField}
        placeholder="Password"
        icon={FaLock}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        required={true}
        maxLength="20"
        minLength="8"
        className="mt-3"
      />
      {formik.touched.password && formik.errors.password ? (
        <span className="error text-danger error-msg mt-0">{formik.errors.password}</span>
      ) : null}
      <div className="d-grid">
        <button
          type="submit"
          className="btn theme-1 mb-3 mt-4 text-light"
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
