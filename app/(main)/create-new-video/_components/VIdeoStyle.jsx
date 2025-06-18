'use client'
import Image from "next/image"
import { useState } from "react";
export const options = [
    {
        name: 'Realastic',
        image: '/real.png'
    },
    {
        name: 'Cartoon',
        image: '/cartoon.png'
    },
    {
        name: 'Cinamatic',
        image: '/cinematic.png'
    },
    {
        name: 'Anime',
        image: '/anime.png'
    },
    {
        name: 'WaterColor',
        image: '/watercolor.png'
    },
    {
        name: 'Cyberpunk',
        image: '/cyber.png'
    },
    {
        name: 'GTA',
        image: '/gta.png'
    },
]

const VIdeoStyle = ({ onInputChange }) => {

    const [selectedStyle, setSelectedStyle] = useState();
    return (
        <div className="mt-5">
            <h2>Video Style</h2>
            <p className="text-sm text-gray-400 mb-1">Select video style</p>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-3 gap-4">
                {options.map((option, idx) => (
                    <div className="relative"  onClick={() => {
                        setSelectedStyle(option.name)
                        onInputChange('videoStyle', option.name)
                    }} key={idx}>
                        <Image src={option.image} key={idx} alt={option.name} height={120} width={500}
                            className={`object-cover h-[90px] lg:h-[120px] xl:h-[180px] rounded-lg p-1
                            hover:border border-gray-400 cursor-pointer
                            ${selectedStyle == option.name && 'borderf'}`}/>

                        <h2 className="absolute text-center bottom-1 w-full">{option.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VIdeoStyle
