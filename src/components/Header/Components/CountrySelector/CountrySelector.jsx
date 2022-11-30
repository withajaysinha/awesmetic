import React from "react";
import { headerAssets } from "../../../../assets/headerAssets";

const CountrySelector = () => {
  return (
    <div className="d-flex text-center col-2 col-sm-2 order-3 order-sm-1 order-lg-3 justify-content-center">
      <div className=" d-inline  mx-2 flag">
        <img src={headerAssets.searchIcon} alt="" />
      </div>
      <span>INDIA</span>
    </div>
  );
};

export default CountrySelector;
