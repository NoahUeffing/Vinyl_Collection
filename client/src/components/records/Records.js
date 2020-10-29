import React, { Fragment, useContext } from "react";
import RecordItem from "./RecordItem";
import RecordContext from "../../context/record/recordContext";

const Records = () => {
  const recordContext = useContext(RecordContext);

  const { records } = recordContext;

  return (
    <Fragment>
      {records.map((record) => (
        <RecordItem key={record.id} record={record} />
      ))}
    </Fragment>
  );
};

export default Records;
