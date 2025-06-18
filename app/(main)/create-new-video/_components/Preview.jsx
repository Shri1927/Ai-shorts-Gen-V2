'use client'
import React from 'react'
import { options } from './VIdeoStyle';
import Image from "next/image";

const Preview = ({formData}) => {
    const selectVideoStyle = formData&&options.find((item) => item?.name === formData?.videoStyle);
    console.log(formData?.caption?.name);
    
  return formData?.videoStyle &&(
    <div className='relative'>
       <h2 className='mb-3 text-2xl'>Preview</h2>
       <Image src={selectVideoStyle?.image} alt={selectVideoStyle?.name}
       width={400}
       height={700}
       className='w-full h-[70vh] object-cover rounded-xl'
       />
       <h2 className={`${formData?.caption?.style} absolute bottom-7 w-full text-center`}>{formData?.caption?.name}</h2>
    </div>
  )
}
  
export default Preview
