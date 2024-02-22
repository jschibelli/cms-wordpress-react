import React, { useEffect, useState } from "react";
import styles from "./cmscustomization.module.scss";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const Cmscustomization: React.FC = () => {

  // Create a state to store the services in the "CMS Customization" category
  const [cmscustomization, setCmscustomization] = useState([]);

  useEffect(() => {

    // Set the ID of the "CMS Customization" category
    const cmscustomizationCategoryId = 93;

    // Fetch the services in the "CMS Customization" category and set the order to ascending by menu order
    fetch(
      `https://schibelli.com/wp-json/wp/v2/service?categories=${cmscustomizationCategoryId}&order=asc&orderby=menu_order`
    )
      .then((response) => response.json())
      .then((data) => {
        setCmscustomization(data);
      })
      // Log an error if one occurs
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.cmscustomization}>
      {/* Loop through the services in the "CMS Customization" category */}
      {cmscustomization.map((service) => (

        // Display the service card with the service title, pricing, and content from the WordPress API response.
        <div key={service.id}>
          <div className="my-20">
            <div>
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
                      <h1 className="card-title pricing-card-title " className={styles.cardTitle}>
                        {service.acf?.pricing}
                        <small className="text-muted fw-light">+</small>
                      </h1>
                      <h5 >Technology Stack</h5>
                      <p>{service.acf?.technology_stack}</p>
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
        </div>
      ))}
    </div>
  );
};
export default Cmscustomization;
