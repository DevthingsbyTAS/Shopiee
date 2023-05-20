import React from "react";
import { Link, useLocation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blogImg from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blog/blogSlice";
// import { getABlog } from "../features/blog/blogSlice";
const Singleblog = () => {
  const disptach = useDispatch();
  const { singleBlog } = useSelector((state) => state.blog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  React.useEffect(() => {
    getBlogFromDB();
  }, []);

  const getBlogFromDB = () => {
    disptach(getABlog(getBlogId));
  };
  const removeWishlistFromDB = (item) => {
    // disptach(AddtoWishList(item?._id));
    setTimeout(() => {
      getBlogFromDB();
    }, 800);
  };
  return (
    <>
      <Meta title={singleBlog?.title ?? "av"} />
      <BreadCrumb title="Single Blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link
                to="/singleBlog"
                className="d-flex align-items-center gap-10"
              >
                <HiOutlineArrowLeft className="fs-4" /> Got back to blogs
              </Link>
              <h3 className="title">{singleBlog?.title ?? "dummy title"}</h3>
              <img
                className="img-fluid my-4"
                src={singleBlog?.images?.[0]?.url}
                alt="blog1"
              />
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: singleBlog?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleblog;
