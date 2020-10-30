import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import RecordItem from "./RecordItem";
import RecordContext from "../../context/record/recordContext";

const Records = () => {
  const recordContext = useContext(RecordContext);

  const { records, filtered } = recordContext;

  if (records.length === 0) {
    return <h4>Your records are empty</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((record) => (
              <CSSTransition key={record.id} timeout={500} className="item">
                <RecordItem record={record} />
              </CSSTransition>
            ))
          : records.map((record) => (
              <CSSTransition key={record.id} timeout={500} className="item">
                <RecordItem record={record} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Records;
