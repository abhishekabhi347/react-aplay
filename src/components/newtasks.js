import React, { Fragment, useState } from "react";

const NewTasks = () => {
  const [formdata, setFormData] = useState({
    tasks: []
  });

  const { tasks } = formdata;

  const onSubmit = e => {
    e.preventDefault();
    alert(formdata);
  };
  return (
    <Fragment>
      <from
        name="frmnewtask"
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        {tasks.length > 0 ? <p>tasks</p> : <p>nill</p>}
        <div>
          <textarea
            name="txtnewtask"
            id="txtnewtask"
            style={{ resize: "none" }}
            rows="4"
          ></textarea>
          <button type="submit" name="btnAddNew" id="btnAddNew">
            Add
          </button>
          &nbsp;
          <button type="button" name="btnRemove" id="btnRemove">
            Remove
          </button>
        </div>
      </from>
    </Fragment>
  );
};

export default NewTasks;
