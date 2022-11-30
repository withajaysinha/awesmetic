import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ShowLoading from "../ShowLoading/ShowLoading";
import PageNotFound from "../PageNotFound/PageNotFound";
import SubCategoryPage from "../../pages/SubCategoryPage/SubCategoryPage";

const SubCatogerySlugValidator = ({ children }) => {
  const [isValidSlug, setIsValidSlug] = React.useState();
  const [subCategoryData, setSubCategoryData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { categoryName, categoryId, subCategoryName, subCategoryId } =
    useParams();
  // console.log(categoryName,subCategoryName,subCategoryId)

  React.useEffect(() => {
    axios
      .get(
        `https://awesmatic.vistamatrix.in/api/customer/get_subcategory/list/${categoryId}`
      )
      .then((res) => {
        const result = res.data.data.find(
          (subCatData) => subCatData.slug === subCategoryName
        );
        if (result !== undefined) {
          setIsValidSlug(true);
          setSubCategoryData(result);
        } else {
          setIsValidSlug(false);
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (loading === true) {
    return <ShowLoading />;
  }
  if (isValidSlug === false) {
    return <PageNotFound />;
  }
  return (
    <SubCategoryPage
      subCategoryData={subCategoryData}
      subCategoryId={subCategoryId}
    />
  );
};

export default SubCatogerySlugValidator;
