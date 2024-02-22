import React, { useEffect, useState } from "react";
import styles from "./maintanence.module.scss";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const Maintenance: React.FC = () => {
  // Create a state to store the services in the "Maintenance" category
  const [Maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    // Set the ID of the "Maintenance" category
    const MaintenanceCategoryId = 63;

    // Fetch the services in the "Maintenance" category and set the order to ascending by menu order
    fetch(
      `https://vfo.fzi.mybluehost.me/wp-json/wp/v2/categories=${MaintenanceCategoryId}&order=asc&orderby=menu_order`
    )
      .then((response) => response.json())
      .then((data) => {
        setMaintenance(data);
      })
      // Log an error if one occurs
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.Maintenance}>
      {/* Loop through the services in the "Maintenance" category */}
      {Maintenance.map((service) => (
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
                        {service.acf?.pricing}
                        <small className="text-muted fw-light">/mo</small>
                      </h1>
                      <div
                        className="mt-3 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: service.content.rendered || "",
                        }}
                      ></div>
                      <Button variant="outline-secondary" size="lg">
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
export default Maintenance;
