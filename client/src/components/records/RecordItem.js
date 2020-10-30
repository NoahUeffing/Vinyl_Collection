import React from "react";
import PropTypes from "prop-types";

const RecordItem = ({ record }) => {
  const {
    id,
    title,
    artist,
    genre,
    label,
    format,
    country,
    releaseDate,
    rating,
    notes,
  } = record;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        <i>{title}</i> - {artist}
        <span
          style={{ float: "right" }}
          className={
            "badge " + (rating === "10" ? "badge-success" : "badge-primary")
          }
        >
          {rating}
        </span>
      </h3>
      <ul className="list">
        {genre && (
          <li>
            <i className="fas fa-music"></i>
            {genre}
          </li>
        )}
        {label && (
          <li>
            <i className="fas fa-building"></i>
            {label}
          </li>
        )}
        {format && (
          <li>
            <i className="fas fa-file-audio"></i>
            {format}
          </li>
        )}
        {country && (
          <li>
            <i className="far fa-flag"></i>
            {country}
          </li>
        )}
        {releaseDate && (
          <li>
            <i className="far fa-calendar-alt"></i>
            {releaseDate}
          </li>
        )}
        {notes && (
          <li>
            <i className="far fa-comment"></i>
            {notes}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

RecordItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordItem;
{
}
