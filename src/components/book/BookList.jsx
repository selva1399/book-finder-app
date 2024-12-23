import React from "react";
import bookImg from "../../assets/images/no-thumbnail.jpg";

const BookList = (props) => {
  const { resultTitle, books, loading, handleBookDetail } = props;

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="mt-5 mb-5 text-warning">
          {resultTitle ? resultTitle : "Find Your Book"}
        </h1>
        {loading ? (
          <>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </>
        ) : (
          <div className="row g-4">
            {books.map((data) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={data.id}>
                <div className="card h-100 shadow">
                  <img
                    title={data.title}
                    src={
                      data.cover_id
                        ? `https://covers.openlibrary.org/b/id/${data.cover_id}-M.jpg`
                        : bookImg
                    }
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                    alt={data.title || "Book cover"}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate mb-2">
                      {data.title}
                    </h5>
                    <h6 className="card-text text-truncate mb-2">
                      Author: <span className="fw-normal">{data.author}</span>
                    </h6>
                    <h6 className="card-text  mb-2">
                      Total Editions:{" "}
                      <span className="fw-normal">{data.edition_count}</span>
                    </h6>
                    <h6 className="card-text mb-3">
                      First Publish Year:{" "}
                      <span className="fw-normal">
                        {data.first_publish_year}
                      </span>
                    </h6>
                    <button
                      type="submit"
                      className="btn btn-outline-warning text-black mt-auto fw-bold"
                      onClick={() => {
                        handleBookDetail(data.id);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
