// components/App-Pages/Contact/contact.tsx
import React, { useState } from "react";
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
import Testimonials from "../../Carousels/Testimonials/Testimonials";

export default function App() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const variants = ["flat"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (res.ok) {
      setStatus("Message Sent!");
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("Failed to send message");
    }
  };

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
            <h3 className="font-bold">Contact us for a free consultation</h3>
            <h5>What happens Next?</h5>
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

          <div className="w-full md:w-1/2 px-2 pt-10">
            <form onSubmit={handleSubmit}>
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
              <div className="max-w-full flex flex-col gap-2">
                <div className="flex flex-wrap md:flex-nowrap md:mb-0 gap-6 py-6">
                  <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    label="Name"
                  />
                  <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    label="Email"
                    placeholder="Enter Corporate Email"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    label="Description"
                    placeholder="Enter your description"
                    className="max-w-full"
                  />
                </div>
                <div>
                  <Button type="submit" color="primary" variant="ghost">
                    Submit
                  </Button>
                </div>
              </div>
              {status && <p>{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
