import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeToWish,
  emptycartItem,
} from "../redux/features/wishlistslice.js";

const Wishlist = (props) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Wishs = JSON.parse(localStorage.getItem("wishs")) || [];

  // // add to cart

  // // remove to cart
  const handleDecrement = (id) => {
    dispatch(removeToWish(id));
    props.showAlert("Item Remove In Wishlist", "success");

    const updatedWish = Wishs.filter((item) => item.id !== id);
    localStorage.setItem("wishs", JSON.stringify(updatedWish));
  };

  const emptycart = () => {
    dispatch(emptycartItem());
  };

  if (Wishs.length === 0) {
    return (
      <div className=" h-[55vh] flex justify-center items-center text-4xl ">
        whislist is Empty
      </div>
    );
  }

  return (
    <>
      <main>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-bold">Wishlist - {Wishs.length} Items</h1>

              <div
                className="d-block mx-auto me-auto container "
                style={{ border: "1px solid black", width: "100%" }}
              >
                <Link
                  to="/products"
                  class="btn btn-primary my-2 mx-auto float-start"
                >
                  {" "}
                  <svg
                    className="fill-current"
                    viewBox="0 0 448 512"
                    style={{ width: "1.5rem" }}
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </Link>
                <button
                  onClick={emptycart}
                  class="btn btn-primary my-2 py-2 mx-auto d-flex float-end"
                >
                  Empty Wishlist
                </button>
              </div>
            </div>
          </div>
        </section>

        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="mx-auto row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {Wishs?.map((wish, id) => {
                return (
                  <>
                    <div class="col cursor-pointer">
                      <div class="card shadow-sm"  style={{ width: "16rem" }}>
                        <div className="mb-1 p-2 bd-placeholder-img card-img-top">
                          <img
                            className="px-3 mx-3 img-fluid bd-placeholder-img card-img-top "
                            src={wish?.image}
                            alt={wish?.title}
                            style={{ height: "13rem", width: "13rem" }}
                          />
                        </div>
                        <p
                          class="card-text mx-3"
                          style={{ width: "14rem", height: "2rem" }}
                        >
                          {wish?.title.slice(0, 45)}....
                        </p>
                        <p class="card-text mx-3 text-danger">
                          {wish?.category}
                        </p>{" "}
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="card-text text-black fw-bold mx-3">
                            Price: ${wish?.price}
                          </p>{" "}
                          <div class="btn-group">
                            <button
                              type="button"
                              onClick={() => handleDecrement(wish?.id)}
                              class="btn btn-sm text-white btn-outline-primary btn-primary mx-3 mb-3"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </>
                );
              })}

           
            </div>
          </div>
        </div>
      </main>
    
    
    </>
  );
};

export default Wishlist;
