import React, { useEffect, useState } from 'react'
import { getExchangeData } from '../services/crypto'
import { Table, Typography } from 'antd';
import millify from 'millify';
import Loader from './Loader';

const Exchanges = () => {
  const [exchangeData,setExchangeData]=useState();
  const [isLoading,setIsLoading]=useState(true);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  useEffect(()=>{
getExchangeData(onSuccess,onFailure);
  },[])
  const onSuccess=(e)=>{
console.log(e)
setExchangeData(
      e?.data.map((item) => ({
        ...item,
        key: item.id, // Assign unique key for each row
      }))
    );
setIsLoading(false)
  }
  const onFailure=(e)=>{
    console.log(e)
  }
  const columns=[
    {
    title:"Name",
    dataIndex:"name",
    key:"name",
    render:(_,record)=>{
      return <div className='flex gap-x-2'>
        <span>{record.trust_score_rank}.</span>
       <div className='flex gap-x-2'>
         <img src={record.image} alt="" className='h-6 w-6 rounded-full' />
<p>{record.name}</p>
       </div>
      </div>
    }
  },
    {
    title:"24h trade volume",
    dataIndex:"trade_volume_24h_btc",
    key:"trade_volume_24h_btc",
    render:(_,record)=>{
      return (
      <p>{millify(record.trade_volume_24h_btc)}</p>
      )
    }
  },
  {
    title:"Trust score",
    dataIndex:"trust_score",
    key:"trust_score"
  },
  {
    title:"Website",
    dataIndex:"url",
    key:"url",
    render:(_,record)=>(
      <a className='text-blue-500' href={record.url}>visit</a>
    )
  },
]
const handleRowClick=(record)=>{
  console.log("working",record)
}

  const expandedRowRender = (record) => {
    console.log(record.description=="")
    
    return record.description!==""?(
      <div>
        <Typography.Text strong>Description: </Typography.Text>
        <Typography.Text>{record.description}</Typography.Text>
      </div>
    ): <div>
 <Typography.Text strong>Description:<span className='font-light'> N/A</span> </Typography.Text>
    </div>
  };
      const handleExpand = (expanded, record) => {
    // If expanded, set the current row's key as the only expanded row key, else collapse all
    setExpandedRowKeys(expanded ? [record.key] : []);
  };

  return isLoading?<Loader />: (
    <div className="w-[calc(100vw-224px)] h-[calc(100vh)] overflow-auto  ">
       <Table dataSource={exchangeData} columns={columns} pagination={{
        pageSize:25
      }}
      onRow={(record) => ({
  onClick: () => handleRowClick(record),
})}
expandedRowRender={expandedRowRender} // Specify the expanded row render function here
      expandedRowKeys={expandedRowKeys} // Set the currently expanded row keys
      onExpand={handleExpand} // Handle the expand/collapse action
className='p-4'
      />
    {/* <div className='capitalize flex justify-between p-3'>
        <p>Exchanges</p>
      <p>24h trade volume</p>
      <p>trust score</p>
      <p>links</p>
    </div>
      <div>
        {exchangeData?.map((item,index)=>{
          return <div key={item.id} className=' border-2 border-red-400 mb-[1px] flex justify-between items-center  p-2'>
            
          
         <div className='flex gap-x-2 items-center'>
             <span>{index+1} .</span><img src={item.image} alt="" className='h-6 w-6 rounded-full' />
          <p> {item.name}</p>
         </div>
          <div>
            <p>{millify(item?.trade_volume_24h_btc)}</p>
          </div>
          <div>
<p>{item.trust_score}</p>
          </div>
      <a href={item.url}>visit</a>
          </div>
        })}
      </div> */}

     
    </div>
  )
}

export default Exchanges