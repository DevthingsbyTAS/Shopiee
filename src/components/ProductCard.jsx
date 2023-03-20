import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <div
      className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to="1" className="product-card position-relative w-100">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wish" />
          </Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.jpg" alt="prod img 1" />
          <img className="img-fluid" src="images/laptop.jpg" alt="laptop 2" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Kids Headphones bulk multi colored</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className={grid == 12 ? "d-block description" : "d-none"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            similique quod quia cum, facere magnam quas magni ut voluptatem?
            Cupiditate quo rem reiciendis pariatur sunt saepe est perspiciatis,
            minima dolore.
          </p>
          <p className="price">$100</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
              <img src="images/prodcompare.svg" alt="prodcompare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/cross.svg" alt="cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
