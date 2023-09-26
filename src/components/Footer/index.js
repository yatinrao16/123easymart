import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-1 my-5 border-top">
        <div className="col-md-4 mb-3 mx-auto">
          <a
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              height="3em"
              className="bi me-2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">EasyMart</span>
          </a>
          <p className="text-body-secondary">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>

        <div class="col-md-4 mb-0 mx-auto">
          <h5>Section</h5>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center text-black">
            <li className="nav-item ">
              <Link
                to="/"
                className="nav-link me-3 text-black"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/products"
                className="nav-link me-3 text-black"
                style={{ textDecoration: "none" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/about"
                className="nav-link me-3 text-black"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/contact"
                className="nav-link me-3 text-black"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div class="col-md-4  mb-3 mx-auto">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top mx-auto">
        <p className="mx-auto">
          &copy; 2023 Company, Inc. All rights reserved.
          <a
            href="https://twitter.com/knyttneve"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @knyttneve
          </a>
        </p>
        <ul className="align-end list-unstyled d-flex mx-5">
          <li class="ms-3">
            {" "}
            <a className="link-body-emphasis" href="/">
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
            </a>{" "}
          </li>
          <li class="ms-3">
            {" "}
            <a class="link-body-emphasis" href="/">
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
          </li>
          <li class="ms-3">
            {" "}
            <a class="link-body-emphasis" href="/">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                style={{ width: "2rem" }}
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            {" "}
            <a class="link-body-emphasis" href="/">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                style={{ width: "2rem" }}
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
