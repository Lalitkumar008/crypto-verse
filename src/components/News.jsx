import React, { useEffect, useState } from 'react'
import { getAllNewsData } from '../services/crypto'
import { Col, Row } from 'antd';

const News = () => {
  const [newsData,setNewsData]=useState();
  useEffect(()=>{
getAllNewsData(onSuccess,onFailure);
  },[])
  const onSuccess=(e)=>{
    setNewsData(e?.data?.items);
  }
  const onFailure=(e)=>{
    console.log(e)
  }
  return (
    <div className=" overflow-auto">
      <div className='flex flex-wrap gap-4'>{newsData?.map((item,index)=>{
        return index<10&&<div span={6} key={item.timestamp} className=' flex-wrap bg-white gap-2 w-48 h-48 p-2'>
          {/* <img src={item.} alt="" /> */}
<p>{item.title}</p>
<a className='text-blue-400' href={item.newsUrl}>visit</a>
        </div>
      })}</div>
       </div>
  )
}

export default News