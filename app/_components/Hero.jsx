'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-16'>
      <h1 className="text-6xl md:text-5xl lg:text-7xl font-bold leading-tight text-center">
        Turn your <span className="text-purple-700">scripts</span> into <br /> viral <span className="text-purple-700">short videos</span>
      </h1>

      <p className="text-lg text-muted-foreground text-center">
        Script2Shorts uses AI to transform your text into engaging videos for TikTok,<br />
        Instagram Reels, and YouTube Shorts - in seconds.
      </p>

      <div className='flex gap-4 mt-6'>
        <Button className='flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white cursor-pointer' size='lg'>Create Your First Video
          <Image src="./rightArrow.svg" alt="rightArrow" width={20} height={20} />
        </Button>
        <Button className='flex items-center gap-2 cursor-pointer border-purple-400 text-white' variant='outline' size='lg'>
          <Image src="./player.svg" alt='player' width={20} height={20} /> Watch Demo
        </Button>
      </div>
    </div>
  )
}

export default Hero
