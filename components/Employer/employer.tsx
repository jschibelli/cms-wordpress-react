import React, { useEffect, useState } from "react";
import styles from "./employer.module.scss";
import Button from "react-bootstrap/Button";


const Employers = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    fetch("https://vfo.fzi.mybluehost.me/wp-json/wp/v2/employer")
      .then((response) => response.json())
      .then((data) => {
        setEmployers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

function formatDateString(ymdString: string | undefined) {
  if (!ymdString) {
    return "Present"; // Or any placeholder text you prefer
  }

  // Parse the string
  const year = ymdString.substring(0, 4);
  const month = ymdString.substring(4, 6);
  const day = ymdString.substring(6, 8);

  // Create a Date object
  const date = new Date(`${year}-${month}-${day}`);

  // Specify options with explicit types
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric", // TypeScript now knows this is "numeric"
    month: "long", // and this is "long"
  };

  // Format the date
  return date.toLocaleDateString("en-US", options);
}


  return (
    <div className={styles.employer}>
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold  h1">John Schibelli</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Full-Stack Engineer / Ai Specialist</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {  /*  <Button
                    radius="full"
                    variant="outline-secondary"
                    className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg"
                  >
                    Download Resume
  </Button>} */}
            </div>
          </div>
        </div>
      </div>
      {employers.map((employer) => (
        <div key={employer.id}>
          <div className="employer my-20">
            <ul className={styles.timeline}>
              <li className={styles.employerList}>
                <span className={styles.lineLeft}></span>
                <div className={styles.year}>
                  <span className={styles.to}>
                    {formatDateString(employer.acf.end_date) || "Present"}
                  </span>
                  <span className={styles.from}>
                    {formatDateString(employer.acf.start_date)}
                  </span>
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>{employer.acf.job_title}</h4>
                  <h5 className={styles.subtitle}>
                    {employer.title.rendered} - {employer.acf.location}
                  </h5>
                  <div className={styles.info}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: employer.content.rendered || "",
                      }}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employers;
