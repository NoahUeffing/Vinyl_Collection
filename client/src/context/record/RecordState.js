import React, { useReducer } from "react";
import uuid from "uuid/v4";
import RecordContext from "./recordContext";
import recordReducer from "./recordReducer";
import {
  ADD_RECORD,
  DELETE_RECORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECORD,
  FILTER_RECORDS,
  CLEAR_FILTER,
} from "../types";

const RecordState = (props) => {
  const initialState = {
    records: [
      {
        id: 1,
        title: "Billy Talent II",
        artist: "Billy Talent",
        genre: "Alternative Rock",
        label: "Atlantic",
        format: "Vinyl",
        country: "Canada",
        releaseDate: "June 27, 2006",
        rating: "9",
        notes: "The album that got me into music",
      },
      {
        id: 2,
        title: "...Like Clockwork",
        artist: "Queens of the Stone Age",
        genre: "Hard Rock",
        label: "Matador",
        format: "Vinyl",
        country: "USA",
        releaseDate: "June 3, 2013",
        rating: "10",
        notes: "I Appear Missing may be my favourite song of all time.",
      },
      {
        id: 3,
        title: "Joy as an Act of Resistance",
        artist: "Idles",
        genre: "Punk Rock",
        label: "Partisan",
        format: "Digital",
        country: "UK",
        releaseDate: "August 31, 2018",
        rating: "9",
        notes:
          "One of the guitar players is a dentist and wears only underwear on stage",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(recordReducer, initialState);

  // Add Record
  const addRecord = (record) => {
    record.id = uuid();
    dispatch({ type: ADD_RECORD, payload: record });
  };

  // Delete Record
  const deleteRecord = (id) => {
    dispatch({ type: DELETE_RECORD, payload: id });
  };

  // Set Current Record
  const setCurrent = (record) => {
    dispatch({ type: SET_CURRENT, payload: record });
  };

  // Clear current Record
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Record
  const updateRecord = (record) => {
    dispatch({ type: UPDATE_RECORD, payload: record });
  };

  // Filter Records
  const filterRecords = (text) => {
    dispatch({ type: FILTER_RECORDS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <RecordContext.Provider
      value={{
        records: state.records,
        current: state.current,
        filtered: state.filtered,
        addRecord,
        deleteRecord,
        setCurrent,
        clearCurrent,
        updateRecord,
        filterRecords,
        clearFilter,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};

export default RecordState;
