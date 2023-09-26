import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/features/cartSlice";
import { addToWish } from "../redux/features/wishlistslice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [svgColor, setSvgColor] = useState("grey");

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  });

  const sendsingle = (product, redirect) => {
    dispatch(addToCart(product));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }

    if (redirect) {
      navigate("/cart");
    }
  };

  const send = (product) => {
    dispatch(addToCart(product));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }

    props.showAlert("Item added In Your Cart", "success");
  };

  const sendwish = (product) => {
    dispatch(addToWish(product));

    props.showAlert("Item added In Wishlist", "success");
    setSvgColor("red");
  };

  if (!Object.keys(product).length > 0)
    return (
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    );

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div class="card mb-3 mt-5">
        <div class="row g-0">
          <div class="col-md-4 p-5">
            <button
              className="rounded p-0 border-0 d-inline-flex items-center justify-center "
              style={{
                zIndex: "99",
                position: "relative",
                marginLeft: "20rem",
              }}
              onClick={() => sendwish(product, id)}
            >
              <svg
                style={{ marginTop: "-3rem" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="2em"
                width="2em"
                viewBox="0 0 576 512"
                className="rounded-circle border-1 "
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </button>
            <img
              src={product?.image}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8 p-3">
            <div class="card-body">
              <h5 class="card-title fw-bold"> {product?.title}</h5>
              <h6 class="card-title text-danger "> {product?.category}</h6>

              <p>
                <div className="d-flex mb-1 mt-3">
                  <span className="flex items-center d-flex ">
                    <h5> {product.rating.rate}</h5>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      style={{ width: "1rem" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      style={{ width: "1rem" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      style={{ width: "1rem" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      style={{ width: "1rem" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      style={{ width: "1rem" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </span>
                    <span className="text-gray-600 mx-auto mt-1">
                      {product.rating.count} Reviews
                    </span>
                  <span className="d-flex border-gray-200 space-x-2s mx-auto">
                    <a className="text-gray-500" href="/">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        style={{ width: "2rem" }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500" href="/">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        style={{ width: "2rem" }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500" href="/">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        style={{ width: "2rem" }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </p>
              <p class="card-text">{product?.description}</p>
              <p className="d-flex my-5">
                <div className="d-flex">
                  <span className="my-1 me-3">Color</span>
                  <button
                    className="border-2  bg-primary rounded-circle  focus:outline-none"
                    style={{ height: "2rem", width: "2rem" }}
                  ></button>
                  <button
                    className="border-2  bg-danger rounded-circle  focus:outline-none"
                    style={{ height: "2rem", width: "2rem" }}
                  ></button>
                  <button
                    className="border-2   bg-yellow rounded-circle  focus:outline-none"
                    style={{ height: "2rem", width: "2rem" }}
                  ></button>
                </div>
                <div className="d-flex ml-6 items-center mx-auto">
                  <span className="d-flex mr-3 mb-1 me-2">Size:</span>
                  <div className="p-relative me-2">
                    <select className="rounded ">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>
              </p>
             
              <p class="card-text">
                <div className=" justify-between items-center ">
                  <div className="title-font font-medium text-2xl text-gray-900 mx-1 my-3 mb-4">
                    <h3 className="my-5"> Price: ${product?.price}</h3>
                  </div>
                  <div className="d-flex">
                    <button
                      className="d-flex bg-primary mx-2 text-white  border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded mr-2"
                      onClick={() => sendsingle(product, true)}
                    >
                      Buy it now
                    </button>
                    <button
                      className="d-flex mx-5 bg-primary mx-auto border border-indigo-500 py-2 px-2 text-white rounded "
                      onClick={() => send(product, id)}
                    >
                      {/* {cartbtn} */}Add to Cart
                    </button>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
