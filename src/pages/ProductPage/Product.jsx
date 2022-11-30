import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function Product() {
  const value = useParams();
  const ProductId = value.productId;
  console.log(value, ProductId);
  const [productDetails, setProductDetails] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        `https://awesmatic.vistamatrix.in/api/customer/get_product_details/${ProductId}`
      )
      .then((res) => {
        setProductDetails(
          res.data.data.find((product) => product.id == ProductId)
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, [ProductId]);

  if (!productDetails) return <></>;
  return (
    <div>
      {console.log(productDetails)}
      <h6>Product Page</h6>
      {/* {
            productDetails.map((product)=>{
                return (
                    <React.Fragment key={product.id} >
                        <div>
                            <h6>{product.brand_name}</h6>
                        </div>
                    </React.Fragment>
                )
            })
        } */}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="p-2">
              <div className="product_main_image">
                {/* <p>{product.productId}</p> */}
                <img src={productDetails.images[0].image} alt="" />
              </div>
              <div className="product_slider_images">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 product_details">
            <div className="p-2">
              {/* Product title */}
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{productDetails.product_name}</h5>
                  <p>Rating(225)</p>
                </div>
                <button className="btn btn-danger">HOT</button>
              </div>
              {/* Product Prize */}
              <div className="ruppes">
                <span className="text-decoration-line-through mr-2 ">
                  Rs.{productDetails.mrp}
                </span>
                <span className="">Rs.{productDetails.mrp} /-</span>
                <button className="btn btn btn-light border">IN STOCK</button>
              </div>
              {/* Product Discreption */}
              <div className="">
                <p>{productDetails.product_description}</p>
              </div>
              {/* Product color  */}
              <div className="row">
                <div className="col-4 ">
                  <div className="p-2">
                    <p>Color:Orange</p>
                  </div>
                </div>
                <div className="col-8">
                  <div className="p-2 border">
                    <h6>Get it Shipped</h6>
                  </div>
                </div>
              </div>
              {/* Product Add to Cart */}
              <div className="row">
                <div className="col-3">
                  <div className="border p-2">
                    <button className="btn btn-light">-</button>
                    <span>1</span>
                    <button className="btn btn-light">+</button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2">
                    <p>icon</p>
                    <button className="btn btn-dark">ADD TO CART</button>
                  </div>
                </div>
                <div className="col-5">
                  <div className="p-2">
                    <p>wishlist_icon</p>
                    <button className="btn btn-light">ADD TO WISHLIST</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
