import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import {Row,Col,Typography, Select,notification} from "antd";
import Notification from './Notification';

import { scales, Ticks } from 'chart.js';
// Import the necessary components from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend
} from 'chart.js';
import Loader from './Loader';
import millify from 'millify';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const LineChart = ({allData,cryptoName,currentPrice} ) => {
  console.log(allData)
    const [isLoading,setIsLoading]=useState(true);
    const {Title,Text}=Typography;
      const coinPriceHistoryData=[]
    const timeStampData=[]

  for(let i=0;i<allData?.history?.length;i++){
            coinPriceHistoryData?.push(allData.history[i].price)
        }
        for(let i=0;i<allData?.history?.length;i++){
            timeStampData.push(new Date(allData?.history[i].timestamp).toLocaleDateString())
            // timeStampData.push(dayjs(e?.data?.data?.history[i].timestamp).format("DD-MM-YYYY"))
        }
console.log(coinPriceHistoryData)
  const data={
    labels:timeStampData,
    datasets:[
        {
            label:"Price in USD",
            data:coinPriceHistoryData,
            fill:false,
            backgroundColor:'#0071',
            borderColor:'#0071bd'
        }

    ]
  }

  const options={
    scales:{
        yAxes:[
            {
                ticks:{
                    beginAtZero:true
                }
            }
        ]
    }
  }


 
  return   <div>
        <Row className=' flex justify-between items-center '>
             <Col span={12}>
  <Title level={2} className=''><span className='font-semibold text-blue-500'>{cryptoName} price chart</span></Title>
  </Col>
  <Col span={12} className='flex gap-x-5  justify-end'>
  <p className='text-lg'>change : {allData?.change || 'N/A'} %</p>
  <p className='text-lg'>current {cryptoName} price: {millify(currentPrice|| 0)}</p>
  </Col>

 
        </Row>
        


<Line data={data} options={options}/>
    </div>
  
}

export default LineChart