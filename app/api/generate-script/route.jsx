import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = 
`Write exactly two scripts for a 30-second video on the topic: {topic}.
- Do NOT include scene descriptions.
- Do NOT include anything in parentheses or braces.
- Do NOT return any code, functions, or JavaScript-like output.
- Respond with ONLY a valid JSON object.
- Follow this exact schema:

{
  "scripts": [
    { "content": "..." },
    { "content": "..." }
  ]
}`;

export async function POST(req) {
  const { topic } = await req.json();
  const PROMPT = SCRIPT_PROMPT.replace('{topic}', topic);

  const result = await generateScript.sendMessage(PROMPT);

  // Check if result.response.text is a function (common in fetch-like APIs)
  let res;
  if (typeof result.response.text === "function") {
    res = await result.response.text();
  } else {
    res = result.response.text;
  }
  console.log(res);

  // Extract JSON from the response
  let jsonString = res;
  const match = typeof res === "string" ? res.match(/\{[\s\S]*\}/) : null;
  if (match) {
    jsonString = match[0];
  }

  try {
    return NextResponse.json(JSON.parse(jsonString));
  } catch (e) {
    return NextResponse.json({ error: "Failed to parse JSON from model response", raw: res }, { status: 500 });
  }
}