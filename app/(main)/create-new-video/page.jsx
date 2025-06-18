'use client'
import React, { useState } from 'react'
import Topic from './_components/Topic'
import VIdeoStyle from './_components/VIdeoStyle';
import Voice from './_components/Voice';
import Captions from './_components/Captions';
import { Loader2Icon, WandSparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Preview from './_components/Preview';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useAuthContext } from '@/app/provider';


const CreateNewvideo = () => {

    const [formData, setFormData] = useState({});
    const createInitialVideoReacord = useMutation(api.videoData.createVideoData);
    const { user } = useAuthContext();
    const [loading, setLoading] = useState(false);

    const onInputChange = (FieldName, FieldValue) => {
        setFormData((prev) => ({
            ...prev,
            [FieldName]: FieldValue
        }));

        console.log(formData);

    }

    const GenerateVideo = async () => {
        console.log("Current form data : ", formData);

        if (!formData?.topic || !formData?.script || !formData?.videoStyle || !formData?.voice || !formData?.caption) {
            console.log("ERROR : Please fill all the fields");
            console.log(formData?.script);
            return;
        }
        setLoading(true);

        // Create initial video record in convex
        const response = await createInitialVideoReacord({
            title: formData?.title,
            topic: formData?.topic,
            script: formData?.script,
            videoStyle: formData?.videoStyle,
            caption: formData?.caption,
            voice: formData?.voice,
            uid: user?._id,
            createdBy: user?.email
        });

        console.log("Video Data Created in Convex : ", response);

        const result = await axios.post('/api/generate-video-data', {
            ...formData
        })
        setLoading(false);
    }
    return (
        <div>
            <h2 className='text-3xl'>Create <span className='text-purple-700'>New Video</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-7'>
                <div className='col-span-2 p-7 border rounded-xl h-[75vh] overflow-auto'>
                    {/* topic&script */}
                    <Topic onInputChange={onInputChange} />
                    {/* video Image style */}
                    <VIdeoStyle onInputChange={onInputChange} />
                    {/* voice */}
                    <Voice onInputChange={onInputChange} />
                    {/* captions */}
                    <Captions onInputChange={onInputChange} />
                    <Button className='w-full mt-5 cursor-pointer'
                        onClick={GenerateVideo}
                        disabled={loading}
                    > {loading ? <Loader2Icon className='animate-spin' /> : <WandSparkles />}Generate Video</Button>
                </div>
                <div>
                    <Preview formData={formData} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewvideo
