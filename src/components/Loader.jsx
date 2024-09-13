import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-[calc(100vw-224px)] h-[calc(100vh)] flex justify-center items-center'>
        <Spin />
    </div>
  )
}

export default Loader