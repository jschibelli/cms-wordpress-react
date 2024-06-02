// pages/api/chat.ts

import { type NextApiRequest } from "next";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const perplexity = new OpenAI({
  baseURL: "https://api.perplexity.ai",
  apiKey: process.env.PERPLEXITY_API_KEY!,
});

export const runtime = "edge";

export default async function handle(req: NextApiRequest) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.body;

  // Request the Perplexity API for the response based on the prompt
  const response = await perplexity.chat.completions.create({
    model: "pplx-7b-chat",
    stream: true,
    messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
