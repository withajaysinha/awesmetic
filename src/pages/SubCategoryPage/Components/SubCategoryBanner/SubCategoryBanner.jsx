import React from "react";
import axios from "axios";
import "./SubCategoryBanner.css";
import { subCategoryContext } from "../../SubCategoryPage";
import { Link } from "react-router-dom";

function SubCategoryBanner() {
  const { categoryName, categoryId, subCategory, subCategoryId } =
    React.useContext(subCategoryContext);
  const [subCategoryDetails, setSubCategoryDetails] = React.useState();
  // console.log(categoryName,categoryId,subCategory,subCategoryId)

  React.useEffect(() => {
    axios
      .get(
        `https://awesmatic.vistamatrix.in/api/customer/get_category_details/${subCategoryId}`
      )
      .then((res) => {
        setSubCategoryDetails(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [subCategoryId]);
  if (!subCategoryDetails) return <></>;
  return (
    // {console.log(subCategoryDetails)}
    <div
      className="subCategory_page_banner border-0 d-flex align-items-center"
      style={{ backgroundImage: `url(${subCategoryDetails.image})` }}
    >
      <div className="text-dark container h-100 ">
        <span>
          <Link to="/">
            <button className="btn text-white">Home /</button>
          </Link>
          <Link to={``}>
            <button className="btn text-white bold">
              {subCategoryDetails.name}
            </button>
          </Link>
        </span>
        <p className="py-3 w-50">{subCategoryDetails.description}</p>
      </div>
    </div>
  );
}

export default SubCategoryBanner;
