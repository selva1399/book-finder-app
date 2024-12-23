import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "../components/book/SearchForm";
import BookList from "../components/book/BookList";
import { useNavigate } from "react-router-dom";
import BookDetails from "../components/book/BookDetails";

const Home = () => {
  const [searchBook, setSearchBook] = useState("");
  const [books, setBooks] = useState([]);
  const [resultTitle, setResultTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      // console.log("entry: ", searchBook);
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchBook}`
      );
      const data = response.data;
      const { docs } = data;
      // console.log(docs);

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBooks(newBooks);
        setLoading(false);
        // console.log(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setLoading(false);
        setResultTitle("No Search Result Found!");
      }

      setSearchBook("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookDetail = (id) => {
    try {
      navigate(`${id}`);
      // console.log("single book");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchForm
        handleSearch={handleSearch}
        searchBook={searchBook}
        setSearchBook={setSearchBook}
      />

      <BookList
        resultTitle={resultTitle}
        books={books}
        loading={loading}
        handleBookDetail={handleBookDetail}
      />
    </>
  );
};

export default Home;
