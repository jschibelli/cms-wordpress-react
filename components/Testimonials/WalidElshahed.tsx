import React from "react";
import Styles from "./testimonials.module.scss";
import { User } from "@nextui-org/user";

const WalidElshahed = () => {
  return (
    <div className={`${Styles.testimonial_item} max-w-xl`}>
      <div className={`${Styles.testimonial_content}`}>
        <p>
          John was instrumental in helping take a new program and turning it
          into one of the most respected and profitable programs at Anthem
          Institute. John took the time to hire a team of instructors, including
          myself, who's skills and personalities complimented each other. This
          proved to be an excellent strategy as it meant the team was stronger
          and worked much better together. John always promoted our development
          and worked hard to make sure the resources were available for us to do
          so. He is very well organized, creative, and has excellent leadership
          skills. It was a pleasure working with him.
        </p>
      </div>
      <div className={`${Styles.testimonial_meta}`}>
        <User
          name="Walid Elshahed"
          description="Creative Director | Frontend Developer | UX Wizard"
          avatarProps={{
            src: "https://media.licdn.com/dms/image/D4D03AQG717x-p356AA/profile-displayphoto-shrink_200_200/0/1703867939567?e=1716422400&v=beta&t=ZBMm3kESbh4rkZvoEekkwGbzzqSQVInop-NFB1SmBVc",
          }}
        />
      </div>
    </div>
  );
};

export default WalidElshahed;
