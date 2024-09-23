import React,{useEffect, useState} from "react";
import { getAllCoinsData } from "../services/crypto";
const CryptoContext = React.createContext();
const CryptoProvider = ({ children }) => {
    const [serviceData,setServiceData]=useState("hello");
    const [coinsData,setCoinsData]=useState();
    const [statsData,setStatsData]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const [notificationStatus,setNotificationStataus]=useState()
  const [notificationMsg,setNotificationMsg]=useState()
    useEffect(()=>{
getAllCoinsData(onFetchSuccess,onFetchFailure);
    },[])
  const onFetchSuccess=(e)=>{console.log(e)
    setCoinsData(e?.data?.data?.coins);
    setStatsData(e?.data?.data?.stats);
   setNotificationStataus(true);
   setNotificationMsg(e?.data?.status)
   setIsLoading(false)
  }
  
  const onFetchFailure=(e)=>{console.log(e)
  setNotificationStataus(false);

   console.log(e?.response?.data?.message)
  setNotificationMsg(e?.response?.data?.message || "Failed to fetch it")
 
  }
  return (
    <CryptoContext.Provider value={ {serviceData,coinsData,statsData,
notificationMsg,notificationStatus,isLoading
    }}>
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
