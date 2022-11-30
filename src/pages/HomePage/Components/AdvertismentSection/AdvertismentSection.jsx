import React from "react";
import "./AdvertismentSection.css";
import { homePageAssets } from "../../../../assets/homePageAssets";
const AdvertismentSection = () => {
  return (
    <>
      <div className="container advertisment-images mb-4 p-3">
        <div className="row">
          <div className="col-12  col-sm-6 advertisment-img mb-2">
            <div className="container">
              <div className="row">
                <div className="">
                  <div className="card border-0 hover_content">
                    <div className="card-img">
                      <img
                        loading="lazy"
                        src={homePageAssets.advertismentImagesArray[0]}
                        className="w-100"
                      />
                    </div>
                    <div className="card-img-overlay ">
                      <div className=" justify-content-center content">
                        <h6 className="">SPRING COLLECITION</h6>
                        <button className="btn btn-light border-bottom">
                          shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  col-sm-6 ">
            <div className="advertisment-img">
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="card border-0 hover_content">
                      <div className="card-img">
                        <img
                          loading="lazy"
                          src={homePageAssets.advertismentImagesArray[1]}
                          className="w-100"
                        />
                      </div>
                      <div className="card-img-overlay ">
                        <div className="justify-content-center content">
                          <h6 className="">LIPCARE COLLECITION</h6>
                          <button className="btn  btn-light border-bottom">
                            shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-12  col-sm-6 advertisment-img mb-2">
                <div className="container">
                  <div className="row">
                    <div className="">
                      <div className="card border-0 hover_content">
                        <div className="card-img">
                          <img
                            loading="lazy"
                            src={homePageAssets.advertismentImagesArray[2]}
                            className="w-100"
                          />
                        </div>
                        <div className="card-img-overlay ">
                          <div className=" justify-content-center content">
                            <h6 className="">BEST OF CERLA 2020</h6>
                            <button className="btn btn-light border-bottom">
                              shop Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  col-sm-6 advertisment-img">
                <div className="container">
                  <div className="row">
                    <div className="">
                      <div className="card border-0 hover_content">
                        <div className="card-img">
                          <img
                            loading="lazy"
                            src={homePageAssets.advertismentImagesArray[3]}
                            className="w-100"
                          />
                        </div>
                        <div className="card-img-overlay ">
                          <div className="justify-content-center content">
                            <h6 className="">EYE PALETTES</h6>
                            <button className="btn btn-light border-bottom">
                              shop Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertismentSection;
