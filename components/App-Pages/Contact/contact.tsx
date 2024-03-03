import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { industry } from "./data";

export default function App() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]

  );

  const variants = ["flat"];

  return (
    <div className="contact-page">
      <div className="resume-page">
        <div className="max-w-5xl mx-auto">
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold h1">
              Let's Create Success Together!
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                Your thoughts and inquiries are important, and we're committed
                to providing you with the support and information you need. Fill
                out the form below, drop us an email, or give us a call — we're
                here and eager to hear from you. Let's connect and make great
                things happen together!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap -mx-1">
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-lg font-bold">
              Contact us for a free consultation
            </h1>
            <ul>
              <li>
                An expert contacts you after having analyzed your requirements;
              </li>
              <li>
                If needed, we sign an NDA to ensure the highest privacy level;
              </li>
              <li>
                We submit a comprehensive project proposal with estimates,
                timelines, CVs, etc.
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 px-2">
            <Select
              items={industry}
              label="Select your industry:*"
              placeholder=""
              className="max-w-full"
            >
              {(industry) => (
                <SelectItem key={industry.value}>{industry.label}</SelectItem>
              )}
            </Select>
            <div className="max-w-full flex flex-col gap-4">
              <div className="flex flex-wrap md:flex-nowrap md:mb-0 gap-4 py-6">
                <Input type="name" label="Name" />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter Corporate Email"
                />
              </div>
            </div>
            <div>
              <Textarea
                label="Description"
                placeholder="Enter your description"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
