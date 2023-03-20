import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
const Singleblog = () => {
  return (
    <>
      <Meta title="Single Blog" />
      <BreadCrumb title="Single Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Got back to blogs
                </Link>
                <h3 className="title">A Beautiful Sunday Morning</h3>
                <img src="images/blog-1.jpg" alt="blog1" />
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  esse, eaque, nihil voluptas recusandae dolores labore,
                  deserunt iste reprehenderit corporis porro. Repellat cum quo
                  veniam voluptates laborum, veritatis porro numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
