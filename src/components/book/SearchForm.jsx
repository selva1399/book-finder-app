import React from "react";
import BookBg from "../../assets/images/book-bg.jpg";

const SearchForm = (props) => {
  const { searchBook, setSearchBook, handleSearch } = props;

  return (
    <>
      <div className="container-fluid">
        <img
          src={BookBg}
          className="img-fluid w-100 book-bg"
          alt="book-bg"
          style={{ height: "70vh", objectFit: "cover" }}
        />
      </div>
      <div
        className="container-fluid position-absolute top-50"
        // style={{ height: "100vh" }}
      >
        {" "}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchBook.trim() === "") {
              alert("Please enter a book name.");
              return;
            }
            handleSearch();
          }}
        >
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-sm-8 col-md-6">
              <input
                className="form-control form-control-lg rounded-5 fs-4"
                style={{ width: "100%" }}
                type="text"
                placeholder="Search your book"
                autoFocus
                value={searchBook}
                onChange={(e) => setSearchBook(e.target.value)}
                required
              />
            </div>
            <div className="col-4 col-sm-3 col-md-2 mt-2 mt-sm-0">
              <button
                className="btn btn-lg w-100 rounded-5 border-3 border-white fw-bold fs-4 btn-search"
                style={{ backgroundColor: "#FADA7A" }}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
