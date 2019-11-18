import React, { Fragment } from "react";
import ToDos from "./todos";
import CompletedTasks from "./cmptasks";
import NewTasks from "./newtasks";
import "../styles/notes.scss";

const Notes = () => {
  return (
    <Fragment>
      <div className="container-wrapper">
        <h2>Notes</h2>
        <div className="content-wrapper">
          <div className="container-tasks">
            <ToDos></ToDos>
          </div>
          <div className="container-DoneTasks">
            <CompletedTasks></CompletedTasks>
          </div>
          <div className="container-NewTask">
            <NewTasks></NewTasks>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Notes;
