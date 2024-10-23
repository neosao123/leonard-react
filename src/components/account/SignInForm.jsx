import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useMutation
} from '@tanstack/react-query'
import "../../css/signin.css";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import * as Yup from "yup";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import * as api from "../../services/index"
import toast from "react-hot-toast";
import createUser from "../../zustand/createUser";

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});

const SignInForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  const login = createUser((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate } = useMutation({
    mutationFn: (payload) => api.signIn(payload),
    onSuccess: (data) => {
      toast.success("Logged in successfully.")
      login(data?.data)
      navigate("/")
    },
    onError: (error) => {
      toast.error("Something went wrong!")
    }
  });


  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    validateOnChange: true,
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
      <Field
        name="email"
        type="email"
        label="Email"
        component={renderFormGroupField}
        placeholder="Enter your email"
        icon={FaEnvelope}
        value={formik.values.email}
        required={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <span className="error text-danger error-msg mt-0">{formik.errors.email}</span>
      ) : null}
      <Field
        name="password"
        type="password"
        label=" password"
        component={renderFormGroupField}
        placeholder="Password"
        icon={FaLock}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required={true}
        maxLength="20"
        minLength="8"
        className="mt-4"
      />
      {formik.touched.password && formik.errors.password ? (
        <span className="error text-danger error-msg">{formik.errors.password}</span>
      ) : null}
      <div className="d-grid mt-4">
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
