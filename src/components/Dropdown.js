import React from "react";

const Dropdown = ({ label, objects, onChange, placeholder }) => {
  return (
    <li>
      <label>{label}</label>
      <select onChange={onChange}>
        <option value="">{placeholder || "All"}</option>
        {objects.map((object, index) => (
          <option value={object.name} key={`dropdown-${object.name}-${index}`}>
            {object.name}
          </option>
        ))}
      </select>
    </li>
  );
};
export default Dropdown;
