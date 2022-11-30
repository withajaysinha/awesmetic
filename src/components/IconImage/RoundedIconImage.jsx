import React from "react";

const RoundedIconImage = ({ imageSrc, altText = "image" }) => {
  return <img src={imageSrc} alt={altText} className="rounded-circle" />;
};

export default RoundedIconImage;
