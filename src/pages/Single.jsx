// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import ghibliAPI from "../services/ghibliAPI";
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Single = props => {

  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {

    const loadItem = async () => {
      const data = await ghibliAPI.getOne(category, id);
      setItem(data);
    };

    loadItem();
  }, [category, id]);

  if (!item) {
    return (
      <div className="container text-center mt-5">
        <h1 className="display-4">Loading...</h1>
      </div>
    );
  }

  const title = item.title || item.name;

  return (
    <div className="container mt-5">
      <div className="card mb-4">
        <img
          src={item.movie_banner || item.image || "https://placehold.co/900x300?text=Ghibli"}
          className="card-img-top"
          alt={title}
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h1 className="card-title">{title}</h1>

          {item.description && (
            <p className="card-text">{item.description}</p>
          )}

          <hr className="my-4" />

          <ul className="list-group list-group-flush">
            {item.original_title && (
              <li className="list-group-item">
                <strong>Original title:</strong> {item.original_title}
              </li>
            )}

            {item.director && (
              <li className="list-group-item">
                <strong>Director:</strong> {item.director}
              </li>
            )}

            {item.producer && (
              <li className="list-group-item">
                <strong>Producer:</strong> {item.producer}
              </li>
            )}

            {item.release_date && (
              <li className="list-group-item">
                <strong>Release date:</strong> {item.release_date}
              </li>
            )}

            {item.rt_score && (
              <li className="list-group-item">
                <strong>Score:</strong> {item.rt_score}
              </li>
            )}

            {item.gender && (
              <li className="list-group-item">
                <strong>Gender:</strong> {item.gender}
              </li>
            )}

            {item.age && (
              <li className="list-group-item">
                <strong>Age:</strong> {item.age}
              </li>
            )}

            {item.eye_color && (
              <li className="list-group-item">
                <strong>Eye color:</strong> {item.eye_color}
              </li>
            )}

            {item.hair_color && (
              <li className="list-group-item">
                <strong>Hair color:</strong> {item.hair_color}
              </li>
            )}

            {item.climate && (
              <li className="list-group-item">
                <strong>Climate:</strong> {item.climate}
              </li>
            )}

            {item.terrain && (
              <li className="list-group-item">
                <strong>Terrain:</strong> {item.terrain}
              </li>
            )}

            {item.surface_water && (
              <li className="list-group-item">
                <strong>Surface water:</strong> {item.surface_water}
              </li>
            )}
          </ul>

          <Link to="/">
            <span className="btn btn-primary btn-lg mt-4" role="button">
              Back home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Single.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
