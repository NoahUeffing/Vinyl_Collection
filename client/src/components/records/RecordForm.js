import React, { useState, useContext, useEffect } from "react";
import RecordContext from "../../context/record/recordContext";

const RecordForm = () => {
  const recordContext = useContext(RecordContext);

  const { addRecord, updateRecord, clearCurrent, current } = recordContext;

  useEffect(() => {
    if (current !== null) {
      setRecord(current);
    } else {
      setRecord({
        title: "",
        artist: "",
        genre: "",
        label: "",
        format: "Vinyl",
        country: "",
        releaseDate: "",
        rating: "",
        notes: "",
      });
    }
  }, [recordContext, current]);

  const [record, setRecord] = useState({
    title: "",
    artist: "",
    genre: "",
    label: "",
    format: "Vinyl",
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
    if (current === null) {
      addRecord(record);
    } else {
      updateRecord(record);
    }
    setRecord({
      title: "",
      artist: "",
      genre: "",
      label: "",
      format: "Vinyl",
      country: "",
      releaseDate: "",
      rating: "",
      notes: "",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? "Edit Record" : "Add Record"}</h2>
      <input
        type="text"
        placeholder="Title (Required)"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Artist (Required)"
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
        type="text"
        placeholder="Release Date"
        name="releaseDate"
        value={releaseDate}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Rating out of 10"
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
          value={current ? "Update Record" : "Add Record"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default RecordForm;
