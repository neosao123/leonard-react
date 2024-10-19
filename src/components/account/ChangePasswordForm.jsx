import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import "../../css/profile.css";
import "../../css/signin.css";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import { required, maxLength20, minLength8 } from "../../helpers/validation";
import { BsKey } from "react-icons/bs"; // Importing Bootstrap icon from react-icons
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";

const ChangePasswordForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <div className="card">
      <h6 className="card-header theme-1 text-white">
        <BsKey className="me-2" /> {/* Using React icon for the key */}
        Change Password
      </h6>
      <div className="card-body">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
          noValidate
        >
          <Field
            name="currentPassword"
            type="password"
            label="Current Password"
            component={renderFormGroupField}
            placeholder="******"
            icon={IconShieldLock}
            validate={[required, maxLength20, minLength8]}
            required={true}
            maxLength="20"
            minLength="8"
            className="mb-3"
          />
          <Field
            name="password"
            type="password"
            label="New Password"
            component={renderFormGroupField}
            placeholder="******"
            icon={IconShieldLock}
            validate={[required, maxLength20, minLength8]}
            required={true}
            maxLength="20"
            minLength="8"
            className="mb-3"
          />
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm New password"
            component={renderFormGroupField}
            placeholder="******"
            icon={IconShieldLock}
            validate={[required, maxLength20, minLength8]}
            required={true}
            maxLength="20"
            minLength="8"
            className="mb-3"
          />
          <button
            type="submit"
            className="btn theme-1 btn-1 text-light d-flex"
            disabled={submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default compose(
  reduxForm({
    form: "changepassword",
  })
)(ChangePasswordForm);
