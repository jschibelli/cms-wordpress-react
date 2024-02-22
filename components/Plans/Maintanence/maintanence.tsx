import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import styles from "./maintanence.module.scss";

const Maintanence: React.FC = () => {

  // Create a state to store the services in the "Maintenance" category
  const [maintanence, setMaintanence] = useState([]);

  useEffect(() => {

  const fetchUrl = `https://vfo.fzi.mybluehost.me/wp-json/wp/v2/service`;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      // Validate data structure here
      if (Array.isArray(data)) {
        setMaintanence(data);
      } else {
        console.error("Fetched data is not an array:", data);
        setMaintanence([]); // Reset or set to a default array to avoid runtime errors
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setMaintanence([]); // Handle fetch error by setting maintanence to an empty array
    });
}, []);

  return (
    <div className={styles.maintanence}>
      {/* Loop through the services in the "Maintenance" category */}
      {maintanence.map((service) => (
        <div key={service.id}>
          <div className="my-1">
            <div className="row row-cols-1 row-cols-md-1 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className={styles.cardBody}>
                    <div className="card-header py-3">
                      <h4 className="my-0 fw-normal">
                        {service.title.rendered}
                      </h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        {service.acf.price}
                        <small className="text-muted fw-light">/mo</small>
                      </h1>
                      <div
                        className="mt-3 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: service.content.rendered || "",
                        }}
                      ></div>
                      <Button color="primary" variant="bordered" size="lg">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Maintanence;
