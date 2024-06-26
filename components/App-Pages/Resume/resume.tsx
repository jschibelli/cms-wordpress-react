import React from "react";
import { Button } from "@nextui-org/react";
import Employers from "../../Employer/employer";
import Testimonials from "../../Carousels/Testimonials/Testimonials";
import style from "./resume.module.scss";

const ResumePage = () => {
  return (
    <div className={`${style.resume_container}`}>
      <div className="max-w-6xl mx-auto ">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold h1">John Schibelli</h1>
          <div className="col-lg-6 mx-auto max-w-md">
            <p className="lead mb-4">Full-Stack AI Engineer</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center  ">
              <div id="choose" className=" mt-10 px-6">
                <a
                  href="../../../docs/John-Schibelli_Resume-March-2024.pdf"
                  className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <Employers />
      </div>
    </div>
  );
};

export default ResumePage;
