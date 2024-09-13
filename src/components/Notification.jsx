import React from 'react'
import {notification} from 'antd';
const Notification = ({status,notificationMsg}) => {
    console.log(status,notificationMsg)
     status===true?notification.success({
        message:notificationMsg
    }):notification.error({
        message:notificationMsg
    })
  return (
    <></>
  )
}

export default Notification