import React from "react";
import { NavLink } from "react-router-dom";
import { headerAssets } from "../../../../assets/headerAssets";
import "./IconGroup.css";
const IconGroup = () => {
  return (
    <div className="search-side-icons col-4 col-sm-2 order-4 order-sm-3 order-lg-4 justify-content-center">
      {/* <div className="profile mx-1">
        <img src={headerAssets.profileIcon} alt="" />
      </div> */}
      <div className="profile dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          <img src={headerAssets.profileIcon} alt="" />
        </a>
        <ul className="dropdown-menu p-3">
          <li className="text-bg-light p-1 mb-2">
            <div className="mb-2">
              <NavLink className="dropdown-item" to="/login-page">
                <button className="btn btn-dark w-100">LOGIN</button>
              </NavLink>
            </div>
            <div>
              <NavLink className="dropdown-item" to="/signup-page">
                <button className="btn btn-light w-100 border">Register</button>
              </NavLink>
            </div>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Your Wishlist
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Your Orders
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Your Accounts
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="wishlist mx-1">
        <img src={headerAssets.wishlistIcon} alt="" />
      </div>
      <div className="cart mx-1">
        <img src={headerAssets.cartIcon} alt="" />
      </div>
    </div>
  );
};

export default IconGroup;
