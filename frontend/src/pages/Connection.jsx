import React, { useState } from 'react'
import {Users,UserPlus,UserCheck,UserRoundPen,MessageSquare} from 'lucide-react'
import {useNavigate} from 'react-router-dom'
import {
  dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingconnection
} from '../assets/assets'
const Connection = () => {
  const [currentTab,setCurrentTab] = useState('Followers')
  const navigate = useNavigate()
  const dataArray = [
    {label:'Followers',value:followers,icon:Users},
    {label:'Following',value:following,icon:UserCheck},
    {label:'Pending',value:pendingconnection,icon:UserRoundPen},
    {label:'Connections',value:connections,icon:UserPlus},
  ]
  return (
    <div className='bg-slate-50 min-h-screen'>
      <div className='max-w-6xl p-6 mx-auto'>
        {/* title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Connectons</h1>
          <p className="text-slate-600">Manage your network and discover new connectons</p>
        </div>
        {/* counts */}
        <div className='mb-8 flex flex-wrap gap-6'>
          {
            dataArray.map((item,index)=>(
              <div key={index} className='flex flex-col items-center justify-center gap-1 border h-20 w-40 border-gray-200 bg-white shadow rounded-md'>
                <b>{item.value.length}</b>
                <p className='text-slate-600'>{item.label}</p>
              </div>
            ))
          }
        </div>
        {/* Tabs */}
        <div className='inline-flex items-center flex-wrap border border-gray-200 rounded-md p-1 bg-white shadow-sm'>
          {
            dataArray.map((tab)=>(
              <button onClick={()=>setCurrentTab(tab.label)} key={tab.label} className={`flex cursor-pointer items-center px-3 py-1 text-sm rounded-md transition-colors ${currentTab === tab.label ?'bg-white font-medium text-black':"text-gray-500 hover:text-black"}`}>
                <tab.icon className='w-4 h-4'/>
                <span className='ml-1'>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className='ml-2 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full'>{tab.count}</span>
                )}
              </button>
            ))
          }
        </div>
        {/* connections */}
        <div className='flex flex-wrap gap-6 mt-6'>
            {
              dataArray.find((item)=>item.label === currentTab).value.map((user)=>(
                <div className='w-full max-w-88 flex gap-5 p-6 bg-white shadow rounded-md' key={user._id}>
                  <img className='rounded-full w-12 h-12 shadow-md mx-auto' src={user.profile_picture} alt="" />
                  <div className='flex-1'>
                    <p className='font-medium text-slate-700'>{user.full_name}</p>
                    <p className='text-slate-500'>@{user.username}</p>
                    <p className='text-gray-600 text-sm'>@{user.bio.slice(0,30)}...</p>
                    <div className='flex max-sm:flex-col gap-2 mt-4'>
                        {
                          <button onClick={()=>navigate(`/profile/${user._id}`)} className='w-full p-2 text-sm rounded bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition text-white cursor-pointer'>
                            View Profile
                          </button>
                        }
                        {
                          currentTab === 'Following' && (
                            <button className='w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-black active:scale-95 transition cursor-pointer'>Unfollow</button>
                          )
                        }
                        {
                          currentTab === 'Pending' && (
                            <button className='w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-black active:scale-95 transition cursor-pointer'>Accept</button>
                          )
                        }
                                                {
                          currentTab === 'Connections' && (
                            <button onClick={()=>navigate(`/messages/${user._id}`)} className='w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-black active:scale-95 transition cursor-pointer flex items-center justify-center gap-1'>
                              <MessageSquare className='w-4 h-4'/>
                              Message
                              </button>
                          )
                        }
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Connection