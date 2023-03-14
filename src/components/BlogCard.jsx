import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="car-image">
          <img
            src="images/blog-1.jpg"
            className="img-fluid"
            alt="blog"
            srcset=""
          />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2022</p>
          <h5 className="title">A Beautifull sunday morning</h5>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            dicta ex eligendi quo voluptas omnis iste, itaque fugit eveniet
            ipsum vel similique tempore hic soluta eaque repudiandae accusantium
            voluptatem atque?
          </p>
          <Link to="/" className="button">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;