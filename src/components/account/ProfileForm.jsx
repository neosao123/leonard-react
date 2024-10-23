

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
import { useMutation } from "@tanstack/react-query";
import * as api from "../../services/index";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required.").min(3, "Minimum 3 characters required.").matches(/^[A-Za-z]+$/, "Invalid First Name."),
  last_name: Yup.string().required("Last Name is required.").min(3, "Minimum 3 characters required.").matches(/^[A-Za-z]+$/, "Invalid Last Name."),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    // .matches(/^(?:\+?60|0)1[0-46-9][0-9]{7,8}$/, 'Invalid phone Number.')
    .matches(/^[6-9]\d{9}$/, 'Invalid phone Number.')
});


const ProfileForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [file, setFile] = useState(null)
  const { user, addUser } = createUser((state) => state)
  const [edit, setEdit] = useState(false)
  const { mutate, isLoading } = useMutation({
    mutationFn: (payload) => api.UpdateAvatar(payload),
    onSuccess: (data) => {
      addUser(data?.data?.data);
      toast.success(data?.data?.message);
      setFile(null)
    },
    onError: (error) => {
      console.log("error:", error)
    }
  })

  const { mutate: updateMutate, isLoading: updateLoading } = useMutation({
    mutationFn: (payload) => api.UpdateProfile(payload),
    onSuccess: (data) => {
      addUser(data?.data?.data)
      toast.success(data?.data?.message)
      formik.resetForm();
      setEdit(false)
    },
    onError: (error) => {
      console.log("error:", error)
    }
  })

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleClearImage = () => {
    setFile(null)
  }

  const handleAvatarSubmit = () => {
    const formdata = new FormData();
    formdata.append("avatar", file);
    mutate(formdata);
  }

  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone: user?.phone
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      updateMutate(values)
    }
  })

  return (
    <>
      <form
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <div className="row my-4">
          <div className="col-lg-4 h-100">
            <div className="p-5 d-flex flex-column justify-content-center align-items-center shadow">
              <div className="position-relative" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                <img width={"225px"} height={"225px"} style={{ objectFit: "cover" }} className="rounded-circle" src={user?.avatar ? `${process.env.REACT_APP_PHOTO_URL}${user?.avatar}` : ""} alt="Profile Image" />
                <div className={`rounded-circle d-flex justify-content-center align-items-center avatar-div ${isHovered ? "avatar-flex" : ""}`}>
                  <label htmlFor="avatar" className="avatar-label"><FaRegEdit size={35} /></label>
                  <input class="form-control d-none" onChange={handleChange} type="file" id="avatar" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 h-100 mt-4 mt-lg-0">
            <div className="p-5 shadow">
              <div className="row mb-3">
                <div className="col-lg-6">
                  <label for="first_name" class="col-form-label">First Name <span class="text-danger">*</span></label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    label="First Name"
                    placeholder="First Name"
                    className="w-100 form-control"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    readOnly={!edit}
                    value={formik.values.first_name}
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <span className="error text-danger error-msg mt-0">{formik.errors.first_name}</span>
                  ) : null}
                </div>
                <div className="col-lg-6">
                  <label for="last_name" class="col-form-label">Last Name <span class="text-danger">*</span></label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    className="w-100 form-control"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    readOnly={!edit}
                    value={formik.values.last_name}
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <span className="error text-danger error-msg mt-0">{formik.errors.last_name}</span>
                  ) : null}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-6">
                  <label for="email" class="col-form-label">Email <span class="text-danger">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    label="Email"
                    placeholder="Email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    readOnly={!edit}
                    className="w-100 form-control"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="error text-danger error-msg mt-0">{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="col-lg-6">
                  <label for="mobile" class="col-form-label">Mobile No. <span class="text-danger">*</span></label>
                  <input
                    id="mobile"
                    name="phone"
                    type="phone"
                    label="Mobile No."
                    placeholder="Mobile No."
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    readOnly={!edit}
                    className="w-100 form-control"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <span className="error text-danger error-msg mt-0">{formik.errors.phone}</span>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-12">
                  {!edit && <button type="button" className="btn btn-primary px-3 py-2" onClick={() => setEdit(true)} disabled={isLoading} style={{ minWidth: "140px" }}>Edit</button>}
                  {edit && <button type="submit" className="btn btn-primary px-3 py-2 me-4" disabled={isLoading} style={{ minWidth: "140px" }}>{isLoading ? "Submitting.." : "Submit"}</button>}
                  {edit && <button type="button" className="btn px-3 py-2" onClick={() => { formik.resetForm(); setEdit(false) }} disabled={isLoading} style={{ minWidth: "140px", backgroundColor: "#000000" }}>Cancel</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {file && <div className="fixed-div border border-danger d-flex justify-content-center align-items-center">
        <div className="position-absolute bg-white z-3 shadow-2xl rounded-2">
          <div className="d-flex flex-column gap-5 position-relative px-5 py-5">
            <img width={"250px"} height={"250px"} className="rounded-circle" src={URL.createObjectURL(file)} alt="Image" />
            <button className="btn btn-primary" disabled={updateLoading} onClick={handleAvatarSubmit}>{updateLoading ? "Submitting" : "Submit"}</button>
            <span className="close-icon" onClick={() => handleClearImage()}><IoClose size={30} /></span>
          </div>
        </div>
      </div>}
    </>
  )
}

export default ProfileForm;

