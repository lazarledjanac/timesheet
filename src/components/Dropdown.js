import React from "react";
import { useSelector } from "react-redux";

const Dropdown = ({ label, list, onChange, placeholder }) => {
  const { clientList } = useSelector((state) => state.clients);
  const { projectList } = useSelector((state) => state.projects);
  const { memberList } = useSelector((state) => state.members);

  let listing;

  if (list == "projects") listing = projectList;
  if (list == "clients") listing = clientList;
  if (list == "members") listing = memberList;

  return (
    <li>
      <label>{label}:</label>
      <select onChange={onChange}>
        <option value="">{placeholder || "All"}</option>
        {listing.map((object, index) => (
          <option value={object.name} key={`dropdown-${object.name}-${index}`}>
            {object.name}
          </option>
        ))}
      </select>
    </li>
  );
};
export default Dropdown;
