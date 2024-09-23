import React, { useContext, useEffect, useState } from 'react'
import { Card, Input } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { CryptoContext } from '../context/CryptoContext';
import { configConsumerProps } from 'antd/es/config-provider';
import Loader from './Loader';
const CryptoCurrencies = () => {
  
  const [showSerach,setShowSearch]=useState(false);
  const [searchValue,setSearchValue]=useState();
  const {coinsData,statsData,notificationMsg,notificationStatus,isLoading}=useContext(CryptoContext)
  const [copyCoinsData,setCopyCoinsData]=useState();
  const [allCoinsData,setAllCoinsData]=useState([])
  useEffect(()=>{
    if(window.location.href.includes("crypto"))
setShowSearch(true);
    setCopyCoinsData(coinsData);
    setAllCoinsData(coinsData);
  },[coinsData])
  console.log(copyCoinsData)

  // search function
  const handleInputChange=(e)=>{
    console.log("working")
let query=(e.target.value).toLowerCase();
if(!query) {
  setAllCoinsData(copyCoinsData)
}

let tempCoinsData=copyCoinsData?.filter((item)=>(item.name).toLowerCase().includes(query))
// if(tempCoinsData.length!==0)
setAllCoinsData(tempCoinsData)

  }


  return isLoading?<Loader />:(
    <div className={`w-[calc(100vw-224px)] h-[calc(100vh)] overflow-auto p-2`}>
       <div className=' mb-4 flex justify-center '>
         {showSerach&&<div className=''> 
          <Input className='w-64 h-10'
        placeholder='search crypto'
        value={searchValue}
        name='searchedQuery'
        onChange={handleInputChange}
        />
    </div>}
       </div>
      {showSerach && <div>
        {allCoinsData?.length!==0?<p className='flex text-zinc-700 justify-center font-semibold mb-2' >Total : {allCoinsData?.length} exchanges</p>:<p className='text-2xl capitalize text-center'>no exchanges found</p>}
      </div>}
     <div className='flex flex-wrap justify-start gap-2'>
       {allCoinsData?.map((item,index)=>{
        return !showSerach? (
         index<10&& <Link className='' to={`/crypto/${item.uuid}`}><Card 
        title={`${item.rank}. ${item.name}`} key={item.uuid}
        hoverable
        className='w-64  rounded-none ' 
        extra={<img src={item.iconUrl} className='w-4' />}
        >
<p className='mb-1'>Price : {millify(item.price)} <span
className='font-extralight text-[12px]'
>(USD)</span></p>
<p className='mb-1'>Market Cap :{millify(item.marketCap)}</p>
<p className='mb-1'>Daily Change :{millify(item.change)}</p>
        </Card></Link> 
        )
        :
         <Link className='' to={`/crypto/${item.uuid}`}><Card 
        title={`${item.rank}. ${item.name}`} key={item.uuid}
        hoverable
        className='w-64  rounded-none ' 
        extra={<img src={item.iconUrl} className='w-4' />}
        >
<p className='mb-1'>Price : {millify(item.price)}</p>
<p className='mb-1'>Market Cap :{millify(item.marketCap)}</p>
<p className='mb-1'>Daily Change :{millify(item.change)}</p>
        </Card></Link>
      })}
     </div>
      
    </div>
  )
}

export default CryptoCurrencies