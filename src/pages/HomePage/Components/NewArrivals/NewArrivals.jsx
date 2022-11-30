import axios from "axios";
import React from "react";
import MiniCarousel from "../../../../components/MiniCarousel/MiniCarousel";
import MiniSlider from "../../../../components/MiniSlider/MiniSlider";
import { generateCatogeryObject } from "../../../../utils/generateCatogeryObject";
const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        "https://awesmatic.vistamatrix.in/api/customer/product_category/list"
      )
      .then((res) => {
        setNewArrivals(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (!newArrivals) return <></>;
  return (
    <MiniCarousel carouselHeading={"New Arrivals"}>
      <MiniSlider
        sliderImagesDataArray={newArrivals.map(generateCatogeryObject)}
        imagesToShow={5}
      />
      <MiniSlider
        sliderImagesDataArray={newArrivals.map(generateCatogeryObject)}
        imagesToShow={5}
      />
    </MiniCarousel>
  );
};

export default NewArrivals;
