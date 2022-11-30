import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ShowLoading from "../ShowLoading/ShowLoading";
import PageNotFound from "../PageNotFound/PageNotFound";
import CategoryPage from "../../pages/CatogeryPage/CatogeryPage";

const CatogerySlugValidator = ({ children }) => {
  const [isValidSlug, setIsValidSlug] = React.useState();
  const [catogeryData, setCatogeryData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { categoryName, categoryId } = useParams();
  // console.log(categoryName,categoryId)

  React.useEffect(() => {
    axios
      .get(
        "https://awesmatic.vistamatrix.in/api/customer/product_category/list"
      )
      .then((res) => {
        const result = res.data.data.find(
          (catData) => catData.slug === categoryName
        );
        if (result !== undefined) {
          setIsValidSlug(true);
          setCatogeryData(result);
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
  return <CategoryPage catogeryData={catogeryData} categoryId={categoryId} />;
};

export default CatogerySlugValidator;
