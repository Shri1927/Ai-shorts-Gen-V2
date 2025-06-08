'use client'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Loader2Icon, SparkleIcon } from 'lucide-react'
import axios from 'axios'
const Topic = ({onInputChange}) => {

    const suggestions = [
        "Historic Story",
        "Kids Story",
        "Movie Story",
        "AI Innovation",
        "Space Mystries",
        "Mythological Stories",
        "Tech Breakthroughs",
        "True Crime Stories",
        "Fantasy Adventure",
        "Science Experiments",
        "Motivational Stories",
    ];

    const [selectedTopic, setSelectedTopic] = useState();
    const [selectedScriptIndex, setSelectedScriptIndex] = useState();
    const [scripts, setScripts] = useState([]);
    const [loading, setLoading] = useState(false);

    const generateScript = async() => {
        
        setLoading(true);
        try {
            const response = await axios.post('/api/generate-script', {
                topic: selectedTopic
            });
            setScripts(response.data.scripts);
        } catch (error) {
            console.error("Error generating script:", error);
        }
        setLoading(false);

    }
    return (
        <div>
            <h2 className='mb-2'>Project Title</h2>
            <Input placeholder='Enter project title'
            onChange={(e)=>onInputChange('title',e?.target.value)} />

            <div className='mt-5'>
                <h2>Video Topic</h2>
                <p className='text-sm text-gray-700'>Selct topic for your video</p>

                
            <Tabs defaultValue="suggestion" className="w-full mt-4" >
                <TabsList>
                    <TabsTrigger value="suggestion" className='cursor-pointer'>Suggestion</TabsTrigger>
                    <TabsTrigger value="your_topic" className='cursor-pointer'>Your_topic</TabsTrigger>
                </TabsList>
                <TabsContent value="suggestion">
                    <div>
                        {suggestions.map((suggestion, idx) => (
                            <Button key={idx} variant='outline' className={`m-1 cursor-pointer ${suggestion==selectedTopic && `bg-secondary`}`} 
                             onClick={() => {setSelectedTopic(suggestion)
                                onInputChange('topic', suggestion)}
                             }>
                                {suggestion}
                            </Button>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="your_topic">
                    <div>
                        <h2>Enter your own topic</h2>
                        <Textarea placeholder='Enter your topic' className='mt-2'
                          onChange={(e) => onInputChange('topic',e.target.value)} />
                    </div>
                </TabsContent>
            </Tabs>

                {scripts.length > 0  && 
                <div className='mt-4'>
                    <h2>Select the Script</h2>
                    <div className='grid grid-cols-2 gap-5 mt-2'>
                    {scripts.map((script,idx) => (
                        <div
                            className={`p-3 border rounded-lg cursor-pointer ${selectedScriptIndex === idx && 'bg-secondary border-white'}`}
                            onClick={() => setSelectedScriptIndex(idx)}
                            key={idx}
                        >
                            <h2 className='line-clamp-4 text-sm text-gray-300'>{script.content}</h2>
                        </div>
                    ))}
                </div>
                </div> }
        

            {!scripts && <Button className='mt-2 cursor-pointer' onClick={generateScript} disabled={loading}> 
                {loading ? <Loader2Icon className='animate-spin'/> :<SparkleIcon/>}Generate Script</Button>}
            </div>
        </div>
    )
}

export default Topic
