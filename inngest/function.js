import { createClient } from "@deepgram/sdk";
import { inngest } from "./client";
import axios from "axios";
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

const BASE_URL=process.env.NEXT_PUBLIC_AIGURULAB_BASE_URL;
export const GenerateVideoData = inngest.createFunction(
    {id : "generate-video-data"},
    {event: "generate/video.data"},
    
    async ({event, step}) => {
        const {script, topic, title, caption, videoStyle, voice} = event?.data;
        // Genrate audiofile MP3
        const audioFile = await step.run(
            "Generate audio file", async () => {
        //         const result = await axios.post(BASE_URL+'/api/text-to-speech',
        // {
        //     input: script,
        //     voice: voice,
        // },
        // {
        //     headers: {
        //         'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
        //         'Content-Type': 'application/json', // Content Type
        //     },
        // }) 
        //     return result.data.audio;
            return "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/audio%2F1750227547881.mp3?alt=media&token=eccc9076-1ddc-4a37-a2cb-eaa63d48d224";
        });

        const generateCaptions = await step.run(
            'generateCaptions',
            async() => {
                const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);

                const {result, err} = await deepgram.listen.prerecorded.transcribeUrl(
                    {
                        url: audioFile,
                    },
                    {
                        model: 'nova-3',
                    }
                )
                
                return result;
            }
        )

        return generateCaptions;
    },
)