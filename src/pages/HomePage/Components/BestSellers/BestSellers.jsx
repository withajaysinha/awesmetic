import axios from "axios";
import React from "react";
import MiniCarousel from "../../../../components/MiniCarousel/MiniCarousel";
import MiniSlider from "../../../../components/MiniSlider/MiniSlider";
import { generateCatogeryObject } from "../../../../utils/generateCatogeryObject";

const BestSellers = () => {
  const [bestSellersData, setBestSellersData] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        "https://awesmatic.vistamatrix.in/api/customer/product_category/list"
      )
      .then((res) => {
        setBestSellersData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (!bestSellersData) return <></>;
  return (
    <MiniCarousel carouselHeading={"Best Sellers"}>
      <MiniSlider
        sliderImagesDataArray={bestSellersData.map(generateCatogeryObject)}
        imagesToShow={5}
      />
    </MiniCarousel>
  );
};

export default BestSellers;
