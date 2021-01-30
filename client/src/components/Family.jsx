import React, { Fragment } from "react";

function Family(props) {

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    //CurrentUser weitergeben
    props.onEditing(props.boolean);
    props.onCurrentFamily(props.name, props.children, props.id);
  }

  return (
    <>
      <td>{props.name}</td>
      <td>{props.children}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </>
  );
}

export default Family;
