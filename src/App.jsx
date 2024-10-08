import { useContext, useState } from "react";
import { Typography } from "antd";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import CryptoCurrencies from "./components/CryptoCurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import Error from "./components/Error";
import NewsDetail from "./components/NewsDetail";
import CryptoDetails from "./components/CryptoDetails";
import { CryptoContext } from "./context/CryptoContext";
function App() {
  const {serviceData}=useContext(CryptoContext);
  console.log("service DATA",serviceData)
  return (
    <div className="">
      {/* <div className='navbar'>
        <Navbar />
      </div>
      <div className='home'>
<Home />
      </div> */}
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex" }}>
              {" "}
              <Navbar />
              <Home />
            </div>
          }
        />
        <Route
          path="/crypto"
          element={
            <div style={{ display: "flex" }}>
              {" "}
              <Navbar />
              <CryptoCurrencies />
            </div>
          }
        />
        <Route path="/crypto/:id" element={<div style={{ display: "flex" }}>
          <Navbar/><CryptoDetails />
        </div>} />
        {/* <Route
          path="/news"
          element={
            <div style={{ display: "flex" }}>
              {" "}
              <Navbar />
              <News />
            </div>
          }
        /> */}
        {/* <Route
          path="/news/:id"
          element={
            <div style={{ display: "flex" }}>
              {" "}
              <Navbar />
              <NewsDetail />
            </div>
          }
        /> */}
        <Route
          path="/exchange"
          element={
            <div style={{ display: "flex" }}>
              {" "}
              <Navbar />
              <Exchanges />
            </div>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* <div className="">
        <Footer />
      </div> */}
    </div>
  );
}

// function App(){
//  return  <div>
//   <p className="bg-blue-600">hello</p>
//  </div>
// }
export default App;
