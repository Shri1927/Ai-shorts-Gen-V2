'use client'
import { useAuthContext } from '@/app/provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'

const AppHeader = () => {
    const {user} = useAuthContext();
  return (
    <div className='flex items-center justify-between p-4'>
        <SidebarTrigger/>
        <Image src={user?.pictureURL}  alt='user' height={40} width={40} className='rounded-full'/>
    </div>
  )
}

export default AppHeader
