import React from "react";

export default function RadioButton(props) {
  return (
    <span className="radio">
      <label htmlFor={props.id}>{props.label}</label>
      <input type="radio" value={props.value} name="status" id={props.id} />
    </span>
  );
}
