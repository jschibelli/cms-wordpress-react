import React from "react";
import Marquee from "react-fast-marquee";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Styles from "./testimonials.module.scss";
import { User } from "@nextui-org/user";
import testimonial from "./data-testimonies";

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
      <div>
      {testimonial.map((item) => (
        <div
          key={item.userId}
          className={`${Styles.testimonial_item} max-w-md`}
        >
          <div className={`${Styles.testimonial_content}`}>{item.content}</div>
          <div className={`${Styles.testimonial_meta}`}>
            <User
              name={item.name}
              description={item.description}
              avatarProps={{
                src: item.avatarProps.src,
              }}
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;