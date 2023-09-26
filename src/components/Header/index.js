import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  // const { carts } = useSelector((state) => state.allCart);
  // const { wishs } = useSelector((state) => state.allWish);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  const wishs = JSON.parse(localStorage.getItem("wishs")) || [];

  const navigate = useNavigate;
  const location = useLocation;
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black text-white"
        style={{ position: "fixed", zIndex: "100", width: "100%" }}
      >
        <div className="container-fluid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            height="2em"
            className="bi me-2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link className="navbar-brand" to="/">
            EasyMart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-5 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link me-3 text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/products"
                  className="nav-link me-3 text-white"
                  style={{ textDecoration: "none" }}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="nav-link me-3 text-white"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/contact"
                  className="nav-link me-3 text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <form className="d-flex mb-2" role="search">
              {!localStorage.getItem("token") ? (
                <div className="d-flex">
                  <Link
                    to="/login"
                    className={`nav-link me-5 bg-primary btn text-white px-3 py-1 ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-solid fa-user"></i> Login
                  </Link>
                  <Link
                    to="/register"
                    className={`nav-link me-5 bg-primary btn text-white px-3 py-1 ${
                      location.pathname === "/register" ? "active" : ""
                    }`}
                  >
                    <i className="fa fa-user-plus me-1"></i>SignUp
                  </Link>
                </div>
              ) : (
                <form className="d-flex">
                  <div className="dropdown-center mt-2 mb-1 me-3 ">
                    <div className="btn-group me-3">
                      <button
                        type="button"
                        className="btn btn-primary bg-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Hi
                      </button>
                      <ul
                        className="dropdown-menu p-0 pt-2"
                        style={{
                          textDecoration: "none",
                          backgroundColor: "transparent",
                          border: "none",
                          marginLeft: "-3rem",
                        }}
                      >
                        <li
                          style={{ border: "1px solid white" }}
                          className="rounded my-2"
                        >
                          <Link
                            className="d-inline-flex items-center text-white bg-primary border-0 py-2 px-5 mx-2 w-30 focus:outline-none hover:bg-indigo-700 rounded "
                            to="/userprofile"
                            style={{ textDecoration: "none" }}
                          >
                            Profile
                          </Link>
                        </li>
                        <li
                          style={{ border: "1px solid white" }}
                          className="rounded my-2"
                        >
                          <Link
                            to="/login"
                            onClick={handleLogout}
                            style={{ textDecoration: "none" }}
                            className={`d-inline-flex items-center text-white bg-primary border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded mx-2 my-1 ${
                              location.pathname === "/logout" ? "active" : ""
                            }`}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <Link
                      to={"/cart"}
                      type="button"
                      className="btn btn-primary position-relative text-white bg-transparent me-3 py-0 px-0 border border-0"
                    >
                      <svg
                        style={{ marginTop: "0rem" }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                      </svg>
                      {carts.length !== 0 ? (
                        <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                          {carts.length}
                        </span>
                      ) : (
                        " "
                      )}
                    </Link>
                    <Link
                      to={"/wishlist"}
                      type="button"
                      className="btn btn-primary position-relative text-white bg-transparent px-0 py-0 border border-0"
                    >
                      <svg
                        style={{ marginTop: "0rem" }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="2em"
                        width="2em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                      </svg>
                      {wishs.length !== 0 ? (
                        <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                          {wishs.length}
                        </span>
                      ) : (
                        " "
                      )}
                    </Link>
                  </div>
                </form>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
