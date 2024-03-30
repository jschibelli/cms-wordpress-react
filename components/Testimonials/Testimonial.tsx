import React from "react";
import Styles from "./testimonials.module.scss";
import { User } from "@nextui-org/user";
import testimonial from "./data";

const Testimonial = () => {
  return (
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
  );
};

export default Testimonial;
