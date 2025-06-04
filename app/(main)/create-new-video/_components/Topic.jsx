'use client'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
const Topic = () => {

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
    return (
        <div>
            <h2 className='mb-2'>Project Title</h2>
            <Input placeholder='Enter project title' />

            <div className='mt-5'>
                <h2>Video Topic</h2>
                <p className='text-sm text-gray-700'>Selct topic for your video</p>

                
            <Tabs defaultValue="suggestion" className="w-full mt-4" >
                <TabsList>
                    <TabsTrigger value="suggestion">Suggestion</TabsTrigger>
                    <TabsTrigger value="your_topic">Your_topic</TabsTrigger>
                </TabsList>
                <TabsContent value="suggestion">
                    <div>
                        {suggestions.map((suggestion, idx) => (
                            <Button key={idx} variant='outline' className={`m-1 cursor-pointer ${suggestion==selectedTopic && `bg-secondary`}`} 
                             onClick={() => setSelectedTopic(suggestion)}>
                                {suggestion}
                            </Button>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="your_topic">Change your password here.</TabsContent>
            </Tabs>
            </div>

        </div>
    )
}

export default Topic
