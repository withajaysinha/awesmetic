import React from "react";
import "./SubCategory.css";
import { subCategoryContext } from "../../SubCategoryPage";
import { Link } from "react-router-dom";

function SubCategory() {
  const { categoryName, categoryId, subCategory, subCategoryId } =
    React.useContext(subCategoryContext);
  //  console.log(categoryName,categoryId,subCategory,subCategoryId)
  return (
    <>
      <div className="container">
        <div className="row w-100 mx-4 py-3 cat_images">
          {subCategory.map((subCategoryData) => {
            return (
              <React.Fragment key={subCategoryData.id}>
                <div className="col-2 col-sm-4 col-md-3 col-lg-2">
                  <Link
                    to={`/${categoryName}/${categoryId}/${subCategoryData.slug}/${subCategoryData.id}`}
                  >
                    <div className="p-2 bg-categ text-center rounded">
                      <div
                        className="cat_img"
                        style={{
                          backgroundImage: `url(${subCategoryData.icon})`,
                        }}
                      ></div>
                      <div className="cat_text text-center pt-3">
                        <p className="fw-bold text-uppercase m-0">
                          {subCategoryData.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SubCategory;
