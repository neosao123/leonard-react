import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const RenderFormGroupField = (props) => {
  const {
    input,
    label,
    tips,
    required,
    meta: { touched, error, warning },
  } = props;
  const Icon = props.icon;

  // State to manage the visibility of the password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`form-group ${props.className}`}>
      {label && (
        <label
          className={`form-label ${required ? "required" : ""}`}
          htmlFor={input.name}
        >
          {label}
        </label>
      )}

      <div className="input-group">
        <span className="input-group-text">
          <Icon />
        </span>
        <input
          {...input}
          {...props}
          id={input.name}
          type={
            props.type === "password" && !isPasswordVisible
              ? "password"
              : "text"
          }
          className="form-control"
        />
        {props.type === "password" && (
          <span
            className="input-group-text"
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
        {touched &&
          ((error && <div className="invalid-feedback">{error}</div>) ||
            (warning && <span>{warning}</span>))}
      </div>
      {tips && <div className="form-text">{tips}</div>}
    </div>
  );
};

export default RenderFormGroupField;
