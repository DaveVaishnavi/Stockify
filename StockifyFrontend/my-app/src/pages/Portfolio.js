import React from "react";
import "../components/Portfolio/Portfolio.css";
import Navbar from "../components/Navbar";


export const Portfolio = () => {
  return (
    <div className="Portfolio-container">
      <header className="portfolio-header">
        <a href="#" className="portfolio-logo">
          Stockify
        </a>
         <nav className="portfolio-navbar">
         <a href="/">Home</a>
          <a href="/Market">Trade</a>
          <a href="/Portfolio">Portfolio</a>
          <a href="/Logout">Logout</a>
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
                <p className="portfolio-card-title">Cash</p>
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
    </div>
  );
};
export default Portfolio;
