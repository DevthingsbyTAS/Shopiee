import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSLice";

const Signup = () => {
  const { isLoading } = useSelector((state) => state.auth);
  let registerSchema = Yup.object({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required("required"),
    mobile: Yup.string().required("required"),
    password: Yup.string().required("required"),
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      // console.log("vlaeus", values);
    },
  });
  // console.log("isLoading", isLoading);

  return (
    <>
      <Meta title="Sign up" />
      <BreadCrumb title="Sign up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will sen you an email to reset password
              </p>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div>
                  <CustomInput
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                    name="text"
                    error={formik.touched["firstname"]}
                    errorMessage={formik.errors["firstname"]}
                    value={formik.values.firstname}
                    placeholder="First Name"
                    type="name"
                  />
                </div>
                <div>
                  <CustomInput
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                    name="text"
                    error={formik.touched["lastname"]}
                    errorMessage={formik.errors["lastname"]}
                    value={formik.values.lastname}
                    placeholder="Last Name"
                    type="name"
                  />
                </div>
                <div>
                  <CustomInput
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    name="email"
                    placeholder="Email"
                    type="email"
                    error={formik.touched["email"]}
                    errorMessage={formik.errors["email"]}
                    value={formik.values.email}
                  />
                </div>

                <div>
                  <CustomInput
                    error={formik.touched["mobile"]}
                    errorMessage={formik.errors["mobile"]}
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                    name="number"
                    placeholder="Mobile Number"
                    type="number"
                  />
                </div>
                <div>
                  <CustomInput
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    name="password"
                    error={formik.touched["password"]}
                    errorMessage={formik.errors["password"]}
                    value={formik.values.password}
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0"
                      type="submit"
                      disabled={isLoading}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
