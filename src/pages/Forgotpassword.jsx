import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Forgotpassword = () => {
  return (
    <>
      <Meta title="Forgot password" />
      <BreadCrumb title="Forgot password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mt-2 mb-3">
                  We will sen you an email to reset password
                </p>
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
                    <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
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

export default Forgotpassword;
