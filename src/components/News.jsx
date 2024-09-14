import React, { useEffect } from 'react'
import { getAllNewsData } from '../services/crypto'

const News = () => {
  useEffect(()=>{
getAllNewsData(onSuccess,onFailure);
  },[])
  const onSuccess=(e)=>{
    console.log(e)
  }
  const onFailure=(e)=>{
    console.log(e)
  }
  return (
    <div className=" overflow-auto">News </div>
  )
}

export default News