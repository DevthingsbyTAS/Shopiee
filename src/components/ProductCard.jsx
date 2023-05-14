import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import laptop from "../images/laptop.jpg";
import prodcomp from "../images/prodcompare.svg";
import view from "../images/view.svg";
import cross from "../images/cross.svg";
import { useDispatch } from "react-redux";
import { AddtoWishList } from "../features/products/productSlice";
const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  const addtowish = (data) => {
    dispatch(AddtoWishList(data));
  };

  return (
    <>
      {data?.map((item, index) => (
        <div
          key={index}
          className={`${
            location.pathname.includes("product") ? `gr-${grid}` : "col-3"
          }`}
        >
          <div className="product-card position-relative w-100">
            <div className="wishlist-icon position-absolute">
              <button
                className="border-0 bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  addtowish(item?._id);
                }}
              >
                <img src={wish} alt="wish" />
              </button>
            </div>
            <div className="product-image">
              <img
                className="img-fluid"
                style={{
                  maxHeight: "250px",
                  textAlign: "center",
                }}
                src={
                  item?.images?.lenght == 0
                    ? item?.image
                    : item?.images?.[0]?.url
                }
                alt="prod img 1"
              />
              <img
                style={{
                  height: "270px",
                }}
                className="img-fluid"
                src={laptop}
                alt="laptop 2"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">{item?.brand}</h6>
              <h5 className="product-title">{item?.title}</h5>
              <ReactStars
                count={5}
                size={24}
                value={item?.totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p
                className={grid == 12 ? "d-block description" : "d-none"}
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></p>
              <p className="price">${item?.price}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column">
                <button className="border-0 bg-transparent">
                  <img src={prodcomp} alt="prodcompare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={cross} alt="cart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
