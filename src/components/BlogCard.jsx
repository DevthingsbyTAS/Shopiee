import React from "react";
import { Link } from "react-router-dom";
import BlogCardImg from "../images/blog-1.jpg";
const BlogCard = (props) => {
  const { id, title, description, image, date } = props;
  return (
    <div className="blog-card" key={id}>
      <div className="card-image">
        <img src={image} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 70) + "...",
          }}
        ></p>
        <Link to={"/blog/" + id} className="button">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
