import React, { useEffect, useState } from "react";
import styles from "./employer.module.scss";

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

function formatDateString(ymdString) {
  // Check if ymdString is null or undefined (or any falsy value)
  if (!ymdString) {
    return "Date not provided"; // Or any placeholder you prefer
  }

  // Proceed as before if ymdString is valid
  const year = ymdString.substring(0, 4);
  const month = ymdString.substring(4, 6);
  const day = ymdString.substring(6, 8);

  const date = new Date(`${year}-${month}-${day}`);
  const options = { year: "numeric", month: "long" };
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
                        {formatDateString(employer.acf?.end_date) ||
                          "Present"}
                      </span>
                      <span className={styles.from}>
                        {formatDateString(employer.acf?.start_date)}
                      </span>
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.title}>{employer.acf.position}</h4>
                      <h5 className={styles.subtitle}>
                        {employer.title.rendered} - {employer.acf.location}
                      </h5>
                      <div className={styles.info}>
                        <div

                          dangerouslySetInnerHTML={{
                            __html: employer.acf?.job_description || "",
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
