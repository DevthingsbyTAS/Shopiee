import React from "react";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getblogs } from "../features/blog/blogSlice";
import moment from "moment/moment";

const Blog = () => {
  const disptach = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  React.useEffect(() => {
    getWishlistFromDB();
  }, []);

  const getWishlistFromDB = () => {
    disptach(getblogs());
  };
  const removeWishlistFromDB = (item) => {
    // disptach(AddtoWishList(item?._id));
    setTimeout(() => {
      getWishlistFromDB();
    }, 800);
  };
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <div className="filter-title">Find By Categories</div>
              <div>
                <ul className="ps-0">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogs?.map((item, index) => (
                <div className="col-6">
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    image={item?.images?.[0]?.url}
                    date={moment(item?.createdAt)?.format("LLLL")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
