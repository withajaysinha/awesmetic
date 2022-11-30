import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SubCategoryBanner from "./Components/SubCategoryBanner/SubCategoryBanner";
import SubCategory from "./Components/SubCategory/SubCategory";
import Products from "../../components/Products/Products";
export const subCategoryContext = React.createContext();

function SubCategoryPage() {
  const { categoryName, categoryId, subCategoryName, subCategoryId } =
    useParams();
  // console.log(categoryName,categoryId,subCategoryName,subCategoryId)
  const [subCategory, setSubCategory] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        `https://awesmatic.vistamatrix.in/api/customer/get_subcategory/list/${subCategoryId}`
      )
      .then((res) => {
        setSubCategory(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [subCategoryId]);
  if (!subCategory) return <></>;
  return (
    <>
      <subCategoryContext.Provider
        value={{ categoryName, categoryId, subCategory, subCategoryId }}
      >
        <SubCategoryBanner />
        {subCategory.length === 0 ? (
          <Products productId={subCategoryId} />
        ) : (
          <SubCategory />
        )}
      </subCategoryContext.Provider>
    </>
  );
}

export default SubCategoryPage;
