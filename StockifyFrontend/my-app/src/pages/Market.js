import React from "react";
import "../components/Marketpg/market.css";
// import "../components/Marketpg/events";
const Market = () => {
  function addclasses() {
    let slider = document.querySelector(".slider");
    let formSection = document.querySelector(".form-section");

    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
  }
  function removeclasses() {
    let slider = document.querySelector(".slider");
    let formSection = document.querySelector(".form-section");

    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
  }

  return (
    <div className="market_container">
      <header className="header">
        <a href="#" className="logo">
          {" "}
          Stockify{" "}
        </a>
        <nav className="navbar">
         <a href="/">Home</a>
          <a href="/Market">Trade</a>
          <a href="/Portfolio">Portfolio</a>
          <a href="/Logout">Logout</a>
        </nav>
      </header>
      <div className="overview">
        <p>Account Value: Rs100,000</p>
        {/* <!-- <p>|</p> --> */}
        <p>Cash: Rs100,000</p>
        <p></p>
      </div>

      <div className="all">
        <div className="searchstock">
          <h5>Stock Screener</h5>
          <div className="search-wrapper">
            <input
              type="search"
              name="search-stock"
              id="search-stock"
              placeholder="Search"
              style={{ color: "white" }}
            />
          </div>
          <div className="temp">
            <div
              className="table-wrapper table-wrapper-scroll-y my-custom-scrollbar"
              style={{ width: "25%" }}
            >
              <table className="fl-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AAPL</td>
                    <td>156</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Content 2</td>
                    <td>Content 2</td>
                    <td>Content 2</td>
                  </tr>
                  <tr>
                    <td>Content 3</td>
                    <td>Content 3</td>
                    <td>Content 3</td>
                  </tr>
                  <tr>
                    <td>Content 4</td>
                    <td>Content 4</td>
                    <td>Content 4</td>
                  </tr>
                  <tr>
                    <td>Content 5</td>
                    <td>Content 5</td>
                    <td>Content 5</td>
                  </tr>
                  <tr>
                    <td>Content 6</td>
                    <td>Content 6</td>
                    <td>Content 6</td>
                  </tr>
                  <tr>
                    <td>Content 7</td>
                    <td>Content 7</td>
                    <td>Content 7</td>
                  </tr>
                  <tr>
                    <td>Content 8</td>
                    <td>Content 8</td>
                    <td>Content 8</td>
                  </tr>
                  <tr>
                    <td>Content 9</td>
                    <td>Content 9</td>
                    <td>Content 9</td>
                  </tr>
                  <tr>
                    <td>Content 10</td>
                    <td>Content 10</td>
                    <td>Content 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="trade" style={{ width: "50%" }}>
              <div className="main-card">
                <h1 className="mytitle">APPLE INC</h1>
                <p className="undertitle">AAPL</p>
                <div className="gradient-cards">
                  <div className="card-content">
                    <p className="card-title">Account Value</p>
                    <p className="card-description">Rs100,000</p>
                  </div>
                  <div className="card-content">
                    <p className="card-title">Change</p>
                    <p className="card-description">Rs0.00 (0.00%)</p>
                  </div>
                  <div className="card-content">
                    <p className="card-title">Volume</p>
                    <p className="card-description">55.65M</p>
                  </div>
                  <div className="card-content">
                    <p className="card-title">Market Cap</p>
                    <p className="card-description">2.321T</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="table-wrapper table-wrapper-scroll-y my-custom-scrollbar"
              style={{ width: "25%" }}
            >
              {/* <!-- <div className="table-btn">
              <button className="open-order">open order</button>
              <button className="complete">completed order</button>
          </div> --> */}
              <table className="fl-table">
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
                  </tr>
                  <tr>
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
                  </tr>
                  <tr>
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
                  </tr>
                  <tr>
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
                  </tr>
                  <tr>
                    <td>Content 10</td>
                    <td>Content 10</td>
                    <td>Content 10</td>
                    <td>Content 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- new  --> */}

          <div className="container">
            <div className="slider"></div>
            <div className="btn">
              <button className="buy" onClick={removeclasses}>
                BUY
              </button>
              <button className="sell" onClick={addclasses}>
                SELL
              </button>
            </div>
            <div className="form-section">
              <div className="buy-box">
                <div className="row">
                  <div className="in_field">
                    <label for="Qty">Quantity</label>
                  </div>
                  <div className="out_field">
                    <input
                      className="market-input-text"
                      type="text"
                      id="qty"
                      name="Quantity"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="in_field">
                    <label for="Duration">Duration</label>
                  </div>
                  <div className="out_field">
                    <input
                      className="market-input-text"
                      type="text"
                      id="dur"
                      name="Duration"
                      placeholder="Duration"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="in_field">
                    <label for="order_type">Order Type</label>
                  </div>
                  <div className="out_field">
                    <input
                      className="market-input-text"
                      type="text"
                      id="order"
                      name="Order"
                      placeholder="Order Type"
                    />
                  </div>
                </div>
                <div className="row">
                  <input
                    className="market-input-submit"
                    type="submit"
                    value="BUY"
                  />
                </div>
              </div>
              <div className="sell-box">
                <div className="row">
                  <div className="in_field">
                    <label for="Qty">Quantity</label>
                  </div>
                  <div className="out_field">
                    <input
                      className="market-input-text"
                      type="text"
                      id="qty"
                      name="Quantity"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="in_field">
                    <label for="Duration">Duration</label>
                  </div>
                  <div className="out_field">
                    <input
                      className="market-input-text"
                      type="text"
                      id="dur"
                      name="Duration"
                      placeholder="Duration"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="in_field">
                    <label for="order_type">Order Type</label>
                  </div>
                  <div className="out_field">
                    <input
                      className="market-input-text"
                      type="text"
                      id="order"
                      name="Order"
                      placeholder="Order Type"
                    />
                  </div>
                </div>
                <div className="row">
                  <input
                    className="market-input-submit"
                    type="submit"
                    value="SELL"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Market;
