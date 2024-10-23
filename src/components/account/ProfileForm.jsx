

import { Field, reduxForm } from "redux-form";
import { BsPersonLinesFill } from "react-icons/bs";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FaUser } from "react-icons/fa";
import renderFormField from "../../helpers/renderFormField";
import createUser from "../../zustand/createUser";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";



const ProfileForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setPreview] = useState(null);
  const [file, setFile] = useState(null)
  const { user } = createUser((state) => state)

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

  const handleChange = (e) => {
    console.log("target:", e.target.files[0])
  }

  return (
    <>
      <form
        noValidate
      >
        <div className="row">
          <div className="col-lg-4 h-100">
            <div className="p-5 d-flex flex-column justify-content-center align-items-center shadow">
              <div className="position-relative" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <img width={"225px"} height={"225px"} style={{ objectFit: "cover" }} className="rounded-circle" src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="Profile Image" />
                <div className={`rounded-circle d-flex justify-content-center align-items-center avatar-div ${isHovered ? "avatar-flex" : ""}`}>
                  <label htmlFor="avatar" className="avatar-label"><FaRegEdit size={35} /></label>
                  <input class="form-control d-none" onChange={handleChange} type="file" id="avatar" />
                </div>
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
                    readOnly
                    value={user?.first_name}
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
                    readOnly
                    value={user?.last_name}
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
                    value={user?.email}
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
                    value={user?.phone}
                    className="w-100 form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <button className="btn btn-primary px-4 py-2" style={{ minWidth: "150px" }}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {showPreview && file && <div className="fixed-div border border-danger d-flex justify-content-center align-items-center">
        <div className="position-absolute bg-white z-3 shadow-2xl rounded-2">
          <div className="d-flex flex-column gap-5 position-relative px-5 py-5">
            <img width={"250px"} height={"250px"} className="rounded-circle" src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="Image" />
            <button className="btn btn-primary">Submit</button>
            <span className="close-icon"><IoClose size={30} /></span>
          </div>
        </div>
      </div>}
    </>
  )
}

export default ProfileForm;

