import React from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";

const Store = () => {
  const [grid, setGrid] = React.useState(4);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const GetAllProducts = () => {
    dispatch(getProducts());
  };
  React.useEffect(() => {
    GetAllProducts();
  }, []);
  // console.log("products", products);
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <div className="filter-title">Shop By Categories</div>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <div className="filter-title">Filter By</div>
              <div className="">
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value={""}
                      id={""}
                      className="form-check-input"
                    />
                    <label htmlFor="" className="form-check-label">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      value={""}
                      id={""}
                      className="form-check-input"
                    />
                    <label htmlFor="" className="form-check-label">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Prices</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="from"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div className="">
                    <Color />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value={""}
                        id={"color-1"}
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value={""}
                        id={"color-2"}
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    TV
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speakers
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kids Heaphones in Bulk 10 piece multicolor</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300.00</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kids Heaphones in Bulk 10 piece multicolor</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300.00</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By
                  </p>
                  <select name="" id="" className="form-control form-select">
                    <option value="manual">Featured</option>
                    <option value="best-selling" defaultValue={"best-selling"}>
                      best-selling
                    </option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">
                      Price, high to low{" "}
                    </option>
                    <option value="Created-ascending">Date, low to high</option>
                    <option value="Created-ascending">Date, low to high</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid "
                      alt="gr4"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid "
                      alt="gr3"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid "
                      alt="gr2"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid "
                      alt="gr"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} gridBool={true} data={products} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Store;
