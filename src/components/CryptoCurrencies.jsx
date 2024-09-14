import React from 'react'
import { Card, Input } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
const CryptoCurrencies = ({coinsData}) => {
  console.log(coinsData)
  return (
    
    <div className="  flex  py-4   flex-wrap gap-4  ">
      <div className=' h-8'>
        <Input className='w-64 h-8'
        placeholder='search crypto'
        />
      </div>
      {coinsData?.map((item,index)=>{
        return index<10&& <Link to={`/crypto/${item.uuid}`}><Card 
        title={`${item.rank}. ${item.name}`} key={item.uuid}
        hoverable
        className='w-64  rounded-none' 
        extra={<img src={item.iconUrl} className='w-4' />}
        >
<p className='mb-1'>Price : {millify(item.price)}</p>
<p className='mb-1'>Market Cap :{millify(item.marketCap)}</p>
<p className='mb-1'>Daily Change :{millify(item.change)}</p>
        </Card></Link>
      })}
      
    </div>
  )
}

export default CryptoCurrencies