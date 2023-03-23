import React from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
// import watch from "../../public/images/watch.jpg";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Singleproduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 500,
    img: "https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png?impolicy=v6-upright&imwidth=270",
  };

  const [orderedProduct, setOrderedProduct] = React.useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title="Single Product Name" />
      <BreadCrumb title="Single Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image ">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-10">
                <div>
                  <img
                    src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png?impolicy=v6-upright&imwidth=270"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png?impolicy=v6-upright&imwidth=270"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png?impolicy=v6-upright&imwidth=270"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png?impolicy=v6-upright&imwidth=270"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids Headphone in Bulk multicolor</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="review-btn">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type : </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand : </h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category : </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags : </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability : </h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Size : </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Color : </h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                    <h3 className="product-heading">Quantity : </h3>
                    <div className="">
                      <input
                        min={1}
                        max={10}
                        id="quantity"
                        type="number"
                        name="quantity"
                        className=" form-control"
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div className="d-flex gap-30 align-items-center ms-5">
                      <button className="button">Add to cart</button>
                      <button to="/signup" className="button signup">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div className="">
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div className="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      <a href="">Add to Wishlist</a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10  my-3">
                    <h3 className="product-heading">Shipping & Returns : </h3>
                    <p className="product-data">
                      Free shipping to order over $100 all US doesmetic
                      <b>5-10 business days</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product link : </h3>
                    <p className="product-data">
                      <a
                        href="javascript:void(0);"
                        onClick={() =>
                          copyToClipboard(
                            "https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126283rbr-0031.png?impolicy=v6-upright&imwidth=270"
                          )
                        }
                      >
                        Copy Product Link
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, nihil voluptatum vel ab fuga illo architecto maiores,
                  dignissimos, commodi ducimus aliquid deserunt. Molestiae,
                  cupiditate magnam vero in excepturi quam explicabo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="review" className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customers Reviews </h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div className="text-dark text-decoration-underline">
                      <a href="" target="_blank" rel="noopener noreferrer">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Write a Review </h4>

                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value="5"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        cols={"3"}
                        rows={"10"}
                        className="form-control"
                        name={"commnets"}
                        placeholder={"commnets"}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0">Tulaib</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Veniam tenetur nostrum corrupti accusamus asperiores sit
                      commodi, voluptatem id doloribus veritatis error
                      repellendus quaerat aut doloremque facilis officiis
                      sapiente sint suscipit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Singleproduct;
