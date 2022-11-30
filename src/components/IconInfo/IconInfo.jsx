import React from "react";
import "./IconInfo.css";
const IconInfo = ({ iconData, isRoundedImage }) => {
  return (
    <>
      <div className="icon-image p-1">
        <div
          className="img_box"
          style={{
            backgroundImage: `url(${
              iconData.icon ? iconData.icon : iconData.image
            })`,
            borderRadius: isRoundedImage ? "50%" : "0",
          }}
        ></div>
      </div>
      {iconData.name && (
        <div className="text-center fw-bold pt-2">
          <p id="icon-info-text">
            <span>{iconData.name}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default IconInfo;
