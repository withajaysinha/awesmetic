import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="text-bg-dark">
        <nav className="container navbar navbar-expand-lg justify-content-center">
          <div className="container-fluid">
            <ul className="navbar-nav one me-auto mb-2 mb-lg-0 d-block hover-lg-none d-lg-none">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="category/1">
                  Today's Deal
                </NavLink>
              </li>
            </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
                <li className="nav-item d-none d-lg-flex">
                  <NavLink className="nav-link text-light" to="category/1">
                    Today's Deal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link text-light "
                    aria-current="page"
                    to="category/2"
                  >
                    Shop By
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-light"
                    aria-current="page"
                    to="category/3"
                  >
                    Best Sellers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="category/4">
                    Makeup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="category/5">
                    skin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="category/6">
                    Hair
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="category/7">
                    Appliances
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="category/8">
                    Bath & Body
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="category/9">
                    Mom & Baby
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to="category/10">
                    Health & Wellness
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
