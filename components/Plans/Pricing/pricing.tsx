import React from "react";

const Pricing = () => {
  return (
    <div className="hire-me">
      <div className="max-w-1xl mx-auto">
        <div className="antialiased w-full h-full text-gray-400 font-inter p-10">
          <div className="container px-4 mx-auto">
            <div>
              <div id="title" className="text-center my-10">
                <h1 className="font-bold text-4xl text-white">
                  Choose Your Success Plan
                </h1>
                <p className="text-light text-gray-500 text-xl">
                  Select the Perfect Development Package to Empower Your Website
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
                <div
                  id="plan"
                  className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                >
                  <div
                    id="title"
                    className="w-full py-5 border-b border-gray-800"
                  >
                    <h2 className="font-bold text-3xl text-white">Startup</h2>
                    <h3 className="font-normal text-indigo-500 text-xl mt-2">
                      <span className="text-sm">Starting at</span> $1,800
                    </h3>
                  </div>
                  <div id="content" className="">
                    <div id="icon" className="my-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-500 text-md pt-2">
                        Perfect individuals or startups
                      </p>
                    </div>
                    <div
                      id="contain"
                      className="leading-8 mb-10 text-lg font-light"
                    >
                      <ul>
                        <li>Up to five pages</li>
                        <li>Responsive design</li>
                        <li>Basic contact form </li>
                        <li>Social media integration</li>
                        <li>Initial setup of Google Analytics</li>
                      </ul>
                      <div id="choose" className="w-auto mt-10 px-6">
                        <a
                          href="#"
                          className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                        >
                          Choose
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="plan"
                  className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                >
                  <div
                    id="title"
                    className="w-full py-5 border-b border-gray-800"
                  >
                    <h2 className="font-bold text-3xl text-white">Corporate</h2>
                    <h3 className="font-normal text-indigo-500 text-xl mt-2">
                      <span className="text-sm">Starting at</span> $3,600
                    </h3>
                  </div>
                  <div id="content" className="">
                    <div id="icon" className="my-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <p className="text-gray-500 text-sm pt-2">
                        Medium-sized businesses
                      </p>
                    </div>
                    <div
                      id="contain"
                      className="leading-8 mb-10 text-lg font-light"
                    >
                      <ul>
                        <li>All features from the Startup Package</li>
                        <li>Up to ten pages</li>
                        <li>Custom design and basic SEO</li>
                        <li>CMS integration (WordPress)</li>
                        <li>Basic e-commerce setup</li>
                        <li>One month of post-launch support</li>
                      </ul>
                      <div id="choose" className="w-full mt-10 px-6">
                        <a
                          href="#"
                          className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                        >
                          Choose
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="plan"
                  className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
                >
                  <div
                    id="title"
                    className="w-full py-5 border-b border-gray-800"
                  >
                    <h2 className="font-bold text-3xl text-white">
                      Enterprise
                    </h2>
                    <h3 className="font-normal text-indigo-500 text-xl mt-2">
                      $1500/month
                    </h3>
                  </div>
                  <div id="content" className="">
                    <div id="icon" className="my-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <p className="text-gray-500 text-sm pt-2">
                        Perfect large scale team
                      </p>
                    </div>
                    <div
                      id="contain"
                      className="leading-8 mb-10 text-lg font-light"
                    >
                      <ul>
                        <li>Weekly software updates</li>
                        <li>Daily backups w/ recovery support</li>
                        <li>Weekly performance checks</li>
                        <li>
                          24/7 priority support via email, phone, and chat
                        </li>
                        <li>Up to 20 hours of maintenance </li>
                      </ul>
                      <div id="choose" className="w-full mt-10 px-6">
                        <a
                          href="#"
                          className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                        >
                          Choose
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
