import {
  ADD_RECORD,
  DELETE_RECORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_RECORD,
  FILTER_RECORDS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return {
        ...state,
        records: [...state.records, action.payload],
      };
    default:
      return state;
  }
};
