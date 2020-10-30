import React, { useState, useContext } from "react";
import RecordContext from "../../context/record/recordContext";

const RecordForm = () => {
  const recordContext = useContext(RecordContext);

  const [record, setRecord] = useState({
    title: "",
    artist: "",
    genre: "",
    label: "",
    format: "vinyl",
    country: "",
    releaseDate: "",
    rating: "",
    notes: "",
  });

  const {
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

  const onChange = (e) =>
    setRecord({ ...record, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    recordContext.addRecord(record);
    setRecord({
      title: "",
      artist: "",
      genre: "",
      label: "",
      format: "vinyl",
      country: "",
      releaseDate: "",
      rating: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Record</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Artist"
        name="artist"
        value={artist}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Genre"
        name="genre"
        value={genre}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Label"
        name="label"
        value={label}
        onChange={onChange}
      />
      <h5>Album Format</h5>
      <input
        type="radio"
        name="format"
        value="Vinyl"
        checked={format === "Vinyl"}
        onChange={onChange}
      />{" "}
      Vinyl{" "}
      <input
        type="radio"
        name="format"
        value="Digital"
        checked={format === "Digital"}
        onChange={onChange}
      />{" "}
      Digital{" "}
      <input
        type="radio"
        name="format"
        value="CD"
        checked={format === "CD"}
        onChange={onChange}
      />{" "}
      CD{" "}
      <input
        type="radio"
        name="format"
        value="Cassette"
        checked={format === "Cassette"}
        onChange={onChange}
      />{" "}
      Cassette{" "}
      <input
        type="text"
        placeholder="Country"
        name="country"
        value={country}
        onChange={onChange}
      />
      <input
        type="date"
        placeholder="Release Date"
        name="releaseDate"
        value={releaseDate}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Rating"
        name="rating"
        value={rating}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Notes"
        name="notes"
        value={notes}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default RecordForm;
