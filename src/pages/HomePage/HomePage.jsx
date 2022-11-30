import React from "react";
import { HomePageComponents } from "./Components";
const HomePage = () => {
  return (
    <>
      <HomePageComponents.HomePageBanner />
      <HomePageComponents.ShopByCatogery />
      <HomePageComponents.BestSellers />
      <HomePageComponents.AdvertismentSection />
      <HomePageComponents.NewArrivals />
      <HomePageComponents.TodaysDeals />
      <HomePageComponents.SkinConsultationBannerSection />
      <HomePageComponents.ShopByBrands />
      <HomePageComponents.Testimonials />
      {/*  <HomePageComponents.SocialMedia /> */}
    </>
  );
};

export default HomePage;
