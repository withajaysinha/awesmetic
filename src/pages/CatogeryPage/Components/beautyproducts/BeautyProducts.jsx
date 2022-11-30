import React, { useContext } from "react";
import "./BeautyProducts.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { categoryContext } from "../../CatogeryPage";
import Products from "../../../../components/Products/Products";

export const BeautyProducts = () => {
  const { catogeryData, categoryId } = useContext(categoryContext);
  // const [subcatData,setSubCatData] =React.useState();
  const [subCatogerySectionData, setSubCatogerySectionData] = React.useState();
  // const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    axios
      .get(
        `https://awesmatic.vistamatrix.in/api/customer/get_subcategory/list/${categoryId}`
      )
      .then((res) => {
        setSubCatogerySectionData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [categoryId]);

  if (!subCatogerySectionData) return <></>;

  if (subCatogerySectionData.length === 0)
    return <Products productId={categoryId} />;
  return (
    <>
      <div className="container">
        <div className="row w-100 mx-4 py-3 cat_images">
          {subCatogerySectionData.map((subCatogeryData) => {
            return (
              <React.Fragment key={subCatogeryData.id}>
                <div className="col-2 col-sm-4 col-md-3 col-lg-2">
                  <Link
                    to={`/${catogeryData.slug}/${categoryId}/${subCatogeryData.slug}/${subCatogeryData.id}`}
                  >
                    <div className="p-2 bg-categ text-center rounded">
                      <div
                        className="cat_img"
                        style={{
                          backgroundImage: `url(${subCatogeryData.icon})`,
                        }}
                      ></div>
                      <div className="cat_text text-center pt-3">
                        <p className="fw-bold text-uppercase m-0">
                          {subCatogeryData.name}
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
};
