'use client'
import React, { use } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'
import Link from 'next/link'
const Header = () => {
    const { user } = useAuthContext();
    return (
        <div className='flex justify-between items-center p-4 shadow-md'>
            <div className='flex items-center gap-2 p-4'>
                <Image src={'/logo.svg'} alt={"logo"}
                    height={30}
                    width={30}
                    className='cursor-pointer'
                />
                <h2 className='text-xl font-bold cursor-pointer'>Video Gen</h2>
            </div>
            <div>
                {!user? <Authentication>
                    <Button className='cursor-pointer'>Get Started</Button>
                </Authentication>
                    : <div className='flex items-center gap-3'>
                        <Link href={'/dashboard'}>
                        <Button className='bg-purple-700 text-white cursor-pointer'>Dashboard</Button>
                        </Link>
                        <Image src={user?.pictureURL} alt='photo' 
                        className='rounded-full' height={36} width={36} />
                    </div>}
            </div>
        </div>
    )
}

export default Header
