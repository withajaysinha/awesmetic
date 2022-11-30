import React from "react";
import "./SkinConsultationBannerSection.css";
import { homePageAssets } from "../../../../assets/homePageAssets";
const SkinConsultationBannerSection = () => {
  return (
    <>
      <div
        className="container banner-consultation mb-4"
        style={{
          backgroundImage: `url(${homePageAssets.skinConsultationStaticBanner})`,
        }}
      >
        <div className="row">
          <div className="col-sm-6 text-center">
            <h4>GET ONE-ON-ONE</h4>
            <h1>SKIN CONSULTAION</h1>
            <p>Find the best product for your skin and body needs</p>
            <button className="btn btn-light btn-theme-round text-center">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkinConsultationBannerSection;
