import React, { useEffect, useState } from 'react'
import { getCoinDataById } from '../services/crypto'
import { useParams } from 'react-router-dom'
import { Col, Divider, Row, Select, Typography } from 'antd'
import Loader from './Loader'
import millify from 'millify'
import { ArrowLeftOutlined, ArrowRightOutlined, FireFilled } from '@ant-design/icons'
const CryptoDetails = () => {
  const [cryptoData,setCryptoData]=useState();
  const [valueStatsData,setValueStatsData]=useState();
  const [otherStatsData,setOtherStatsData]=useState();
  const [isLoading,setIsLoading]=useState(true);
  const {Title,Text}=Typography;
  const {id}=useParams();
  console.log("paraams",id)
  useEffect(()=>{
getCoinDataById(onSuccess,onFailure,id)
  },[])
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
  const onSuccess=(e)=>{console.log(e)
    setCryptoData(e?.data?.data?.coin);
    setIsLoading(false)
  }
  const onFailure=(e)=>{console.log(e)}
  return isLoading ?<Loader />:  (
    <div className='w-[calc(100vw-224px)] overflow-auto  p-2'>

<div className='bg-red-400'>
  <p className='text-3xl mt-8  font-bold text-blue-500 text-center '> 
  {cryptoData?.name} ({cryptoData?.symbol}) Price
</p>
<p className='text-center mt-4 capitalize  text-gray-500 '>
  bitcoin live price in USD.View value statistics , market cap and supply. 
</p>
</div>
<Divider dashed className=''/>

<div className='font-bold '>
<Row className=''>
  <Col span={12}>
  <Select className='w-32 mb-1 border-none'
  // onChange={}
  >
    <Option className="border-none" value='hello' >hello1</Option>
    <Option value='hello2'>hello1</Option>
    <Option value='hello3'>hello1</Option>
    <Option value='hello4'>hello1</Option>
    <Option value='hello5'>hello1</Option>
  </Select>
  </Col>
  <Col span={12} className='flex gap-x-5  justify-end'>
  <p className='text-lg'>change : {cryptoData?.change} %</p>
  <p className='text-lg'>current bitcoin price: {millify(cryptoData?.price)}</p>
  </Col>
</Row>
<p className='h-96 flex justify-center items-center capitalize bg-blue-400 text-7xl font-semibold text-blue-700 '>graph</p>
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
    </div>
  )
}

export default CryptoDetails