import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import PopularProducts from "../components/PopularProducts";
import Container from "../components/Container";
import { services } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { getblogs } from "../features/blog/blogSlice";
import moment from "moment";
import { getProducts } from "../features/products/productSlice";
const Home = () => {
  const disptach = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  const { products } = useSelector((state) => state.product);
  const navigate = useNavigate();

  React.useEffect(() => {
    getBlogsFromDB();
    getProductsFromDB();
  }, []);

  const getBlogsFromDB = () => {
    disptach(getblogs());
  };
  const getProductsFromDB = () => {
    disptach(getProducts());
  };
  const removeWishlistFromDB = (item) => {
    // disptach(AddtoWishList(item?._id));
    setTimeout(() => {
      getBlogsFromDB();
    }, 800);
  };
  return (
    <>
      <Container class1={"home-wrapper-1 py-5"}>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative  ">
              <img
                src="images/main-banner.jpg"
                className="rounded-3 img-fluid"
                alt="mainbanner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ pro</h5>
                <p>From $999.0 or $41.62/mon.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="rounded-3 img-fluid"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>iPad S13+ pro</h5>
                  <p>
                    From $999.0 <br /> or $41.62/mon.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="rounded-3 img-fluid"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad S13+ pro</h5>
                  <p>
                    From $999.0 <br /> or $41.62/mon.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="rounded-3 img-fluid"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad S13+ pro</h5>
                  <p>
                    From $999.0 <br /> or $41.62/mon.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="rounded-3 img-fluid"
                  alt="mainbanner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad S13+ pro</h5>
                  <p>
                    From $999.0 <br /> or $41.62/mon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1={"home-wrapper-2 py-5"}>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((item, key) => (
                <div key={key} className="d-flex align-items-center gap-10">
                  <img src={item?.image} alt={item?.title} />
                  <div>
                    <h6>{item?.title}</h6>
                    <p className="mb-0">{item?.tagLine}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container class1={"home-wrapper-2 py-5"}>
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Samrt TV</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Samrt TV</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1={"featured-wrapper py-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Products</h3>
          </div>
          {products?.map((item, index) => {
            if (item?.tags == "featured") {
              return (
                <ProductCard
                  key={index}
                  data={products?.filter((item) => item?.tags == "featured")}
                  grid={3}
                  navigate={navigate}
                />
              );
            }
          })}
        </div>
      </Container>
      <Container class1={"famous-wrapper py-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                alt="famous"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or$16.62/month for 24 mon.* </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                alt="famous2"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of Brightness.</h6>
                <p className="text-dark">
                  From $399 or$16.62/month for 24 mon.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                alt="famous2"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">600 nits of Brightness.</h6>
                <p className="text-dark">
                  From $399 or$16.62/month for 24 mon.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                alt="famous2"
                className="img-fluid"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">600 nits of Brightness.</h6>
                <p className="text-dark">
                  From $399 or$16.62/month for 24 mon.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1={"special-wrapper py-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {products?.map((item, index) => {
            if (item?.tags == "special") {
              return (
                <SpecialProduct
                  key={index}
                  title={item?.title}
                  id={item?._id}
                  brand={item?.brand}
                  price={item?.price}
                  totalrating={item?.totalrating?.toString()}
                  navigate={navigate}
                  sold={item?.sold}
                  quantity={item?.quantity}
                />
              );
            }
          })}
        </div>
      </Container>
      <Container class1={"popular-wrapper py-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          {products?.map((item, index) => {
            if (item?.tags == "popular") {
              return (
                <ProductCard
                  key={index}
                  data={products?.filter((item) => item?.tags == "popular")}
                  grid={3}
                />
              );
            }
          })}
        </div>
      </Container>
      <Container class1={"marquee-wrapper py-2"}>
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper ">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1={"blog-wrapper py-5 home-wrapper-2"}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            {blogs?.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="col-3">
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images?.[0]?.url}
                      date={moment(item?.createdAt)?.format("LLLL")}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
