import React from "react";
import CategoryComponent from "./Components";

export const categoryContext = React.createContext();

function CategoryPage({ catogeryData, categoryId }) {
  // console.log(catogeryData,categoryId);

  return (
    <>
      <categoryContext.Provider value={{ catogeryData, categoryId }}>
        <CategoryComponent.ShopByBanner />
        <CategoryComponent.BeautyProducts />
      </categoryContext.Provider>
    </>
  );
}
export default CategoryPage;
