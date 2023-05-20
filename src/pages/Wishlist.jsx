import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getUseProductrWishlist } from "../features/user/userSLice";
import { AddtoWishList } from "../features/products/productSlice";

const Wishlist = () => {
  const disptach = useDispatch();
  const { wishlist } = useSelector((state) => state.auth);
  React.useEffect(() => {
    getWishlistFromDB();
  }, []);

  const getWishlistFromDB = () => {
    disptach(getUseProductrWishlist());
  };
  const removeWishlistFromDB = (item) => {
    disptach(AddtoWishList(item?._id));
    setTimeout(() => {
      getWishlistFromDB();
    }, 800);
  };
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        {wishlist?.wishlist?.length == 0 && (
          <div className="text-center fs-3">No record found</div>
        )}
        <div className="row">
          {wishlist?.wishlist?.map((item, index) => (
            <div className="col-3" key={index}>
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={() => {
                    removeWishlistFromDB(item?._id);
                  }}
                />
                <div className="wishlist-card-image">
                  <img
                    src={item?.images[0]?.url ?? "images/watch.jpg"}
                    className="img-fluid d-block mx-auto"
                    alt="cross"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">{item?.title}</h5>
                  <h6 className="price">$ {item?.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
