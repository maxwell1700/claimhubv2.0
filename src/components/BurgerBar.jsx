import React from "react";
import "../stylesheet/Bar.css";

function BurgerBar() {
  return (
    <nav className="burger-nav">
      <ul className="burger">
        <li className="burger-item burger-item-has-children">
          <a href="#about" data-toggle="sub-burger" className="burger-title">
            Who are ClaimHub <i className="plus"></i>
          </a>
          <ul className="sub-burger">
            <li className="burger-item">
              <a href="aboutus">About us</a>
            </li>
            <li className="burger-item">
              <a href="/fees">Our Fees</a>
            </li>
          </ul>
        </li>

        <li className="burger-item burger-item-has-children">
          <a href="#" data-toggle="sub-burger" className="burger-title">
            Types of Claims <i className="plus"></i>
          </a>
          <ul className="sub-burger">
            <li className="burger-item">
              <a href="/utilities">Utilities</a>
            </li>
            <li className="burger-item">
              <a href="/counciltax">Council Tax</a>
            </li>
            <li className="burger-item">
              <a href="/studentloans">Student Loans</a>
            </li>
          </ul>
        </li>
        <li className="burger-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="burger-item">
          <a className="burger-referal" href="/contact">
            Refer A Friend
          </a>
        </li>

        <li className="burger-item">
          <a href="/claimform">
            <button className="burger-green-btn">Start Claim</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerBar;
