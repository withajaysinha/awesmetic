import React from "react";
import ShowLoading from "../ShowLoading/ShowLoading";
import "./MainBody.css";
const MainBody = ({ children }) => {
  if (!children) {
    return <ShowLoading />;
  }
  return <main>{children}</main>;
};

export default MainBody;
