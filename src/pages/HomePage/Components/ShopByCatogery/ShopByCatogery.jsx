import axios from "axios";
import React from "react";
import MiniCarousel from "../../../../components/MiniCarousel/MiniCarousel";
import MiniSlider from "../../../../components/MiniSlider/MiniSlider";

const generateCatogeryObject = (catogery) => {
  return {
    image: catogery.image,
    name: catogery.name,
    parent_id: catogery.parent_id,
    self_id: catogery.id,
    slug: catogery.slug,
    display_type: catogery.display_type,
    icon: catogery.icon,
  };
};
const ShopByCatogery = () => {
  const [shopByCatogeriesData, setShopByCatogeriesData] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        "https://awesmatic.vistamatrix.in/api/customer/product_category/list"
      )
      .then((res) => {
        setShopByCatogeriesData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (!shopByCatogeriesData) return <></>;
  return (
    <MiniCarousel carouselHeading={"Shop by Category"}>
      <MiniSlider
        sliderImagesDataArray={shopByCatogeriesData.map(generateCatogeryObject)}
        imagesToShow={5}
        isRoundedImage={true}
      />
    </MiniCarousel>
  );
};

export default ShopByCatogery;
