import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookList from "./components/book/BookList";
import BookDetails from "./components/book/BookDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/works/:id" element={<BookDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
