'use client'
import React, { useState } from 'react'
import Topic from './_components/Topic'
import VIdeoStyle from './_components/VIdeoStyle';

const CreateNewvideo = () => {

    const [formData, setFormData] = useState();

    const onInputChange = (FieldName, FieldValue) =>{
        setFormData((prev) => ({
            ...prev,
            [FieldName]: FieldValue
        }));

        console.log(formData);
        
    }
    return (
        <div>
            <h2 className='text-3xl'>Create <span className='text-purple-700'>New Video</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-8'>
                <div className='col-span-2 p-7 border rounded-xl'>
                    {/* topic&script */}
                    <Topic onInputChange={onInputChange}/>
                    {/* video Image style */}
                    <VIdeoStyle />
                    {/* voice */}

                    {/* captions */}
                </div>
                <div></div>
            </div>
        </div>
    )  
}

export default CreateNewvideo
