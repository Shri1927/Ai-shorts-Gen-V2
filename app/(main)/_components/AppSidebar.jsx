'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenu,
  Menu,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileVideo, Gem, HomeIcon, SearchIcon, Wallet } from "lucide-react"
import { useAuthContext } from "@/app/provider"

const AppSidebar = () => {

  const path = usePathname();
  const {user} = useAuthContext();
  const menuItems = [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon
    },
    {
      title: "Create New",
      url: "/create-new-video",
      icon: FileVideo
    },
    {
      title: "Explore",
      url: "/explore",
      icon: SearchIcon
    },
    {
      title: "Billing",
      url: "/billing",
      icon: Wallet
    }
  ]
  return (
    <Sidebar>
      <SidebarHeader />
      <div>
        <div className="flex items-center gap-3 w-full justify-center px-4 py-2 mt-5">
          <Image src={'/logo.svg'} height={40} width={40} alt="logo" />
          <h2 className="font-bold text-2xl">Video Gen</h2>
        </div>
        <h2 className="text-lg text-gray-500 text-center mt-3">AI Short Video Generator</h2>
      </div>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent >
          <div className='mx-3 mt-6'>
            <Link href={'/create-new-video'}>
            <Button className='w-full'>+Create New Video</Button>
            </Link>
          </div>
          <SidebarMenu>
            {menuItems.map((item, index) => (
              <SidebarMenuItem key={index} className='mt-3 mx-3'>
                <SidebarMenuButton isActive={path === item?.url} className='p-5'>
                  <Link href={item?.url} className="flex items-center gap-4 p-3">
                    <item.icon />
                    <span className="ml-2">{item?.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
         <div className=" p-5 border border-gray-800 rounded-lg items-center mb-10">
            <div className="flex justify-between rounded-lg items-center p-2">
          <Gem className="text-gray-500"/>
          <h2 className="text-lg text-gray-500"> {user?.credits} Credits Left</h2>
         </div>
         <Button className='w-full mt-4'>Buy More Credits</Button>
         </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
