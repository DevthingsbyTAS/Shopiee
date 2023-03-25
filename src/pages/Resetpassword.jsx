import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Reset password" />
      <BreadCrumb title="Reset password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <p className="text-center mt-2 mb-3">
                We will sen you an email to reset password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <CustomInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div>
                  <CustomInput
                    name="password"
                    placeholder="Confirm Password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Change Password
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

export default Resetpassword;
