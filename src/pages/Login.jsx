import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <>
      <Meta title="login" />
      <BreadCrumb title="login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <CustomInput  
                    name="email"
                    placeholder="email"
                    type="email"
                    className="form-control"
                  />
                </div>
                <div>
                  <CustomInput  
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
