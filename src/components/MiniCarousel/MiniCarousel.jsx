import React from "react";
import "./MiniCarousel.css";
const MiniCarousel = ({ carouselHeading, carouselSubHeading, children }) => {
  return (
    <>
      <section className="container cat my-4">
        <div className="container bg-white py-3">
          {carouselHeading && (
            <div className="text-center">
              <p className="fw-bolder fs-3">{carouselHeading}</p>
            </div>
          )}
          {carouselSubHeading && (
            <div className="text-center text-secondary h6">
              <h4>{carouselSubHeading}</h4>
            </div>
          )}
          {children}
        </div>
      </section>
    </>
  );
};

export default MiniCarousel;
