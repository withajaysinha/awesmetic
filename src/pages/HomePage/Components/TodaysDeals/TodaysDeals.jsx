import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MiniCarousel from "../../../../components/MiniCarousel/MiniCarousel";
import "./TodaysDeals.css";
const TodaysDeals = () => {
  const [todaysDealsData, setTodaysDealsData] = React.useState();
  const sliderSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
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
  React.useEffect(() => {
    axios
      .get("https://awesmatic.vistamatrix.in/api/customer/get_all_deals/list")
      .then((res) => {
        setTodaysDealsData(
          res.data.data.find((deals) => deals.heading === "Today's Deal")
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (!todaysDealsData) return <></>;
  // <MiniCarousel carouselHeading={"Today's Deals"}>
  //   <MiniSlider
  //     sliderImagesDataArray={todaysDeals.map(generateCatogeryObject)}
  //     imagesToShow={5}
  //   />
  // </MiniCarousel>
  return (
    <>
      <MiniCarousel carouselHeading={todaysDealsData.heading}>
        <Slider {...sliderSettings}>
          {todaysDealsData.products.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <Link
                  className={"text-decoration-none text-dark"}
                  to={`/dp/${product.product_name.split(' ').join('-')}/${product.id}`}
                >
                  <>
                    <div className="icon-image p-1">
                      <div
                        className="img_box"
                        style={{
                          backgroundImage: `url(${product.images[0].image})`,
                        }}
                      ></div>
                    </div>
                    <div className="text-center fw-bold pt-2">
                      <p id="icon-info-text">
                        <span>{product.product_name}</span>
                      </p>
                    </div>
                  </>
                </Link>
              </React.Fragment>
            );
          })}
        </Slider>
      </MiniCarousel>
    </>
  );
};

export default TodaysDeals;
