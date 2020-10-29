import React, { useReducer } from "react";
import uuid from "uuid";
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
        format: "Vinyl LP",
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
        format: "Vinyl LP",
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
  };

  const [state, dispatch] = useReducer(recordReducer, initialState);

  // Add Record

  // Delete Record

  // Set Current Record

  // Clear current Record

  // Update Record

  // filter Records

  // Clear Filter

  return (
    <RecordContext.Provider
      value={{
        records: state.records,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};

export default RecordState;
