import axios from "axios";
import React from "react";
import MiniCarousel from "../../../../components/MiniCarousel/MiniCarousel";
import MiniSlider from "../../../../components/MiniSlider/MiniSlider";
import { generateCatogeryObject } from "../../../../utils/generateCatogeryObject";
const TodaysDeals = () => {
  const [todaysDeals, setTodaysDeals] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        "https://awesmatic.vistamatrix.in/api/customer/product_category/list"
      )
      .then((res) => {
        setTodaysDeals(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (!todaysDeals) return <></>;
  return (
    <MiniCarousel carouselHeading={"Today's Deals"}>
      <MiniSlider
        sliderImagesDataArray={todaysDeals.map(generateCatogeryObject)}
        imagesToShow={5}
      />
    </MiniCarousel>
  );
};

export default TodaysDeals;
