import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import "../../css/profile.css";
import "../../css/signin.css";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormFileInput from "../../helpers/renderFormFileInput";
import {
  required,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
  email,
} from "../../helpers/validation";
import { BsPerson, BsPhone, BsEnvelope, BsGeoAlt, BsCalendarEvent, BsPersonLinesFill } from "react-icons/bs"; // Importing Bootstrap Icons

const ProfileForm = (props) => {
  const {
    handleSubmit,
    submitting,
    onSubmit,
    submitFailed,
    onImageChange,
    imagePreview,
  } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-theme">
        <h6 className="card-header theme-1 text-light">
          <BsPersonLinesFill className="me-2" /> 
          Profile Detail
        </h6>
        <div className="card-image">
          <img
            src={imagePreview ? imagePreview : "../../images/NO_IMG.png"}
            alt=""
            className="cards-image"
          />
        </div>
        <div className="card-body">
          <Field
            name="formFile"
            component={renderFormFileInput}
            onImageChange={onImageChange}
            validate={[required]}
            tips="You don't allow uploading a photo more than 5MB"
          />
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Field
              name="name"
              type="text"
              component={renderFormGroupField}
              placeholder="Your name.."
              icon={BsPerson} 
              validate={[required, name]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="mobileNo"
              type="number"
              component={renderFormGroupField}
              placeholder="Mobile no without country code"
              icon={BsPhone} 
              validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
              required={true}
              max="999999999999999"
              min="9999"
            />
          </li>
          <li className="list-group-item">
            <Field
              name="email"
              type="email"
              component={renderFormGroupField}
              placeholder="Your email"
              icon={BsEnvelope} 
              validate={[required, email]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="location"
              type="text"
              component={renderFormGroupField}
              placeholder="Your location"
              icon={BsGeoAlt} 
              validate={[required]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="dob"
              type="date"
              component={renderFormGroupField}
              placeholder="Your birthdate"
              icon={BsCalendarEvent} 
              validate={[required]}
              required={true}
            />
          </li>
        </ul>
        <div className="card-body">
          <button
            type="submit"
            className="btn theme-1 text-light d-flex"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "profile",
  })
)(ProfileForm);
