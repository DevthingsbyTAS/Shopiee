import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
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
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        name={"Name"}
                        placeholder={"Name"}
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name={"Email"}
                        placeholder={"Email"}
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name={"Mobile"}
                        placeholder={"Mobile"}
                        className="form-control"
                      />
                    </div>
                    <div>
                      <textarea
                        cols={"3"}
                        rows={"10"}
                        className="form-control"
                        name={"commnets"}
                        placeholder={"commnets"}
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
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
        </div>
      </div>
    </>
  );
};

export default Contact;
