import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container-fluid mt-5">
      <footer
        className="text-center text-black p-2 mt-auto"
        style={{ backgroundColor: "#FADA7A" }}
      >
        <p className="pt-3 fs-3 fw-bold">
          All rights reserved © BookFinder {currentYear}
        </p>
      </footer>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-50">
      {/* Your page content goes here */}
      <main className="flex-grow-1"></main>
      <Footer />
    </div>
  );
};

export default Layout;
