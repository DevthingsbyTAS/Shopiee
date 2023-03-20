import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <>
      <Meta title="login" />
      <BreadCrumb title="login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      name="email"
                      placeholder="email"
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
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
        </div>
      </div>
    </>
  );
};

export default Login;
