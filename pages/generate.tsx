import React, { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";

const GeneratePage = () => {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Generating code...");
    const res = await fetch("/api/generateCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (res.ok) {
      const data = await res.json();
      setStatus(`Code generated successfully! File path: ${data.filePath}`);
      setPrompt("");
    } else {
      setStatus("Failed to generate code");
    }
  };

  return (
    <div className="generate-page">
      <form onSubmit={handleSubmit}>
        <Textarea
          name="prompt"
          value={prompt}
          onChange={handleChange}
          label="Enter your prompt"
          placeholder="Enter your prompt"
        />
        <Button type="submit" color="primary" variant="ghost">
          Generate Code
        </Button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default GeneratePage;
