import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReport } from "../features/Reports";

export default function DaysListItem({
  date,
  onDelete,
  addTime,
  onClose,
  onChange,
  addOverTime,
}) {
  const dispatch = useDispatch();
  const loggedUser = "Lazar Ledjanac";

  const { clientList } = useSelector((state) => state.clients);
  const { projectList } = useSelector((state) => state.projects);

  const [member, setMember] = useState(loggedUser);
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");

  const [time, setTime] = useState(0);
  const [clientSelected, setClientSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleClientChange = (e) => {
    if (e.target.value !== "") {
      setClientSelected(true);
    } else {
      setDisabled(true);
      onDelete();
      addTime(0);
    }
    setClient(e.target.value);
  };
  const handleProjectChange = (e) => {
    if (e.target.value !== "") {
      setProjectSelected(true);
    } else {
      setDisabled(true);
      onDelete();
      addTime(0);
    }
    setProject(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(parseFloat(e.target.value));
    addTime(e);
  };
  useEffect(() => {
    if (clientSelected && projectSelected) {
      setDisabled(false);
    }
  }, [clientSelected, projectSelected]);
  return (
    <tr
      onChange={() => {
        onChange();
      }}
    >
      <td>
        <select onChange={(e) => handleClientChange(e)}>
          <option value="">Choose Client</option>
          {clientList.map((client, index) => (
            <option key={index} value={client.name}>
              {client.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select onChange={(e) => handleProjectChange(e)}>
          <option value="">Choose project</option>
          {projectList.map((project, index) => (
            <option key={index} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="text"
          className="in-text medium"
          onChange={(e) => setCategory(e.target.value)}
        />
      </td>
      <td className="small">
        <input
          type="number"
          className="in-text xsmall"
          disabled={disabled}
          defaultValue={0}
          max={8}
          step={0.5}
          min="0"
          onChange={(e) => handleTimeChange(e)}
        />
      </td>
      <td className="small">
        <input
          type="number"
          disabled={disabled}
          defaultValue={0}
          max={3}
          step={0.5}
          min="0"
          className="in-text xsmall"
          onChange={(e) => addOverTime(e)}
        />
      </td>
      <td>
        <div
          style={{
            textAlign: "center",
            float: "right",
            width: "80%",
          }}
        >
          <button
            type="submit"
            className="btn green"
            onClick={() => {
              if (!projectSelected || !clientSelected || time === 0) {
                alert("You must insert a project, client and number of hours.");
                return;
              }
              dispatch(
                addReport({
                  date,
                  member,
                  client,
                  project,
                  category,
                  time,
                })
              );
              alert("Report has been successfuly added.");
              onClose();
            }}
          >
            Add Report
          </button>
        </div>
      </td>
    </tr>
  );
}
