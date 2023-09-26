import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  if (carts.length === 0) {
    return (
      <div className=" h-[55vh] flex justify-center items-center text-4xl ">
        Cart is Empty
      </div>
    );
  }

  return (
    <>
      <main>
        <section class="py-5 text-center container mx-4">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-bold">Shopping Cart - {carts.length} Items</h1>

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
                  // onClick={emptycart}
                  class="btn btn-primary my-2 py-2 mx-auto d-flex float-end"
                >
                  Empty cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {carts?.map((cart) => {
                return (
                  <>
                    <div class="col mx-4">
                      <div class="card shadow-sm">
                        <div class="card">
                          <div class="col">
                            <div class="col">
                              <img
                                src={cart?.image}
                                alt={cart?.title}
                                class="img-fluid rounded-start px-5 mx-auto my-4"
                                style={{height:"10rem",width:"40rem"}}

                              />
                            </div>
                            <div class="col">
                              <div class="card-body mx-3" style={{height:"8rem"}}>
                                <h5 class="card-title" style={{height:"3rem"}}>
                                  {" "}
                                  {cart?.title.slice(0, 45)}
                                </h5>
                                <div className="d-flex">
                                  <p class="card-text text-danger">
                                    {cart?.category}
                                  </p>
                                  <p class="card-text fw-bold mx-auto">
                                    Price: ${cart?.price}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex text-center ">
                                <div className="mx-auto">
                                  <svg
                                    className="fill-current cursor-pointer my-2"
                                    viewBox="0 0 448 512"
                                    onClick={() => handleDec(cart?.id)}
                                    style={{
                                      height: "1rem",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>

                                  <input
                                    className="mx-2 border text-center"
                                    type="text"
                                    value={cart?.quantity}
                                    style={{ width: "2rem", height: "2rem" }}
                                  />

                                  <svg
                                    className="fill-current text-gray cursor-pointer my-2"
                                    onClick={() => handleInc(cart?.id)}
                                    style={{
                                      height: "1rem",
                                      width: "1rem",
                                      cursor: "pointer",
                                    }}
                                    viewBox="0 0 448 512"
                                  >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                  </svg>
                                </div>
                              </div>

                              <div class="card-body d-flex mx-3">
                                <h6 class="card-title" style={{width:"10rem"}}>
                                  Total: ${cart?.price * cart?.quantity}
                                </h6>
                                <button
                                  className=" btn font-small bg-primary text-xs cursor-pointer text-white  mx-auto px-1 py-0 "
                                  onClick={() => removeProduct(cart?.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
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
        <div class="container pb-3 mx-auto">
          <div class="d-flex mx-auto" style={{ width:"30rem"}}>
           
            <div class="bg-body-tertiary border rounded-3">
              <div id="summary" className=" py-2 px-5">
              <div className="mx-5">

                <h1 className="font-small text-2xl border-b pb-8 mx-4">
                  Order Summary
                </h1>
              </div>
                <div className="d-flex justify-between mt-5 mb-5">
                  <span className="font-small text-sm lowercase mx-auto fw-bold">
                    Items {carts?.length}
                  </span>
                  <span className="font-small text-sm mx-auto fw-bold">
                    Total: {total?.toFixed(2)}$
                  </span>
                </div>
                <div>
                  <label className="font-medium d-inline-block mb-3 text-sm lowercase justify-content-center">
                    Shipping
                  </label>
                  <select
                    className="d-block p-2 text-sm"
                    style={{ border: "none" }}
                  >
                    <option>Standard shipping - $10.00</option>
                  </select>
                </div>
                <div className="py-5 mx-0 d-flex">
                  <label
                    for="promo"
                    className="font-small d-flex mt-2 text-sm lowercase  mx-3"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-1 text-sm "
                  />
                  <button className="bg-danger hover:bg-red-600 px-2 py-1 text-sm text-white lowercase">
                    Apply
                  </button>
                </div>
                <div className="border-t mt-8">
                  <div className="d-flex font-small justify-between py-6 text-sm lowercase me-auto">
                    <span className="fw-bold">Total cost</span>
                    <span className="mx-auto fw-bold">
                      ${(total + 10).toFixed(2)}
                    </span>
                  </div>
                  <Link
                    className="btn bg-primary font-small d-block px-3 py-2 mt-5 item-center text-sm text-white text-center mx-auto container"
                    to="/checkout"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="mx-auto row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {carts?.map((cart, id) => {
                return (
                  <>
                    <div class=" cursor-pointer">
                      <div class="card shadow-sm" style={{ width: "16rem" }}>
                        <div className="mb-1 p-2 bd-placeholder-img card-img-top">
                          <img
                            className="px-3 mx-3 img-fluid bd-placeholder-img card-img-top "
                            src={cart?.image}
                            alt={cart?.title}
                            style={{ height: "13rem", width: "13rem" }}
                          />
                        </div>
                        <p
                          class="card-text mx-3"
                          style={{ width: "14rem", height: "2rem" }}
                        >
                          {cart?.title.slice(0, 45)}....
                        </p>
                        <p class="card-text mx-3 text-danger">
                          {cart?.category}
                        </p>{" "}
                        <div class="d-flex justify-content-between align-items-center">
                          <p class="card-text text-black fw-bold mx-3">
                            Price: ${cart?.price}
                          </p>{" "}
                          <div class="btn-group">
                            <button
                              type="button"
                              // onClick={() => handleDecrement(cart?.id)}
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
        </div> */}
      </main>
      {/* <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-small text-2xl">Shopping Cart</h1>
              <h2 className="font-small text-2xl">{carts?.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-small text-gray-600 text-xs lowercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-small text-center text-gray-600 text-xs lowercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-small text-center text-gray-600 text-xs lowercase w-1/5">
                Price
              </h3>
              <h3 className="font-small text-center text-gray-600 text-xs lowercase w-1/5">
                Total
              </h3>
            </div>
            {carts?.map((cart) => {
              return (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="h-24"
                        src={cart?.image}
                        alt={cart?.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{cart?.title}</span>
                      <span className="text-red-500 text-xs capitalize">
                        {cart?.category}
                      </span>
                      <div
                        className="font-small hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                        onClick={() => removeProduct(cart?.id)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox="0 0 448 512"
                      onClick={() => handleDec(cart?.id)}
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={cart?.quantity}
                    />

                    <svg
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      onClick={() => handleInc(cart?.id)}
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-small text-sm">
                    ${cart?.price}
                  </span>
                  <span className="text-center w-1/5 font-small text-sm">
                    ${cart?.price * cart?.quantity}
                  </span>
                </div>
              );
            })}

            <Link
              to={"/products"}
              className="flex font-small text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-small text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-small text-sm lowercase">
                Items {carts?.length}
              </span>
              <span className="font-small text-sm">
                {total?.toFixed(2)}$
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm lowercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                for="promo"
                className="font-small inline-block mb-3 text-sm lowercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white lowercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-small justify-between py-6 text-sm lowercase">
                <span>Total cost</span>
                <span>${(total + 10).toFixed(2)}</span>
              </div>
              <Link
                className="btn bg-indigo-500 font-small hover:bg-indigo-600 py-3 text-sm text-white lowercase w-full"
                to="/checkout"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Cart;
