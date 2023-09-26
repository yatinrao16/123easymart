import React from "react";
import heroImg from "../../assets/heroImg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div class="card mb-3 mt-5 p-4">
        <div class="row g-0">
          <div class="col-md-6">
            <img src={heroImg} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">
                {" "}
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Get the product now before
                  <br className="hidden lg:inline-block" />
                  they get sold
                </h1>
              </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. Copper mug try-hard pitchfork pour-over freegan heirloom
                neutra air plant cold-pressed tacos poke beard tote bag.
                Heirloom echo park mlkshk tote bag selvage hot chicken authentic
                tumeric truffaut hexagon try-hard chambray.
              </p>
              <p class="card-text">
                {" "}
                <Link
                  className="btn  text-white bg-primary border-1 py-2 px-6 rounded text-lg"
                  to="/products"
                >
                  Show All Products
                </Link>
                <Link
                  className="btn ml-4 mx-3 my-5 text-white bg-primary border-1 py-2 px-6  rounded text-lg"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
