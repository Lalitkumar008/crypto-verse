import React,{useEffect, useState} from "react";
const CryptoContext = React.createContext();
const CryptoProvider = ({ children }) => {
    const [serviceData,setServiceData]=useState("hello");
    

  return (
    <CryptoContext.Provider value={ {serviceData}}>
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
