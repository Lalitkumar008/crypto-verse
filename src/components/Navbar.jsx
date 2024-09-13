import React from 'react'
import { Menu } from 'antd'
import {Link} from "react-router-dom"
import { BarsOutlined, BranchesOutlined, BulbOutlined, HomeFilled, HomeOutlined } from '@ant-design/icons'
const Navbar = () => {
  return (
    <div className='w-56    overflow-auto border-r-[1px] border-blue-400'>
        <div className='px-4 py-6   text-center'>
<p className='text-2xl text-blue-400 capitalize font-bold '>cryptoverse</p>
        </div>
        <Menu
className='h-[100vh]'
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
            <Menu.Item key="news"  icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
          
           
        </Menu>
    </div>
  )
}

export default Navbar