import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container text-center my-5">
      <div>
        <h1>404</h1>
        <p className="my-2">The page you are looking for does not exist.</p>
        <Link to="/">
          <button className="btn btn-light">Go Back to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
