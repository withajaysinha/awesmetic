import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import category from '../../../../../assets/shopby_category_page'
import { categoryContext } from "../../../../Category.jsx";

export function Exfoliate() {
  const { category, userId } = useContext(categoryContext);
  return (
    <>
      <div className="card main-carousel mb-4 border-0">
        <div className="card-img w-100">
          <div className="card main-carousel mb-4 border-0">
            <div className="card-img w-100">
              <img
                src={category.catogreyHeaderDetails.firstImageDetails.image}
                className="w-100"
              />
            </div>
            <div className="card-img-overlay">
              <div className="main-text text-white container">
                <h2>
                  Exfoliate,Tone
                  <br /> &Hydrate{" "}
                </h2>
                <p>
                  Recieve your summer body gift consectetur adipisicing elit.
                </p>
                <NavLink to={`subcategory/${userId}/product/${userId}`}>
                  <button className="btn btn-light">SHOP NOW</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
