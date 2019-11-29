import React, { Fragment, useState } from "react";

const NewTasks = () => {
  const [formdata, setFormData] = useState({
    tasks: "",
    createdOn: new Date(),
    isCompleted: false
  });
  const { tasks, createdOn, isCompleted } = formdata;
  const onChange = e => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const db = openDatabase("mydb", "1.0", "Tasks DB", 2 * 1024 * 1024);
  const onSubmit = e => {
    e.preventDefault();
    alert(Math.floor(Math.random() * 90000) + 10000);
    const randID = Math.floor(Math.random() * 90000) + 10000;
    db.transaction(function(tx) {
      tx.executeSql("CREATE TABLE IF NOT EXISTS TASKS (id unique, task)");
      tx.executeSql(
        `INSERT INTO TASKS (id,task,createdOn,isCompleted) VALUES (${randID},${JSON.stringify(
          formdata.tasks
        )},${JSON.stringify(createdOn)},${JSON.stringify(isCompleted)} )`
      );
    });
    //window.localStorage.setItem("Notes", JSON.stringify(formdata));
  };
  return (
    <Fragment>
      <form
        name="frmnewtask"
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <div>
          <textarea
            name="tasks"
            id="txtnewtask"
            style={{ resize: "none" }}
            rows="4"
            value={tasks}
            onChange={e => onChange(e)}
          ></textarea>
          <button type="submit" name="btnAddNew" id="btnAddNew">
            Add
          </button>
          &nbsp;
          <button type="button" name="btnRemove" id="btnRemove">
            Remove
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewTasks;
