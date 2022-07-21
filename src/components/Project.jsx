import React, { useRef, useEffect, useState } from "react";
import ButtonContainer from "../components/ButtonContainer";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject, updateProject } from "../features/Projects";

const Project = ({ id }) => {
  const dispatch = useDispatch();

  const clientList = useSelector((state) => state.clients.value);
  const memberList = useSelector((state) => state.members.value);
  const projectList = useSelector((state) => state.projects.value);

  const project = projectList.find((project) => project.id === id);
  const { name, description, client, lead } = project;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, description, client, lead } = data;
    dispatch(
      updateProject({
        id,
        name,
        description,
        client,
        lead,
      })
    );
    setItemClass("item");
  };
  const [itemClass, setItemClass] = useState("item");
  const itemClassToggle = () => {
    itemClass === "item" ? setItemClass("item open") : setItemClass("item");
  };

  return (
    <div className={itemClass}>
      <div className="heading" onClick={itemClassToggle}>
        <span>{name}</span>
      </div>
      <div className="details">
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <ul className="form">
              <li>
                <label>
                  Project name:
                  <em style={{ color: "#f67d34" }}>*</em>
                </label>
                <div>
                  <input
                    type="text"
                    className="in-text"
                    defaultValue={name}
                    style={{ marginBottom: 15 }}
                    {...register("name", {
                      required: true,
                      minLength: 3,
                      pattern: /^[A-Za-z]/,
                    })}
                  />
                </div>
                {errors.name && (
                  <p style={{ color: "red" }}>
                    Project name must have at least 3 characters and must begin
                    with a letter
                  </p>
                )}
              </li>

              <li>
                <label>
                  Lead:<em style={{ color: "#f67d34" }}>*</em>
                </label>
                <select
                  style={{ marginBottom: 15 }}
                  {...register("lead", { required: true, minLength: 3 })}
                >
                  <option>{lead}</option>
                  {memberList.map((member, index) => (
                    <option value={member.name} key={`dropdown-${index}`}>
                      {member.name}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
            {errors.lead && (
              <p style={{ color: "red" }}>Lead name must not be blank</p>
            )}
            <ul className="form">
              <li>
                <label>Project description</label>
                <input
                  type="text"
                  className="in-text"
                  defaultValue={description}
                  style={{ marginBottom: 15 }}
                  {...register("description")}
                />
              </li>
            </ul>

            <ul className="form last">
              <li>
                <label>
                  Customer:<em style={{ color: "#f67d34" }}>*</em>
                </label>
                <select
                  style={{ marginBottom: 15 }}
                  {...register("client", { required: true, minLength: 3 })}
                >
                  <option>{client}</option>
                  {clientList.map((client, index) => (
                    <option value={client.name} key={`dropdown-${index}`}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </li>
              {errors.client && (
                <p style={{ color: "red" }}>Customer name must not be blank</p>
              )}
              <li className="inline">
                <label>Status:</label>
                <span className="radio">
                  <label htmlFor="inactive">Active</label>
                  <input
                    name="status"
                    id="inactive"
                    {...register("active")}
                    type="radio"
                    value="true"
                    defaultChecked
                  />
                </span>
                <span className="radio">
                  <label htmlFor="active">Inactive</label>
                  <input
                    name="status"
                    id="active"
                    {...register("active")}
                    type="radio"
                    value="false"
                  />
                </span>
                <span className="radio">
                  <label htmlFor="active">Archive</label>
                  <input
                    name="status"
                    id="active"
                    {...register("archive")}
                    type="checkbox"
                  />
                </span>
              </li>
            </ul>
          </div>
          <ButtonContainer>
            <button
              type="submit"
              style={{ marginRight: 10 }}
              className="btn green"
            >
              Save
            </button>
            <a
              className="btn red"
              style={{ marginRight: 10 }}
              onClick={() => {
                setItemClass("item");
                dispatch(deleteProject({ id }));
              }}
            >
              Delete
            </a>
          </ButtonContainer>
        </form>
      </div>
    </div>
  );
};
export default Project;
