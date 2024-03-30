import React from "react";
import Marquee from "react-fast-marquee";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold h1">Testimonials</h1>
      <div className="max-w-5xl mx-auto col-lg-6 mx-auto">
        <p className="lead mb-4">
          Explore testimonials that encapsulate the essence of professional
          synergy and growth, each narrative offering insight into our
          collaborative achievements and mutual successes. These reflections
          serve as a testament to the enduring partnerships and meaningful
          outcomes forged through our joint endeavors.
        </p>
      </div>

      <Marquee>
        <Testimonial />
      </Marquee>
    </div>
  );
};

export default Testimonials;