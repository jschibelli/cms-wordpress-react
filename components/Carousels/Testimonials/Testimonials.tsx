import React, { useState, useEffect } from "react";
import Styles from "./testimonials.module.scss";
import { User } from "@nextui-org/user";
import testimonial from "./data-testimonies";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonial.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

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
      <div className={Styles.testimonialCarouselContainer}>
        {testimonial.map((item, index) => (
          <div
            key={item.userId}
            className={`${Styles.testimonialItem} ${
              index === activeIndex ? Styles.active : ""
            }`}
          >
            {index === activeIndex && (
              <>
                <div className={Styles.testimonial_content}>{item.content}</div>
                <div className={Styles.testimonial_meta}>
                  <User
                    name={item.name}
                    description={item.description}
                    avatarProps={{ src: item.avatarProps.src }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
        <div className={Styles.carouselIndicators}>
          {testimonial.map((_, index) => (
            <span
              key={index}
              className={`${Styles.carouselIndicator} ${
                index === activeIndex ? Styles.activeIndicator : ""
              }`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
