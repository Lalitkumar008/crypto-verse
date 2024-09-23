import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate();
  return (
    <div className=' w-[100vw] h-[100vh]'
    style={{display:'flex',flexDirection:'column',
        justifyContent:'center',
        
    }}
    >
        <p className='text-center font-extrabold text-6xl text-zinc-800 font-mono'>404</p>
    <p className='  text-5xl text-center'>Page not found</p>
    <p onClick={()=>navigate('/')} className='text-center my-4 text-blue-500 underline cursor-pointer '>Go back to homepage</p>
     </div>
  )
}

export default Error