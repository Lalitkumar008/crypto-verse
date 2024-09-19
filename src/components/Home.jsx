import React, { useEffect, useState } from 'react'
import {getAllCoinsData} from "../services/crypto" 
import millify from 'millify';
import { Statistic, Typography,Row,Col, notification } from 'antd';
import CryptoCurrencies from './CryptoCurrencies';
import Notification from './Notification';
import News from './News';
import { Link } from 'react-router-dom';
import Loader from './Loader';
const Home = () => {
  const [statsData,setStatsData]=useState();
  const [coinsData,setCoinsData]=useState();
  const [isLoading,setIsLoading]=useState(true);
  const [notificationStatus,setNotificationStataus]=useState()
  const [notificationMsg,setNotificationMsg]=useState()
  useEffect(()=>{
    setIsLoading(true)
    getAllCoinsData(onFetchSuccess,onFetchFailure);
  },[])
 
  const onFetchSuccess=(e)=>{console.log(e)
    setCoinsData(e?.data?.data?.coins);
    setStatsData(e?.data?.data?.stats);
    setIsLoading(false);
   setNotificationStataus(true);
   setNotificationMsg(e?.data?.status)
  }
  
  const onFetchFailure=(e)=>{console.log(e)
  setNotificationStataus(false);

   console.log(e?.response?.data?.message)
  setNotificationMsg(e?.response?.data?.message || "Failed to fetch it")
 
  }
  return isLoading?<Loader />: (
    <div className='w-[calc(100vw-224px)] h-[100vh] overflow-aut '>
     <Notification status={notificationStatus} notificationMsg={notificationMsg}/>
      {/* crypto different values using div and flex box*/}
       {/* <div className='bg-yellow-400 mb-2'>
        <p className='text-2xl capitalize px-3 py-4 font-semibold text-gray-800'>global crypto stats</p>
      </div> */}
      {/* <div className='flex justify-around flex-wrap    p-2 '>
        <div className='p-2  w-56'>
          <p className='text-gray-600 capitalize'>total cryptocurrencies</p>
          <p className='text-2xl font-semibold text-gray-700'>{millify(data?.totalCoins,{
            precision:2
          })}</p>
        </div>
        <div className='p-2  w-56'>
          <p className='text-gray-600 capitalize'>total exchange</p>
         <p className='text-2xl font-semibold text-gray-700'>{millify(data?.totalCoins,{
            precision:2
          })}</p>
        </div>
        <div className='p-2  w-56'>
          <p className='text-gray-600 capitalize'>total marketcap</p>
         <p className='text-2xl font-semibold text-gray-700'>{millify(data?.totalCoins,{
            precision:2
          })}</p>
        </div>
    
       <div className='p-2  w-56'>
          <p className='text-gray-600 capitalize'>total markets</p>
     <p className='text-2xl font-semibold text-gray-700'>{millify(data?.totalCoins,{
            precision:2
          })}</p>
        </div>
        <div className='p-2  w-56'>
          <p className='text-gray-600 capitalize'>total 24h volume</p>
         <p className='text-2xl font-semibold text-gray-700'>{millify(data?.totalCoins,{
            precision:2
          })}</p>
        </div>

      </div> */}

      {/* crypto different values using ant design inbuilt component*/}
      <Typography.Title level={2} className='bg-yellow-400 p-4 capitalize'>global crypto stats</Typography.Title>
      <Row className=' px-2 py-4 capitalize'>
<Col span={12}><Statistic value={millify(statsData?.total,{
  precision:2
})} title="total crypto currencies" /></Col>
<Col span={12}><Statistic value={millify(statsData?.totalExchanges,{
  precision:2
})} title="total exchanges" /></Col>
<Col span={12}><Statistic value={millify(statsData?.totalMarketCap,{
  precision:2
})} title="total market cap" /></Col>
<Col span={12}><Statistic value={millify(statsData?.totalMarkets,{
  precision:2
})} title="total markets" /></Col>
<Col span={12}><Statistic value={millify(statsData?.total24hVolume,{
  precision:2
})} title="total 24h volume" /></Col>
      </Row>
      {/* showing crypto currencies */}
      <div className='w-[calc(100vw-294px)] p-2'>
<div className='flex justify-between items-center'>
  <Typography.Title level={2}>Top 10 crypto currencies </Typography.Title>
<Link className='text-blue-500 text-2xl font-medium' to='/crypto'>Show more</Link>
</div>
<CryptoCurrencies coinsData={coinsData} />
      </div>
      {/* showing news */}
         <div>
<p>Get latest Crypto News </p>
<News />
      </div>
    </div>
  )
}

export default Home