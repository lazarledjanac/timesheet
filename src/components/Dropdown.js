import React from "react";
import { useSelector } from "react-redux";

const Dropdown = ({
  label,
  projects,
  clients,
  members,
  onChange,
  placeholder,
}) => {
  const { clientList } = useSelector((state) => state.clients);
  const { projectList } = useSelector((state) => state.projects);
  const { memberList } = useSelector((state) => state.members);

  return (
    <>
      {projects && (
        <li>
          <label>{label}</label>
          <select onChange={onChange}>
            <option value="">{placeholder || "All"}</option>
            {projectList.map((object, index) => (
              <option
                value={object.name}
                key={`dropdown-${object.name}-${index}`}
              >
                {object.name}
              </option>
            ))}
          </select>
        </li>
      )}
      {clients && (
        <li>
          <label>{label}</label>
          <select onChange={onChange}>
            <option value="">{placeholder || "All"}</option>
            {clientList.map((object, index) => (
              <option
                value={object.name}
                key={`dropdown-${object.name}-${index}`}
              >
                {object.name}
              </option>
            ))}
          </select>
        </li>
      )}
      {members && (
        <li>
          <label>{label}</label>
          <select onChange={onChange}>
            <option value="">{placeholder || "All"}</option>
            {memberList.map((object, index) => (
              <option
                value={object.name}
                key={`dropdown-${object.name}-${index}`}
              >
                {object.name}
              </option>
            ))}
          </select>
        </li>
      )}
    </>
  );
};
export default Dropdown;
