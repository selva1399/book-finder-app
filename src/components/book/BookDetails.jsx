import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import noThumbnail from "../../assets/images/no-thumbnail.jpg";

const BookDetails = () => {
  const { id } = useParams();
  const [singleBook, setSingleBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/works/${id}.json`
      );
      const bookDetails = response.data;

      if (bookDetails) {
        const {
          description,
          title,
          covers,
          subject_places,
          subject_times,
          subjects,
        } = bookDetails;

        const singleBook = {
          description:
            typeof description === "string"
              ? description
              : description?.value || "No description found",
          title: title,
          cover_img: covers
            ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
            : noThumbnail,
          subject_places: subject_places
            ? subject_places.join(", ")
            : "No subject places found",
          subject_times: subject_times
            ? subject_times.join(", ")
            : "No subject times found",
          subjects: subjects ? subjects.join(", ") : "No subjects found",
        };

        setSingleBook(singleBook);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <p className="fs-4 text-secondary">Loading book details...</p>
      </div>
    );
  }

  if (!singleBook) {
    return (
      <div className="container text-center mt-5">
        <p className="fs-4 text-danger">Book details not found!</p>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ minHeight: "100vh" }}>
      <div className="row">
        {/* Book Cover */}
        <div className="col-lg-5 col-md-6 mb-4">
          <div className="card shadow">
            <img
              src={singleBook.cover_img}
              className="card-img-top"
              alt={singleBook.title}
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="col-lg-7 col-md-6">
          <h1 className="text-danger mb-4 text-uppercase">
            {singleBook.title}
          </h1>
          <h2>Description:</h2>
          <p className="text-muted mb-4 fs-3">{singleBook.description}</p>
          <ul className="list-group fs-4">
            <li className="list-group-item p-4">
              <strong>Subjects:</strong> {singleBook.subjects}
            </li>
            <li className="list-group-item p-4">
              <strong>Subject Places:</strong> {singleBook.subject_places}
            </li>
            <li className="list-group-item p-4">
              <strong>Subject Times:</strong> {singleBook.subject_times}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
