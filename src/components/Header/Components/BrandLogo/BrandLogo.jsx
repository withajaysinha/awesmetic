import React from "react";
import { Link } from "react-router-dom";
import { headerAssets } from "../../../../assets/headerAssets";

const BrandLogo = () => {
  return (
    <div className="logo justify-content-around col-6 col-sm-3 order-1 order-sm-2 order-lg-1">
      <Link to={"/"}>
        <div className="main-logo">
          <img src={headerAssets.brandLogo} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default BrandLogo;
