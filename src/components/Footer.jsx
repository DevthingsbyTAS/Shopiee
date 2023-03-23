import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import newsletterimg from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletterimg} alt="newlettwe" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address.."
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Office Suite 620 <br /> Karachi, Sindh
                  <br />
                  Pin: 75550
                </address>
                <a
                  href="tel: +92 3052504520"
                  className="mt-0 d-block mb-1 text-white"
                >
                  +92 3052504520
                </a>
                <a
                  href="mailto:tulluahsid@gmail.com"
                  className="mt-0 d-block mb-4 text-white"
                >
                  tulluahsid@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a href="http://">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="http://">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="http://">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a href="http://">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacyPolicy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refundPolicy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shippingPolicy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/termsAndConditions" className="text-white py-2 mb-1">
                  Terms & conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">
                &copy; {new Date().getFullYear()}: Developer things by TAS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
