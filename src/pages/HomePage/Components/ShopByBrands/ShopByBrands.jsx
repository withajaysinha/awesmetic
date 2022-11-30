import React from "react";
import Slider from "react-slick";
import { homePageAssets } from "../../../../assets/homePageAssets";
import "./ShopByBrands.css";
const ShopByBrands = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="container home_components p-5 mb-4">
      <div className="text-center">
        <h1>Shop By Brands</h1>
      </div>
      <div>
        <Slider {...settings}>
          {homePageAssets.shopByBrandsImagesArray.map((image, index) => {
            return (
              <React.Fragment key={index}>
                <div className="shopbybrand-img p-1 mx-1">
                  <img src={image} alt="" />
                </div>
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByBrands;
