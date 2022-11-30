import React from "react";
import { headerAssets } from "../../../../assets/headerAssets";
const SearchBar = () => {
  return (
    <>
      <div className="input-field border border-dark align-items-center col-12  col-sm-5 justify-content-around d-flex order-2 order-sm-last order-lg-2">
        <input type="text" placeholder="search" />
        <span>All Categories</span>
        <div className="search-icon">
          <img src={headerAssets.searchIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
