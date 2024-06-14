import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { OpenAI } from "openai";
import { v4 as uuidv4 } from "uuid";

// Function to call your LLM Studio API
async function callLLM(prompt: string): Promise<string> {
  const client = new OpenAI({
    baseURL: "http://localhost:1234/v1",
    apiKey: "lm-studio",
  });

  const history = [
    {
      role: "system",
      content:
        "You are an intelligent assistant. You always provide well-reasoned answers that are both correct and helpful.",
    },
    {
      role: "user",
      content: prompt,
    },
  ];

  const completion = await client.chat.completions.create({
    model: "lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF",
    messages: history,
    temperature: 0.7,
    stream: false,
  });

  const newMessage = { role: "assistant", content: "" };

  for (const chunk of completion.choices[0].message.content) {
    newMessage.content += chunk;
  }

  return newMessage.content;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    try {
      // Log the incoming prompt
      console.log("Received prompt:", prompt);

      const generatedCode = await callLLM(prompt);

      // Ensure the 'generated' directory exists
      const dirPath = path.join(process.cwd(), "generated");
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }

      // Define the file path with a unique identifier (UUID)
      const uniqueFileName = `generatedCode_${uuidv4()}.js`;
      const filePath = path.join(dirPath, uniqueFileName);

      // Write the generated code to a file
      fs.writeFile(filePath, generatedCode, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).json({ error: "Failed to write file" });
        }
        res
          .status(200)
          .json({ message: "File written successfully", filePath });
      });
    } catch (error) {
      console.error("Error in handler:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
