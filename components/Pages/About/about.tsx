import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [about, setAbout] = useState(null); // Initialize about as null or an empty object

  useEffect(() => {
    fetch("https://vfo.fzi.mybluehost.me/wp-json/wp/v2/pages/1498")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data); // Set about with the fetched data directly
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="resume-page">
      <div className="max-w-5xl mx-auto">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold h1">Welcome to my universe!</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Hey there! I’m John, a passionate full stack developer with a
              mission to blend creativity with functionality in every line of
              code. Welcome to my digital domain, where innovation meets
              execution, and pixels transform into possibilities.
            </p>
          </div>
        </div>
        {/* Check if about exists before attempting to access its properties */}
        {about && (
          <div key={about.id}>
            <h1>{about.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: about.content.rendered }} />
            </div>
          )}
        </div>
    </div>
  );
};

export default AboutPage;
