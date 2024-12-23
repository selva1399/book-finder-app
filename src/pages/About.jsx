import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-danger mb-4">About BookFinder</h1>
      <p className="fs-4 text-muted">
        <strong>Welcome to BookFinder</strong>, your ultimate companion for
        discovering books! Whether you are a passionate reader, a book
        collector, or someone simply searching for their next great read,
        BookFinder helps you find the perfect book in just a few clicks.
      </p>

      <h3 className="text-warning">Our Mission</h3>
      <p className="fs-4">
        At BookFinder, we offer an easy-to-use search tool that pulls from a
        vast library of books, allowing you to explore titles, authors, genres,
        and more. Our mission is to connect readers with the books that inspire,
        educate, and entertain.
      </p>

      <h3 className="text-warning">Features</h3>
      <ul className="fs-4">
        <li>
          <strong>Search for Books:</strong> Find books by title, author,
          subject, and more. With a vast collection from Open Library, you can
          explore a diverse range of books.
        </li>
        <li>
          <strong>Book Details:</strong> Get detailed information about each
          book, including descriptions, authors, publication years, and cover
          images.
        </li>
        <li>
          <strong>User-Friendly Interface:</strong> Search and navigate with
          ease, whether you're on your computer, tablet, or mobile device.
        </li>
        <li>
          <strong>No Cost:</strong> The best part? It's all completely free!
          Find your next book without spending an any amount.
        </li>
      </ul>

      <h3 className="text-warning">Get Started</h3>
      <p className="fs-4">
        Whether you're an avid reader or just starting your book journey,
        BookFinder is here to help you discover new titles, authors, and genres
        you'll love.
      </p>

      <p className="fs-4">
        <strong>Happy reading!</strong>
      </p>
    </div>
  );
};

export default About;
