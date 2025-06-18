'use client'
import React, { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
 const voices = [
        {
            "value": "af_sarah",
            "name": "🇺🇸 Sarah (Female)"
        },
        {
            "value": "af_sky",
            "name": "🇺🇸 Sky (Female)"
        },
        {
            "value": "am_adam",
            "name": "🇺🇸 Adam (Female)"
        },
        {
            "value": "hf_alpha",
            "name": "🇮🇳 Alpha (Female)"
        },
        {
            "value": "hf_beta",
            "name": "🇮🇳 Beta (Female)"
        },
        {
            "value": "hm_omega",
            "name": "🇮🇳 Omega (Male)"
        },
        {
            "value": "hm_psi",
            "name": "🇮🇳 Psi (Male)"
        },
        {
            "value": "am_echo",
            "name": "🇺🇸 Echo (Male)"
        },
        {
            "value": "am_eric",
            "name": "🇺🇸 Eric (Male)"
        },
        {
            "value": "am_fenrir",
            "name": "🇺🇸 Fenrir (Male)"
        },
        {
            "value": "am_liam",
            "name": "🇺🇸 Liam (Male)"
        },
        {
            "value": "am_michael",
            "name": "🇺🇸 Michael (Male)"
        },
        {
            "value": "am_onyax",
            "name": "🇺🇸 Onyax (Male)"
        }

    ];
const Voice = ({onInputChange}) => {

    const [selectedVoice, setSelectedVoice] = useState();
    return (
        <div className='mt-5'>
            <h2>Voices</h2>
            <p className='text-sm text-gray-400 mb-2'>Select voice for your video</p>
            <ScrollArea className='h-[150px] w-full'>
            <div className='grid grid-cols-2 gap-2'>
                {voices.map((voice, idx) => (
                    <h2 key={idx}
                    className={`cursor-pointer p-3 dark:bg-slate-900 dark:border-white
                         rounded-lg hover:border ${voice.name == selectedVoice && 'border'}`}
                    onClick={ () => {setSelectedVoice(voice)
                        onInputChange('voice', voice.value)
                    }}>{voice.name}</h2>
                ))}
            </div>
            </ScrollArea>
        </div>
    )
}

export default Voice
