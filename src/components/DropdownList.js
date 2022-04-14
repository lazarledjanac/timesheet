import React from "react";

export default function DropdownList(props) {
  return (
    <li>
      <label>{props.label}</label>
      <select>
        <option>{props.default}</option>
        {props.options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </li>
  );
}
