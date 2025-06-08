const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("API key is missing. Set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

export const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


    export const generateScript = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                {
                    text: `write two different scripts for 30 seconds video on topic : {topic},
                           -Do not add scene description
                           -Do not add anything in braces just give plain text story
                           -Give me the response in Json format and follow the schema
                           -{
                               scripts:[
                                   {
                                       content:""
                                   },
                                ],
                            }`,
                },
            ],
        },
    ],
});


