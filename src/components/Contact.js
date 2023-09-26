import React from "react";
import  contactPic from '../assets/contact.png'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("xnqkgzag");
  if (state.succeeded) {
      return <p  className="container mx-5 my-5">Thanks for joining!</p>;
  }
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src={contactPic}
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                />
                 <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              </div>
              <div className="mb-3">
                <label htmlFor="textarea" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="textarea"
                  name="textarea"
                  rows="5"
                ></textarea>
                 <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              </div>
              <button type="submit" disabled={state.submitting} className="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
