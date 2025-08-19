import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import {Menu, X} from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'

const Layout = () => {
  const [isSidebarOpen,setSidebarOpen] = useState(false);
  const user = dummyUserData
  return user ?(
    <div className='w-full flex h-screen'>
      <Sidebar isSidebarOpen ={isSidebarOpen} setSidebarOpen ={setSidebarOpen}/>
      <div className='flex-1 bg-slate-50'>
        <Outlet/>
      </div>
      {
        isSidebarOpen ? <X onClick={()=>setSidebarOpen(false)} className='absolute cursor-pointer top-3 right-3 p-2 z-100  rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'/>:
        <Menu onClick={()=>setSidebarOpen(true)} className='absolute cursor-pointer top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'/>
      }
    </div>
  ):(
    <Loading/>
  )
}

export default Layout