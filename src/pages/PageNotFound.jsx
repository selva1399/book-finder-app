import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "77vh", textAlign: "center" }}
    >
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="text-muted mb-4 fs-4">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-outline-warning fw-bold fs-5">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
