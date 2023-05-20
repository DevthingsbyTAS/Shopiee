import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import Container from "../components/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { postQuery } from "../features/contact/contactSlice";
const Contact = () => {
  const dispatch = useDispatch();
  let contactSchema = Yup.object({
    email: Yup.string().email().required("required"),
    name: Yup.string().required("required"),
    mobile: Yup.string().required("required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(postQuery(values));
    },
  });

  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5879326298177!2d67.19647831537625!3d24.843761752044287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3309ad6e888bb%3A0x852839849b937761!2sLandhi%201%2C%20Landhi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679056416588!5m2!1sen!2s"
              width="600p"
              height="450"
              style={{ border: "0" }}
              className="border-0 w-100"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <CustomInput
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      error={formik.touched["name"]}
                      errorMessage={formik.errors["name"]}
                      value={formik.values.name}
                      name="name"
                      placeholder="name"
                      type="name"
                      className="form-control"
                    />
                  </div>
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
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      error={formik.touched["mobile"]}
                      errorMessage={formik.errors["mobile"]}
                      value={formik.values.mobile}
                      name="mobile"
                      placeholder="mobile"
                      type="mobile"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <textarea
                      cols={"3"}
                      rows={"10"}
                      className="form-control"
                      name={"comment"}
                      placeholder={"comment"}
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    />
                    <div className="errors">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Office Suite 620 Karachi, Sindh Pin: 75550
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel: +92 3052504520" className="mt-0 d-block ">
                        +92 3052504520
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a
                        href="mailto:tulluahsid@gmail.com"
                        className="mt-0 d-block "
                      >
                        tulluahsid@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
