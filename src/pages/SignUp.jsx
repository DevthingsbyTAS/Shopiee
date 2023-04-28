import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSLice";

const Signup = () => {
  let userSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().nullable().required("required"),
    mobile: Yup.string().required("required"),
    password: Yup.string().required("required"),
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      // console.log("vlaeus", values);
    },
  });

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
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                    name="text"
                    error={formik.touched["firstName"]}
                    errorMessage={formik.errors["firstName"]}
                    value={formik.values.firstName}
                    placeholder="First Name"
                    type="name"
                  />
                </div>
                <div>
                  <CustomInput
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    name="text"
                    error={formik.touched["lastName"]}
                    errorMessage={formik.errors["lastName"]}
                    value={formik.values.lastName}
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
                    <button className="button border-0" type="submit">
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
