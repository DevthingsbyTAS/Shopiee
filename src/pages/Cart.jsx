import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
                <div className="w-75">
                  <h5>Name: Honor 5c</h5>
                  <p>Size: Medium</p>
                  <p>COlor: Pink</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 500</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name="quan"
                    id="quan"
                    min={1}
                    max={10}
                    className="form-control"
                  />
                </div>
                <BsFillTrashFill className="text-danger fs-2" />
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 500</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-end">
              <Link to="/product" className="button">
                Continue to Shopping
              </Link>
              <div className="d-flex align-items-end flex-column">
                <h4>Subtotal: $ 1000</h4>
                <p>Taxes and shipping calculated at end</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
