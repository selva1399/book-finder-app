import React from "react";
import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      className="container-fluid position-fixed top-0"
      style={{ zIndex: 10 }}
    >
      <nav
        className="navbar navbar-expand-lg p-3"
        style={{ backgroundColor: "#FADA7A" }}
      >
        <div className="container container-lg">
          <a className="navbar-brand fw-bold fs-3" href="/">
            <FaBookReader />
            <span className="pt-1"> BookFinder </span>
          </a>
          <button
            className="navbar-toggler border border-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-4 fw-bold">
              <li className="nav-item me-5">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
