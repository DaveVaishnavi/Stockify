import React from "react";
import "../components/Portfolio/Portfolio.css";
import "../components/Marketpg/market.css";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { removeToken } from "../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../features/authSlice";
import { unsetUserInfo } from "../features/userSlice";
import axios from "axios";

export const Portfolio = () => {
  const [openOrders, setOpenOrders] = useState([]);
  const [holdings, setHoldings] = useState([]);
  let cash=1000000;
  let mtm = 0;

  
  const fetchData = async () => {
    axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getStockTransactions`,
     
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    ).then(function (response) {
	  console.log(response);
    setOpenOrders(response.data.orders);
    
});
axios.get(
  `${process.env.REACT_APP_BACKEND_URL}/getHoldings`,
  {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }
).then(function (response1) {
console.log(response1);
setHoldings(response1.data.orders);
});
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="Portfolio-container">
      <header className="portfolio-header">
        <a href="#" className="portfolio-logo">
          Stockify
        </a>
        <nav className="portfolio-navbar">
          <a href="/">Home</a>
          <a href="/Market">Market</a>
          <a href="/Portfolio">Portfolio</a>
          <Button
            className="btn4"
            color="rgba(46, 52, 69, 1)"
            onClick={handleShow}
          >
            Logout
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
      <section className="your_portfolio">
        <div className="portfolio-container">
          <p className="portfolio-container-title">Your Portfolio</p>
          <div className="portfolio-gradient-cards">
            {/* <div className="portfolio-card">
              <div className="portfolio-container-card bg-green-box">
                <p className="portfolio-card-title">Account Value</p>
                <p className="portfolio-card-description">Rs 100,000</p>
              </div>
            </div> */}

            <div className="portfolio-card">
              <div className="portfolio-container-card bg-white-box">
              <p className="portfolio-card-title">Cash</p>
              {/* {openOrders.map((order, index) => ( */}
                <p className="portfolio-card-description">$ {cash}</p>
                {/* ))} */}
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-container-card bg-yellow-box">
                <p className="portfolio-card-title">MTM</p>
                <p className="portfolio-card-description">$ {mtm}</p>
              </div>
            </div>

            {/* <div className="portfolio-card">
              <div className="portfolio-container-card bg-blue-box">
                <p className="portfolio-card-title">Annual Return</p>
                <p className="portfolio-card-description">+NaN%</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="portfolio-holdings">
        <h2 className="portfolio-h2">Holdings</h2>
        <div className="portfolio-table-wrapper portfolio-table-wrapper-scroll-y portfolio-my-custom-scrollbar">
          <table className="portfolio-fl-table">
            <thead>
              <tr>
                <th>Symbol</th>
                {/* <th>Current Price</th> */}
                {/* <th>Purchasing Price</th> */}
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>AAPL</td>
                <td>156</td>
                <td>0.00</td>
                <td>147</td>
                <td>10</td>
              </tr> */}
              {holdings.map((Order, index) => (
                      <tr>
                        <td key={index}>{Order.symbol}</td>
                        {/* <td>{Order.bidPrice}</td> */}
                        {/* <td>{Order.bidPrice}</td> */}
                        <td>{Order.holding_count}</td>    
                        {/* <td>{Order.holding_count}</td>     */}
                      </tr>
                    ))}
            </tbody>

            <tbody></tbody>
          </table>
        </div>
      </section>

      <section className="portfolio-orders">
        <h2 className="portfolio-orders-h2">Orders</h2>
        {/* orders table */}
        <div className="wrapper">
          <input type="radio" name="slider" checked id="home"></input>
          <input type="radio" name="slider" id="blog"></input>
          <nav>
            <label for="home" className="home">
              Orders
            </label>
          </nav>
          <section className="order-section">
            {/* open orders */}
            <div className="content content-1">
              <div className="table-wrapper2 table-wrapper-scroll-y my-custom-scrollbar">
                <table className="fl-table2">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Amount</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Type</th>
                      {/* <th>Type of Bid</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {openOrders.map((order, index) => (
                      <tr>
                        <td key={index}>{order.symbol}</td>
                        <td>{order.quantity}</td>
                        <td>$ {order.bidPrice}</td>
                        <td>$ {order.quantity * order.bidPrice}</td>
                        <td>{order.type}</td>
                      
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* completed orders */}
            {/* <div className="content content-2">
              <div className="table-wrapper2 table-wrapper-scroll-y my-custom-scrollbar">
                <table className="fl-table2">
                  <thead>
                    <tr>
                      <th>Pair</th>
                      <th>Amount</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </section>
        </div>
        {/* orders table end */}
      </section>
    </div>
  );
};
export default Portfolio;
