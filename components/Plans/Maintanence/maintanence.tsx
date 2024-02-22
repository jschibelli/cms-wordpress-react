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
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <h2 className="text-md">{service.title.rendered}</h2>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className={styles.cardBody}>
                <div
                  className="mt-3 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: service.content.rendered || "",
                  }}
                ></div>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button color="primary" variant="bordered">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Maintanence;
