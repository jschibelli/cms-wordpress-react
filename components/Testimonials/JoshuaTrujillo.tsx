import React from "react";
import Styles from "./testimonials.module.scss";
import { User } from "@nextui-org/user";

const JoshuaTrujillo = () => {
  return (
    <div className={`${Styles.testimonial_item} max-w-xl`}>
      <div className={`${Styles.testimonial_content}`}>
        <p>
          John was a dedicated hard-working manager. Who was able to resolve the
          initial issues found in our department left by past management. He
          worked long and hard to develop the department into a strong group of
          instructors who were recognized as some of the best in the company.
          This included balancing budgets, instructor development, and helping
          to enhance both customer and employee satisfaction. John is a team
          player; leader and I would recommend him without question for a
          management role.
        </p>
      </div>
      <div className={`${Styles.testimonial_meta}`}>
        <User
          name="Joshua Trujillo"
          description="Marketing Manager"
          avatarProps={{
            src: "https://media.licdn.com/dms/image/D4E03AQH6CC6TaovvZw/profile-displayphoto-shrink_200_200/0/1682098095748?e=1716422400&v=beta&t=oLvJzze9nv8rume_EqGRXYajsEM42HE6LgDbRrtkl9g",
          }}
        />
      </div>
    </div>
  );
};

export default JoshuaTrujillo;
