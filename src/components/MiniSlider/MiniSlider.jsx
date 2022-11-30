import React from "react";
import Slider from "react-slick";
import "./MiniSlider.css";
import IconInfo from "../../components/IconInfo/IconInfo";
import { Link, NavLink } from "react-router-dom";
const MiniSlider = ({
  sliderImagesDataArray,
  imagesToShow,
  isRoundedImage = false,
}) => {
  const sliderSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: imagesToShow,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };
  // if(sliderImagesDataArray.length===0){
  //   return <>
  //      <h2>Product Page</h2>
  //   </>
  // }
  return (
    <Slider {...sliderSettings}>
      {sliderImagesDataArray.map((sliderData, index) => {
        const { image, name, icon } = sliderData;
        return (
          <React.Fragment key={index}>
            <Link
              to={`/${sliderData.slug.split(" ").join("-")}/${
                sliderData.parent_id
              }`}
              className={"text-decoration-none text-dark"}
              state={sliderData}
            >
              <IconInfo
                iconData={{ image, name, icon }}
                isRoundedImage={isRoundedImage}
              />
            </Link>
          </React.Fragment>
        );
      })}
    </Slider>
  );
};

export default MiniSlider;
