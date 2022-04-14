import React from "react";

export default function TextInput(props) {
  return (
    <li>
      <label>{props.label}</label>
      <input type="text" className="in-text" value={props.value} />
    </li>
  );
}
