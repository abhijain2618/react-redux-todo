import React from "react";

const AddToDo = ({ onChange, onClickAdd }) => {
  return (
    <div className="add-todo">
      <input
        className="form-control"
        onChange={(e) => onChange(e)}
        name="title"
        id="title"
        type="text"
        placeholder="Enter a title"
      />
      <textarea
        className="form-control"
        rows="5"
        name="desc"
        id="desc"
        onChange={(e) => onChange(e)}
        placeholder="Enter description"
      />
      <button className="btn btn-primary" onClick={() => onClickAdd()}>
        Add Todo
      </button>
    </div>
  );
};

export default AddToDo;