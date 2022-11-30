import React from "react";
import "./AdvertismentSection.css";
import axios from "axios";
const AdvertismentSection = () => {
  const [advertismentData, setAdvertismentData] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://awesmatic.vistamatrix.in/api/customer/sliders/list")
      .then((res) => {
        setAdvertismentData(
          res.data.data.filter(
            (deals) => deals.display_type === "Featured List"
          )
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(advertismentData);
  if (!advertismentData) return <></>;
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
                        src={advertismentData[0].banner}
                        className="w-100"
                        alt=""
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
                          src={advertismentData[1].banner}
                          className="w-100"
                          alt="imh"
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
                            src={advertismentData[2].banner}
                            className="w-100"
                            alt=""
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
                            src={advertismentData[3].banner}
                            className="w-100"
                            alt=""
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
