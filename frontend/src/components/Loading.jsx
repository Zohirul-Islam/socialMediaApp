import React from 'react'

const Loading = ({height='100vh'}) => {
  return (
    <div style={{height}} className='flex justify-center items-center h-screen'>
        <p className='animate-spin w-10 h-10 rounded-full border-purple-600 border-4 border-t-transparent'></p>
    </div>
  )
}

export default Loading