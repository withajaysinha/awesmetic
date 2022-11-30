import React from "react";
import "./MainImages.css";
import Slider from "react-slick";
import { homePageAssets } from "../../../../../assets/homePageAssets";

const MainImages = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="main-images-component container">
        <Slider {...settings}>
          {homePageAssets.mainImagesArray.map((imgSrc, index) => {
            return (
              <React.Fragment key={index}>
                <div className="bg_color">
                  <div className="main-image">
                    <img loading="lazy" src={imgSrc} alt="" />
                  </div>
                  <div className="bg_color_inner">
                    <h6>your luxury skincare</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="">SHOP NOW</button>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
          {/* <div className="bg_color">
            <div className="main-image">
              <img src={MainImagesAssets.MainImg1} alt="" />
            </div>
            <div className="bg_color_inner">
              <h6>your luxury skincare</h6>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="">SHOP NOW</button>
            </div>
          </div>
          <div className="bg_color">
            <div className="main-image">
              <img src={MainImagesAssets.MainImg2} alt="" />
            </div>
            <div className="bg_color_inner">
              <h6>BestSellers</h6>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="">SHOP NOW</button>
            </div>
          </div>
          <div className="bg_color">
            <div className="main-image">
              <img src={MainImagesAssets.MainImg3} alt="" />
            </div>
            <div className="bg_color_inner">
              <h6>your skin care</h6>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="">SHOP NOW</button>
            </div>
          </div>
          <div className="bg_color">
            <div className="main-image">
              <img src={MainImagesAssets.MainImg1} alt="" />
            </div>
            <div className="bg_color_inner">
              <h6>your skin care</h6>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="">SHOP NOW</button>
            </div>
          </div>
          <div className="bg_color">
            <div className="main-image">
              <img src={MainImagesAssets.MainImg2} alt="" />
            </div>
            <div className="bg_color_inner">
              <h6>BestSellers</h6>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="">SHOP NOW</button>
            </div>
          </div>
          <div className="bg_color">
            <div className="main-image">
              <img src={MainImagesAssets.MainImg3} alt="" />
            </div>
            <div className="bg_color_inner">
              <h6>your skin care</h6>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <button className="">SHOP NOW</button>
            </div>
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default MainImages;
