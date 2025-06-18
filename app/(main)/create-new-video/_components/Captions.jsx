'use client'
import React, { useState } from 'react'
const options = [
    {
        name:'Youtuber',
        style:'text-yellow-400 text-3xl font-extrabold uppercase tracking-wide  drop-shadow-md px-3 py-1 rounded-lg',
    },
    {
        name:'Supreme',
        style:'text-white text-3xl font-bold italic drop-shadow-lg px-3 py-1 rounded-lg',
    },
    {
        name:'Neon',
        style:'text-green-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg',
    },
    {
        name:'Glitch',
        style:'text-pink-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] px-3 py-1 rounded-lg',
    },
    {
        name:'Fire',
        style:'text-red-400 text-3xl font-extrabold uppercase px-3 py-1 rounded-lg',
    },
    
]

const Captions = ({onInputChange}) => {
    const [selectCaption, setSelectCaption] = useState();
    return (
        <div className='mt-5'>
            <h2>Captions</h2>
            <p className='text-sm text-gray-400'>Select Caption Style</p>

            <div className='flex flex-wrap gap-4 mt-3'>
                {options.map((option, idx) => (
                    <div key={idx} className={`cursor-pointer p-3 dark:bg-slate-900 dark:border-white
                        rounded-lg hover:border ${selectCaption == option.name && 'border'}`}
                        onClick={ () => {
                            setSelectCaption(option)
                            onInputChange('caption', option)
                        }}>
                        <h2 className={option.style} key={idx}> {option.name} </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Captions
