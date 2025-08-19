import React, { useEffect, useState } from 'react'
import { dummyStoriesData } from '../assets/assets';
import { Plus } from 'lucide-react';

const StoriesBar = () => {
    const [stories,setStoried] = useState([]);

    const fetchStories = async()=>{
        setStoried(dummyStoriesData);
    }

    useEffect(()=>{
        fetchStories()
    },[])
  return (
    <div className='w-screen sm:w-[calc[100vw-240px]] lg:max-w-2xl no-scrollbar overflow-x-auto px-4'>

        <div className='flex gap-4 pb-5'>
            {/* add story card */}
            <div className='rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed  border-indigo-300 bg-gradient-to-b from-indigo-50 to-white'>
                <div className='flex flex-col items-center justify-center  p-4 h-full'>
                    <div className='bg-indigo-500 size-10 rounded-full flex items-center justify-center mb-3'>
                        <Plus className='w-5 h-5 text-white'/>
                    </div>
                    <p className='text-sm font-medium text-slate-700 text-center'>Create Story</p>
                </div>
            </div>
            {/* list of story */}
        </div>


    </div>
  )
}

export default StoriesBar