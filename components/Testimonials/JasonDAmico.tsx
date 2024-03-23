
import React from "react";
import Styles from "./testimonials.module.scss";
import { User } from "@nextui-org/user";

const JasonDAmico = () => {
  return (
    <div className={`${Styles.testimonial_item}  max-w-xl `}>
      <div className={`${Styles.testimonial_content}`}>
        <p>
          John Schibelli is one of the most stand up, motivated people I know.
          His superior business sense, artistic ability, troubleshooting and
          flexible adaptabilty is only equal to his kindness, patience and
          leadership qualities. John's fierce loyalty to his colleagues and
          morals makes him someone that you want to work with. You would be very
          lucky to have John on your team.
        </p>
      </div>
      <div className={`${Styles.testimonial_meta}`}>
        <User
          name="Jason D'Amico"
          description="Senior Web Developer"
          avatarProps={{
            src: "https://media.licdn.com/dms/image/D4E35AQG7AZhNz0MtUw/profile-framedphoto-shrink_800_800/0/1707920449142?e=1711821600&v=beta&t=zD3AGdYgi7xclh3IIV31GxAEeQJwzA4_XFtm3jShZQM",
          }}
        />
      </div>
    </div>
  );
};

export default JasonDAmico;
