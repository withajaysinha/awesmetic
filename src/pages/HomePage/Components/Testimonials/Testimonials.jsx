import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import axios from "axios";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        "https://awesmatic.vistamatrix.in/api/customer/get_testimonials/list"
      )
      .then((res) => {
        setTestimonialsData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!testimonialsData) return <></>;
  return (
    <>
      <div className="container pt-5 pb-5 mb-4">
        <div className="text-center">
          <h1>Testimonials</h1>
        </div>

        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonialsData.map((data) => {
              return (
                <React.Fragment key={data.id}>
                  <div className="testimonial-person">
                    <div className="testimonial-img">
                      <img src={data.image} alt="" />
                    </div>
                    <div className="px-1">
                      <h5 className="m-0">{data.name}</h5>
                      <strong>{data.designation}</strong>
                      <p>{data.content}</p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
