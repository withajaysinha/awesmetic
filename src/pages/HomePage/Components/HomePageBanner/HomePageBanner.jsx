import React from "react";
import Slider from "react-slick";
import "./HomePageBanner.css";
import { homePageAssets } from "../../../../assets/homePageAssets/index.js";
import MainImages from "./MainImages/MainImages";
const HomePageBanner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="main-carousel border-0 pb-4">
        <div className="big-image">
          <Slider {...settings}>
            <div className="card main-carousel-inner border-0 ">
              <div className="card-img w-100">
                <div className="container homepage_banner">
                  <div className="row">
                    <div className="col-12 col-sm-6"></div>
                    <div className="col-12 col-sm-6">
                      <img
                        loading="lazy"
                        src={homePageAssets.homePageStaticBanner}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-img-overlay">
                <div className="main-text text-white container">
                  <h1 className="title_banner">
                    Early Black 1<br></br> Friday Deals{" "}
                  </h1>
                  <p>
                    save up to 50% <br></br>on beauty they'll love.
                  </p>
                  <a href="#" className="btn btn-light btn-theme-round">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div className="card main-carousel-inner border-0">
              <div className="card-img w-100">
                <div className="container homepage_banner">
                  <div className="row">
                    <div className="col-12 col-sm-6"></div>
                    <div className="col-12 col-sm-6">
                      <img
                        loading="lazy"
                        src={homePageAssets.homePageStaticBanner}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-img-overlay">
                  <div className="main-text text-white container">
                    <h1 className="title_banner">
                      Early Black 1<br></br> Friday Deals{" "}
                    </h1>
                    <p>
                      save up to 50% <br></br>on beauty they'll love.
                    </p>
                    <a href="#" className="btn btn-light btn-theme-round">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-100 center-sect ">
          <MainImages />
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
