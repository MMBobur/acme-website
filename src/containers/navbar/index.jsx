import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-item">
        <div typeof="button">Announcement</div>
        <h4>How we're responding to COVID-19</h4>
      </div>
      <div className="nav-list">
        <div className="nav-logo">
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
            alt=""
          />
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="container-logo">
            <div className="cart-logo">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <div className="count">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
