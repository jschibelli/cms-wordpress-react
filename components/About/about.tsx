import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [about, setAbout] = useState(null); // Initialize about as null or an empty object.

  useEffect(() => {
    fetch("https://vfo.fzi.mybluehost.me/wp-json/wp/v2/pages/1498")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data); // Set about with the fetched data directly
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {/* Check if about exists before attempting to access its properties */}
      {about && (
        <div key={about.id}>
          <h1>{about.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: about.content.rendered }} />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
