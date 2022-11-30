import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./shopByBanner.css";
import { categoryContext } from "../../CatogeryPage";

export function ShopByBanner() {
  const { catogeryData, categoryId } = useContext(categoryContext);
  // const categoryData = value.catogeryData
  // const categoryId =value.categoryId
  //  console.log(categoryData,categoryId)
  return (
    <>
      <div
        className="category-page-banner border-0 d-flex align-items-center"
        style={{ backgroundImage: `url(${catogeryData.image})` }}
      >
        <div className="text-dark container h-100">
          <span>
            <Link to="/">
              <button className="btn text-white">Home /</button>
            </Link>
            <Link to={``}>
              <button className="btn text-white bold">
                {catogeryData.name}
              </button>
            </Link>
          </span>
          <p className="py-3 w-50">{catogeryData.description}</p>
        </div>
      </div>
    </>
  );
}
