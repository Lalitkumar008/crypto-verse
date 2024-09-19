import React, { useEffect, useState } from 'react'
import { getCoinDataById } from '../services/crypto'
import { useParams } from 'react-router-dom'
import { Col, Divider, Row, Select, Typography } from 'antd'
import Loader from './Loader'
import millify from 'millify'
import {  FireFilled } from '@ant-design/icons'
import LineChart from './LineChart'
import { getCoinPriceHistory } from '../services/crypto';
import Notification from './Notification'
const CryptoDetails = () => {
  const [cryptoData,setCryptoData]=useState();
  const [valueStatsData,setValueStatsData]=useState();
  const [otherStatsData,setOtherStatsData]=useState();
  const [isLoading,setIsLoading]=useState(true);

  const {Title,Text}=Typography;
  const {id}=useParams();
      const [timePeriodOptions,setTimePeriodOptions]=useState(["1h","3h","12h","24h","7d","30d","3m","1y","3y","5y"])
   const [timePeriod,setTimePeriod]=useState('7d')
    const [notificationStatus,setNotificationStataus]=useState()
  const [notificationMsg,setNotificationMsg]=useState();
      const [allData,setAllData]=useState();
  useEffect(()=>{
getCoinDataById(onFetchCoinByIdSuccess,onFetchCoinByIdFailure,id)

  },[])
  useEffect(()=>{
getCoinPriceHistory(onFetchCoinHistorySuccess,onFetchCoinHistoryFailure,id,timePeriod)
  },[timePeriod])
  useEffect(()=>{
const valueStats=[
  {
    // icon:<FireFilled />,
    text:"Price to USD",
    value:`$ ${millify(cryptoData?.price)}` || "N/A"
  },
  {
    text:"rank",
    value:cryptoData?.rank || "N/A"
  },
  {
    text:"24h volume",
    value:cryptoData?.hVolume || "N/A"
  },
  {
    text:"market cap",
    value:`$ ${millify(cryptoData?.marketCap)}` || "N/A"
  },
  {
    text:"All-time-high(daily avg.)",
    value:`$ ${millify(cryptoData?.allTimeHigh.price)}` || "N/A"
  },
]
const otherStats=[
  {
    icon:<FireFilled />,
    text:"number of market",
    value:cryptoData?.numberOfMarkets || "N/A"
  },
  {
    text:"number of exchanges",
    value:cryptoData?.numberOfExchanges || "N/A"
  },
  {
    text:"approved supply",
    value:cryptoData?.supply?.confirmed?"Yes":"No" || "N/A"
  },
  {
    text:"total supply",
    value:`$ ${millify(cryptoData?.supply.total)}` || "N/A"
  },
  {
    text:"circulating supply",
    value:`$ ${millify(cryptoData?.supply.circulating)}` || "N/A"
  },
]
setValueStatsData(valueStats)
setOtherStatsData(otherStats)
  },[cryptoData])

  // Fetch by id
  const onFetchCoinByIdSuccess=(e)=>{
    setCryptoData(e?.data?.data?.coin);
    setIsLoading(false)
  }
  const onFetchCoinByIdFailure=(e)=>{}

  // Fetch history bytimperiod
  console.log(allData)

   const onFetchCoinHistorySuccess=(e)=>{
    setAllData(e?.data?.data)
      
         setNotificationStataus(true);
   setNotificationMsg(e?.data?.status)
          setIsLoading(false);
              
  }

  const onFetchCoinHistoryFailure=(e)=>{console.log(e)
  setNotificationStataus(false);
  }
  const handleTimePeriodOptions=(value)=>{
  // console.log(value)
  setTimePeriod(value)
}
const [showGraph,setShowGraph]=useState(false)
useEffect(()=>{
setTimeout(()=>{
setShowGraph(true);
},1000)
},[showGraph])
console.log(showGraph)
  return isLoading ?<Loader />:  (
    <div className='w-[calc(100vw-224px)] overflow-auto h-[100vh]  p-2'>
      <Notification status={notificationStatus} notificationMsg={notificationMsg}/>

<div className=''>
  <p className='text-3xl mt-8  font-bold text-blue-500 text-center '> 
  {cryptoData?.name} ({cryptoData?.symbol}) Price
</p>
<p className='text-center mt-4 capitalize  text-gray-500 '>
  {cryptoData?.name} live price in USD.View value statistics , market cap and supply. 
</p>
</div>
<Divider dashed className=''/>

<div className='font-bold '>

<Select
 placeholder='7d'
 className='w-20 h-7 border-none'
 onChange={handleTimePeriodOptions}
 >
    {timePeriodOptions.map((item,index)=>{
  return  <Select.Option  key={index} value={item}>{item}</Select.Option>
  })} </Select> 
{/* </Col> */}

{/* <p className='h-96 flex justify-center items-center capitalize bg-blue-400 text-7xl font-semibold text-blue-700 '>graph</p> */}
{showGraph && <LineChart coinId={id} cryptoName={cryptoData?.name} currentPrice={cryptoData?.price} allData={allData}/>}
</div>

{/* crypto extra details */}
<div className='p-3 bg-green-5 mt-6 mb-10 '>
  <Row>
    <Col span={12} className=''>
    <Title level={3} ><span className='text-blue-500'>Bitcoin value statistics</span></Title>
      <Text>An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.</Text>
         <div className='w-full p-2 '>
      {valueStatsData?.map((item)=>{
       return<div className='flex justify-between p-4 border-b-[1px] border-gray-300 hover:bg-gray-200'>
        <div className='flex gap-x-2'>
        <span>{item.icon}</span>
         <p>{item.text}</p>
        </div>
         <p className='font-bold'>{millify(item.value)}</p>
       </div>
      })}
    </div>
    </Col>
    <Col span={12} className='capitalize'>
     <Title level={3} ><span className='text-blue-500'>other stats info</span></Title>
    <Text>An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume.</Text>
   <div className='w-full p-2'>
      {otherStatsData?.map((item)=>{
       return<div className='flex justify-between p-4 border-b-[1px] border-gray-300 hover:bg-gray-200'>
         <p>{item.text}</p>
         <p className='font-bold'>{millify(item.value)}</p>
       </div>
      })}
    </div>
    </Col>
  </Row>
</div>

{/* crypto links */}
<div className=' p-4'>
<Row className=''>
    <Col span={12} className=''>
  <p className='text-4xl font-semibold text-blue-500 capitalize'>what is {cryptoData?.name}</p>
  <p className=' h-[80%] flex justify-center items-center text-zinc-600 text-base '>{cryptoData?.description}</p>
  </Col>
  <Col span={12}>
  <Title level={2}><span className='text-blue-500 capitalize'>links</span></Title>
  {cryptoData?.links?.map((link)=>{
    return <div className='flex justify-between p-4 hover:bg-gray-200 border-b-[1px] border-gray-200'>
      <p className='font-bold text-zinc-600'>{link.type}</p>
      <a className='text-blue-500' href={link.url}>{link.url}</a>
    </div>
  })}
  </Col>
</Row>
</div>
    </div>
  )
}

export default CryptoDetails