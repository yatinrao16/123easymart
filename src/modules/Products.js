import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToWish } from "../redux/features/wishlistslice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Products = (props) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const Loading = () => {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  };
  const sendwish = (product, id) => {
    dispatch(addToWish(product, id));

    props.showAlert("Item added In Your Wishlist", "success");
    const wish = JSON.parse(localStorage.getItem("wishs")) || [];
    const isProductExist = wish.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedWish = wish.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: 1,
          };
        }
        return item;
      });
      localStorage.setItem("wishs", JSON.stringify(updatedWish));
    } else {
      localStorage.setItem(
        "wishs",
        JSON.stringify([...wish, { ...product, quantity: 1 }])
      );
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="btn d-flex mb-5 container">
        <div className="mx-auto">
         
          <button
            className="btn btn-outline-dark me-2 shadow-lg  rounded mx-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men`s Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 shadow-lg  rounded"
            onClick={() => filterProduct("women's clothing")}
          >
            Women`s Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 shadow-lg rounded"
            onClick={() => filterProduct("jewelery")}
          >
            Jewellery
          </button>
          <button
            className="btn btn-outline-dark me-2 shadow-lg rounded"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button></div>
        </div>

        <div class="album py-5 mx-0 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {filter.map((product) => {
                return (
                  <>
                    <div class="col">
                      <div className="card shadow-sm mb-4 cursor-pointer rounded-lg shadow mx-4">
                        <Link
                          to={`/products/${product.id}`}
                          className="card shadow-sm cursor-pointer rounded-lg shadow"
                          style={{ textDecoration: "none" }}
                        >
                          <a
                            className="block relative h-48 rounded overflow-hidden"
                            href="/"
                          >
                            <img
                              alt={product.title}
                              className="bd-placeholder-img card-img-top p-3"
                              width="100%"
                              height="220"
                              src={product.image}
                            />
                          </a>
                          <div className="mt-4">
                            <h5
                              className="text-gray-900 title-font text-lg font-medium mx-3"
                              style={{ height: "4rem" }}
                            >
                              {product.title.slice(0, 45)}...
                            </h5>

                            <div className="d-flex h-20">
                              <h6 className="text-gray-500 text-danger  mb-1 mx-3">
                                {product.category}
                              </h6>
                              <p
                                className=" text-md font-semibold"
                                style={{ marginLeft: "3rem" }}
                              >
                                {" "}
                                {product.rating.rate}
                                <i className="fa fa-star"></i>
                              </p>
                            </div>
                            <p
                              className="mt-1 text-md font-semibold mt-3 mx-3"
                              style={{ width: "10rem" }}
                            >
                              {" "}
                              Price: ${product.price}
                            </p>
                          </div>
                        </Link>
                        <button
                          className="rounded  bg-gray-200 p-0 border-0 d-inline-flex items-center justify-center text-gray-500 "
                          style={{
                            zIndex: "99",
                            position: "relative",
                            marginLeft: "12rem",
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
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
