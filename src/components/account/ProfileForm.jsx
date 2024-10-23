// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { compose } from "redux";
// import "../../css/profile.css";
// import "../../css/signin.css";
// import renderFormGroupField from "../../helpers/renderFormGroupField";
// import renderFormFileInput from "../../helpers/renderFormFileInput";
// import {
//   required,
//   maxLengthMobileNo,
//   minLengthMobileNo,
//   digit,
//   name,
//   email,
// } from "../../helpers/validation";
// import { BsPerson, BsPhone, BsEnvelope, BsGeoAlt, BsCalendarEvent, BsPersonLinesFill } from "react-icons/bs"; // Importing Bootstrap Icons


// const ProfileForm = (props) => {
//   const {
//     handleSubmit,
//     submitting,
//     onSubmit,
//     submitFailed,
//     onImageChange,
//     imagePreview,
//   } = props;
//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
//       noValidate
//     >
//       <div className="card border-theme mt-5">
//         <h6 className="card-header theme-1 text-light">
//           <BsPersonLinesFill className="me-2" />
//           Profile Detail
//         </h6>
//         <div className="row">
//           <div className="col-md-4">
//             <img
//               src={imagePreview ? imagePreview : "../../images/NO_IMG.png"}
//               alt=""
//               className="cards-image"
//             />
//           </div>
//           <div className="col-md-8"></div>
//         </div>
//         <div className="card-image">
//           <img
//             src={imagePreview ? imagePreview : "../../images/NO_IMG.png"}
//             alt=""
//             className="cards-image"
//           />
//         </div>
//         <div className="card-body">
//           <Field
//             name="formFile"
//             component={renderFormFileInput}
//             onImageChange={onImageChange}
//             validate={[required]}
//             tips="You don't allow uploading a photo more than 5MB"
//           />
//           <p className="card-text">
//             With supporting text below as a natural lead-in to additional
//             content.
//           </p>
//         </div>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">
//             <Field
//               name="name"
//               type="text"
//               component={renderFormGroupField}
//               placeholder="Your name.."
//               icon={BsPerson}
//               validate={[required, name]}
//               required={true}
//             />
//           </li>
//           <li className="list-group-item">
//             <Field
//               name="mobileNo"
//               type="number"
//               component={renderFormGroupField}
//               placeholder="Mobile no without country code"
//               icon={BsPhone}
//               validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
//               required={true}
//               max="999999999999999"
//               min="9999"
//             />
//           </li>
//           <li className="list-group-item">
//             <Field
//               name="email"
//               type="email"
//               component={renderFormGroupField}
//               placeholder="Your email"
//               icon={BsEnvelope}
//               validate={[required, email]}
//               required={true}
//             />
//           </li>
//           <li className="list-group-item">
//             <Field
//               name="location"
//               type="text"
//               component={renderFormGroupField}
//               placeholder="Your location"
//               icon={BsGeoAlt}
//               validate={[required]}
//               required={true}
//             />
//           </li>
//           <li className="list-group-item">
//             <Field
//               name="dob"
//               type="date"
//               component={renderFormGroupField}
//               placeholder="Your birthdate"
//               icon={BsCalendarEvent}
//               validate={[required]}
//               required={true}
//             />
//           </li>
//         </ul>
//         <div className="card-body">
//           <button
//             type="submit"
//             className="btn theme-1 text-light d-flex"
//             disabled={submitting}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default compose(
//   reduxForm({
//     form: "profile",
//   })
// )(ProfileForm);


import { Field, reduxForm } from "redux-form";
import { BsPersonLinesFill } from "react-icons/bs";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaUser } from "react-icons/fa";
import renderFormField from "../../helpers/renderFormField";


const ProfileForm = () => {

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: ""
    },
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => {

    }
  })

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      // className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-theme my-5">
        <h6 className="card-header theme-1 text-light py-4">
          <BsPersonLinesFill className="me-2" />
          Profile Detail
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-4 h-100">
          <div className="p-5 d-flex flex-column justify-content-center align-items-center shadow">
            <img width={"250px"} height={"250px"} className="rounded-circle" src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="Profile Image" />
            <div class="my-3">
              <label for="formFile" class="form-label">Upload your file</label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div className="col-12">
              <button className="btn btn-primary px-4 py-2 mt-2" style={{ minWidth: "150px" }}>Update</button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 h-100">
          <div className="p-5 shadow">
            <div className="row mb-3">
              <div className="col-lg-6">
                <label for="first_name" class="col-form-label">First Name</label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  className="w-100 form-control"
                />
              </div>
              <div className="col-lg-6">
                <label for="last_name" class="col-form-label">Last Name</label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  className="w-100 form-control"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-6">
                <label for="email" class="col-form-label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  label="Email"
                  placeholder="Email"
                  className="w-100 form-control"
                />
              </div>
              <div className="col-lg-6">
                <label for="mobile" class="col-form-label">Mobile No.</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="phone"
                  label="Mobile No."
                  placeholder="Mobile No."
                  className="w-100 form-control"
                />
              </div>
              <div className="col-lg-6">
                <label for="dateofbirth" class="col-form-label">Date of Birth</label>
                <input
                  id="dateofbirth"
                  name="dateofbirth"
                  type="date"
                  label="Date of Birth"
                  placeholder="Date of Birth"
                  className="w-100 form-control"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <label for="location" class="col-form-label">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  label="Location"
                  placeholder="Location"
                  className="w-100 form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <button className="btn btn-primary px-4 py-2" style={{ minWidth: "150px" }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProfileForm;

