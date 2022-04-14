import React, { useState } from "react";
import axios from "axios";

export default function CreateProjectForm() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [lead, setLead] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      name: name,
      client: client,
      lead: lead,
      description: description,
    };
    axios
      .post("../data/projects.json", { project })
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleClientChange = (e) => {
    setClient(e.target.value);
  };
  const handleLeadChange = (e) => {
    setLead(e.target.value);
  };

  return (
    <div className="new-member-wrap">
      <div id="new-member" className="new-member-inner">
        <h2>Create new project</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>Project name:</label>
          <input
            type="text"
            className="in-text"
            value={name}
            onChange={handleNameChange}
          />

          <label>Description:</label>
          <input
            type="text"
            className="in-text"
            value={description}
            onChange={handleDescriptionChange}
          />

          <label>Customer:</label>
          <select value={client} onChange={handleClientChange}>
            <option value="">Select customer</option>
            <option value="Adam Software NV">Adam Software NV</option>
            <option value="Clockwork">Clockwork</option>
            <option value="Emperor Design">Emperor Design</option>
          </select>

          <label>Lead:</label>
          <select value={lead} onChange={handleLeadChange}>
            <option value="">Select lead</option>
            <option value="Sasa Popovic">Sasa Popovic</option>
            <option value="Sladjana Miljanovic">Sladjana Miljanovic</option>
          </select>
          <div className="buttons">
            <div className="inner">
              <input type="submit" className="btn green" value="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
