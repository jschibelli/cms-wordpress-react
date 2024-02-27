import React from "react";
import Employers from "../../Employer/employer";
import { Button } from "@nextui-org/react";

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="max-w-5xl mx-auto">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold h1">John Schibelli</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Full-Stack AI Engineer</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <div id="choose" className="w-auto mt-10 px-6">
                <a
                  href="#"
                  className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
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
