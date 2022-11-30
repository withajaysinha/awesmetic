import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Products({ productId }) {
  // console.log(productId)
  const [productList, setProductList] = React.useState();

  React.useEffect(() => {
    axios
      .get(
        `https://awesmatic.vistamatrix.in/api/customer/get_product_by_categoryid/list/${productId}`
      )
      .then((res) => {
        setProductList(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [productId]);
  if (!productList) return <></>;
  return (
    <>
      {/* {console.log(productList[0])} */}

      <div className="container">
        <div className="row">
          {productList.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <div className="product col-3">
                  <Link to={`${product.product_name}/${product.id}`}>
                    <div className="">
                      <img
                        src={product.images[0].image}
                        alt=""
                        className="d-block w-100"
                      />
                    </div>
                    <h6>{product.product_name}</h6>
                  </Link>
                  <div>
                    <button className="btn btn-dark w-100">Add To Cart</button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <h6>Products To be Render</h6>
    </>
  );
}

export default Products;
