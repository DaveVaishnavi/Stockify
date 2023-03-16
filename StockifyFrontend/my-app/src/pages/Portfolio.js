import React from "react";
import "../components/Portfolio/Portfolio.css";
import Navbar from "../components/Navbar";
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




export const Portfolio = () => {

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
    <div className="Portfolio-container">
      <header className="portfolio-header">
        <a href="#" className="portfolio-logo">
          Stockify
        </a>
         <nav className="portfolio-navbar">
         <a href="/">Home</a>
          <a href="/Market">Market</a>
          <a href="/Portfolio">Portfolio</a>
          <Button className="btn4" color="rgba(46, 52, 69, 1)" onClick={handleShow}>
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
            <div className="portfolio-card">
              <div className="portfolio-container-card bg-green-box">
                <p className="portfolio-card-title">Account Value</p>
                <p className="portfolio-card-description">Rs 100,000</p>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-container-card bg-white-box">
                <p className="portfolio-card-title">USD</p>
                <p className="portfolio-card-description">Rs 100,000</p>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-container-card bg-yellow-box">
                <p className="portfolio-card-title">Today's Change</p>
                <p className="portfolio-card-description">+ Rs 0.00 (0.00%)</p>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-container-card bg-blue-box">
                <p className="portfolio-card-title">Annual Return</p>
                <p className="portfolio-card-description">+NaN%</p>
              </div>
            </div>
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
                <th>Current Price</th>
                <th>Change</th>
                <th>Purchasing Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AAPL</td>
                <td>156</td>
                <td>0.00</td>
                <td>147</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
              </tr>
              <tr>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
              </tr>
              <tr>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
              </tr>
              <tr>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
              </tr>
              <tr>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
              </tr>
              <tr>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
              </tr>
              <tr>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
              </tr>
              <tr>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
              </tr>
              <tr>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
              </tr>
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
                <label for="home" className="home">Open Orders</label>
                <label for="blog" className="blog">Completed Orders</label>
              </nav>
              <section className="order-section">
                {/* open orders */}
                <div className="content content-1">
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
                            <td>AAPL</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
                {/* completed orders */}
                <div className="content content-2">
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
                </div>
              </section>
            </div>
            {/* orders table end */}
      </section>
    </div>
  );
};
export default Portfolio;
