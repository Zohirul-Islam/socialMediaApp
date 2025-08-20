import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react'

const StoryModel = ({setShowModel,fetchStories}) => {
    /* state start */
    const bgColor = ['#4f46ef','#7c3aed','#db2777','#e11d48','#ca8a04']
    const [mode,setMode] = useState('text');
    const [background,setBackground] = useState(bgColor[0])
    const [text,setText] = useState('');
    const [media,setMedia] = useState(null);
    const [previewUrl,setpreviewUrl] = useState(null);
    /* state ends */

    const handleMediaUpload = (e) =>{
        const file = e.target.files?.[0];
        if(file){
            setMedia(file)
            setpreviewUrl(URL.createObjectURL(file))
        }
    }
    const handleCreateStory =async()=>{

    }

  return (
    <div className='fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
            <div className='text-center mb-4 flex items-center justify-between'>
                <button onClick={()=>setShowModel(false)} className='text-white p-2 cursor-pointer'>
                    <ArrowLeft/>
                </button>
                <h2 className='text-lg font-medium'>Create Story</h2>
                <span className='w-10'></span>
            </div>
        </div>
    </div>
  )
}

export default StoryModel