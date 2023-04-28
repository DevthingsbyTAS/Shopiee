import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import * as Yup from "yup";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSLice";

const Login = () => {
  let loginSchema = Yup.object({
    email: Yup.string().email().required("required"),
    password: Yup.string().required("required"),
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title="login" />
      <BreadCrumb title="login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div>
                  <CustomInput
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    error={formik.touched["email"]}
                    errorMessage={formik.errors["email"]}
                    value={formik.values.email}
                    name="email"
                    placeholder="email"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div>
                  <CustomInput
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    error={formik.touched["password"]}
                    errorMessage={formik.errors["password"]}
                    value={formik.values.password}
                    name="password"
                    placeholder="password"
                    type="password"
                    className="form-control mt-3"
                  />
                </div>
                <div>
                  <Link to="/forgotpassword">Forgot Password</Link>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button">Login</button>
                    <Link to="/signup" className="button signup">
                      Sign up
                    </Link>
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

export default Login;
