import React from "react";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-cart">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Samsung Galaxy Note10+ Mobile Phone</h6>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              $100
              <span className="red-p">
                &nbsp; <strike>$199</strike>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
