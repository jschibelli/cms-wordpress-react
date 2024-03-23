import React from "react";
import Styles from "./testimonials.module.scss";
import { User } from "@nextui-org/user";

const Testimonial = () => {
  return (
    <div className={`${Styles.testimonial_item} max-w-md`}>
      <div className={`${Styles.testimonial_content}`}>
       // Testimonial content goes here
      </div>
      <div className={`${Styles.testimonial_meta}`}>
        <User
          name="Jason D'Amico" // Name of the person giving the testimonial
          description="Senior Web Developer" // Job title of the person giving the testimonial
          avatarProps={{
            src: "https://media.licdn.com/dms/image/D4E35AQG7AZhNz0MtUw/profile-framedphoto-shrink_800_800/0/1707920449142?e=1711821600&v=beta&t=zD3AGdYgi7xclh3IIV31GxAEeQJwzA4_XFtm3jShZQM",
          }} // Image of the person giving the testimonial
        />
      </div>
    </div>
  );
};

export default Testimonial;
