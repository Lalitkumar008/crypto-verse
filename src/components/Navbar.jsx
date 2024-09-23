import React from 'react'
import { Menu } from 'antd'
import {Link, useNavigate} from "react-router-dom"
import { BarsOutlined, BranchesOutlined, BulbOutlined, HomeFilled, HomeOutlined } from '@ant-design/icons'
// import navIcon from '/Lalit Study/React projects/crypto-app/public/cryptocurrencies.png';
import navIcon from '/images/cryptocurrencies.png';
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='w-56    '>
        <div className='px-4 py-3 h-16  text-center flex gap-x-2 items-center
        cursor-pointer
        ' 
        onClick={()=>navigate('/')}
        >
             <img className='w-7 h-7' src={navIcon} alt="" />
<p className='text-2xl  text-blue-400 capitalize font-bold '>cryptoPulse</p>
        </div>
        <Menu
className='h-[calc(100vh)] overflow-auto'
        theme='dark'
        mode='inline'
        >
            
            <Menu.Item key="home" icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="crypto" icon={<BarsOutlined/>}>
                <Link to="/crypto">CryptoCurrencies</Link>
            </Menu.Item>
            <Menu.Item key="echange" icon={<BranchesOutlined/>}>
                <Link to="/exchange">Exchnages</Link>
            </Menu.Item>
            {/* <Menu.Item key="news"  icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item> */}
           
        </Menu>
    </div>
  )
}

export default Navbar