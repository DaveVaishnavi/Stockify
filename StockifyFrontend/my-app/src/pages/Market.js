import React from "react";
import "../components/Marketpg/market.css";
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removeToken } from '../services/LocalStorageService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../features/authSlice';
import { unsetUserInfo } from '../features/userSlice';
// import "../components/Marketpg/events";


 function App ({list})  {

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);
  const [data12, setData12] = useState([]);

  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/AAPL?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data1 => setData1(data1));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/TWTR?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data2 => setData2(data2));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/AMZN?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data3 => setData3(data3));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/TSLA?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data4 => setData4(data4));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/BAC?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data5 => setData5(data5));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/ORCL?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data6 => setData6(data6));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/GOOG?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data7 => setData7(data7));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/NKE?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data8 => setData8(data8));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/JPM?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data9 => setData9(data9));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/MSFT?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data10 => setData10(data10));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/NVDA?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data11 => setData11(data11));
  }, []);
  useEffect(() => {
    fetch("https://api.iex.cloud/v1/data/CORE/QUOTE/V?token=pk_00366a0765ce48c8b0143cb428fa0d84")
      .then(response => response.json())
      .then(data12 => setData12(data12));
  }, []);
  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/')

  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className="market_container">
      <header className="header">
        <a href="#" className="logo">
          {" "}
          Stockify{" "}
        </a>
        <nav className="navbar">
         <a href="/">Home</a>
          <a href="/Market">Market</a>
          <a href="/Portfolio">Portfolio</a>
          <Button className="btn4" color="rgba(46, 52, 69, 1)" onClick={handleShow}>
        <u>Logout</u>
      </Button>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button color="success" onClick={handleLogout}>
            <font color="black">Logout</font>
          </Button>
          <Button color="danger" onClick={handleClose}>
          <font color="black">Cancel</font>
          </Button>
        </Modal.Footer>
      </Modal>
        </nav>
      </header>
      <div className="all">
        <div className="searchstock">
            {data1.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">$ {item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
       </div>

        ))}
        
        {data2.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">$ {item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">$ {item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">${item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data3.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data4.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data5.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data6.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data7.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data8.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data9.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
        {data10.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
                    {data11.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">$ {item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
       </div>

        ))}
        {data12.map((item) => (
         <div className="stock-card-container">
         <div className="stock-card-information">
           <h2 className="company-name">{item.companyName}</h2>
           <div className="company-values">
             <table>
               <tbody>
                 <tr>
                   <td className="bold">Price:</td>
                   <td className="stockDetails">$ {item.latestPrice}</td>
                 </tr>
                 <tr>
                   <td className="bold">Change:</td>
                   <td className="stockDetails">
                     $ {item.change} ({item.changePercent}%) &nbsp;<i className="icon-arrow-up"></i>
                   </td>
                 </tr>
                 {/* <tr>
                   <td className="bold">High:</td>
                   <td className="stockDetails">{item.high}</td>
                 </tr>
                 <tr>
                   <td className="bold">Low:</td>
                   <td className="stockDetails">{item.low}</td>
                 </tr> */}
                 <tr>
                   <td className="bold">Market Capitalisation:</td>
                   <td className="stockDetails">{item.marketCap}</td>
                 </tr>
               </tbody>
             </table>
             <div className="add-minus-button-container">
               <button className="btn3">
                Buy</button>
                <button className="btn1">
                Sell</button>
             </div>
           </div>
         </div>
         <div className="stock-card-chart"></div>
       </div>

        ))}
          </div>

        </div>
      </div>
  );
};

function Market() {
  const list = ["AAPL", "TWTR", "AMZN", "TSLA", "BAC", "SPY", "GOOG", "META", "JPM", "MSFT"];

  return (
    <div>
      <App list={list} />
    </div>
  );
}

export default Market;
