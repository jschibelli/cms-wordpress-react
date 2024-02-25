import React, { useEffect, useState } from "react";
import styles from "./employer.module.scss";
import Button from "react-bootstrap/Button";


const Employers = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    fetch(
      "https://intrawebtech.com/wp-json/wp/v2/employer"
    )
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
