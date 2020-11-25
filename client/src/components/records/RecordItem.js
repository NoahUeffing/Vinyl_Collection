import React, { useContext } from "react";
import PropTypes from "prop-types";
import RecordContext from "../../context/record/recordContext";

const RecordItem = ({ record }) => {
  const recordContext = useContext(RecordContext);
  const { deleteRecord, setCurrent, clearCurrent } = recordContext;

  const {
    _id,
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

  const onDelete = () => {
    deleteRecord(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        <i>{title}</i> - {artist}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (rating > 6 ? "badge-success" : "") +
            (rating < 4 ? "badge-danger" : "") +
            (rating <= 6 && 4 <= rating ? "badge-caution" : "") +
            (rating === null ? "badge-caution" : "")
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
            {releaseDate === null ? releaseDate : releaseDate.split("T")[0]}
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
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(record)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

RecordItem.propTypes = {
  record: PropTypes.object.isRequired,
};

export default RecordItem;
