import React, { useEffect, useState } from "react";

const Checkout = (props) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, []);

  return (
    <>
      <div class="container-fluid pb-3 mt-5">
        <div class="bg-body-tertiary border rounded-3">
          <div className=" bg-white py-10 row">
            <div className="col-md-6 rounded">
              <div className="rounder border-1 px-5 py-5">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation w-200" novalidate="">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        value=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        value=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Username"
                          required=""
                        />
                        <div className="invalid-feedback">
                          Your username is required.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address htmlFor shipping
                        updates.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select className="form-select" id="country" required="">
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <select className="form-select" id="state" required="">
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="same-address"
                    />
                    <label className="form-check-label" htmlFor="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="save-info"
                    />
                    <label className="form-check-label" htmlFor="save-info">
                      Save this information htmlFor next time
                    </label>
                  </div>

                  <hr className="my-4" />
                </form>
              </div>
            </div>
            <div class="bg-body-tertiary border rounded-3 col-md-6">
              <div className="container px-5 py-5">
                <div
                  className="py-10"
                  style={{
                    marginLeft: "5rem",
                    paddingRight: "2rem",
                  }}
                >
                  <div className=" order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-indigo-500">Your cart</span>
                      <span className="badge bg-primary rounded-pill"></span>
                    </h4>
                    <ul className="list-group mb-3">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>${(total + 10).toFixed(2)}</strong>
                      </li>
                    </ul>

                    <form className="card p-2">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Promo code"
                        />
                        <button
                          type="submit"
                          className="btn bg-indigo-500 font-semibold hover:bg-indigo-600 text-sm text-white uppercase"
                        >
                          Redeem
                        </button>
                      </div>
                    </form>
                  </div>

                  <h4 className="mb-3 my-5">Payment</h4>

                  <div className="my-3">
                    <div className="form-check">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        checked=""
                        required=""
                      />
                      <label className="form-check-label" htmlFor="credit">
                        Credit card
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required=""
                      />
                      <label className="form-check-label" htmlFor="debit">
                        Debit card
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required=""
                      />
                      <label className="form-check-label" htmlFor="paypal">
                        PayPal
                      </label>
                    </div>
                  </div>

                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="cc-name" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required=""
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cc-number" className="form-label">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-expiration" className="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required=""
                      />
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="d-inline-flex items-center bg-primary text-white border-0 py-2 px-5 mx-auto rounded  my-3"
                    style={{ marginLeft: "12rem" }}
                    type="submit"
                  >
                    PAY
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
