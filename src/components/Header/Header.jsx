import React from "react";
import "./Header.css";
import { HeaderComponents } from "./Components";
const Header = () => {
  return (
    <>
      <div className="container-fluid bg-light p-0">
        <div className="row d-flex justify-content-around align-items-center search-component pt-3 pb-3">
          <HeaderComponents.BrandLogo />
          <HeaderComponents.SearchBar />
          <HeaderComponents.CountrySelector />
          <HeaderComponents.IconGroup />
        </div>
      </div>
    </>
  );
};

export default Header;
