import React from "react";
import { useForm } from "react-hook-form";
import ButtonContainer from "../components/ButtonContainer";
import { useSelector, useDispatch } from "react-redux";
import { addProject } from "../features/Projects";

const CreateProjectForm = ({ close }) => {
  const dispatch = useDispatch();
  const { projectList } = useSelector((state) => state.projects);
  const { clientList } = useSelector((state) => state.clients);
  const { memberList } = useSelector((state) => state.members);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onProjectSubmit = (data) => {
    console.log(data);
    const { name, description, client, lead } = data;
    dispatch(
      addProject({
        id: projectList[projectList.length - 1].id + 1,
        name: name,
        description: description,
        client: client,
        lead: lead,
      })
    );
    close();
    alert("Project successfully added!");
  };

  return (
    <>
      <div id="new-member" className="new-member-inner">
        <button
          onClick={() => close()}
          style={{ float: "right", borderRadius: 15, borderWidth: 1 }}
        >
          X
        </button>
        <div>
          <h2>Create new project</h2>
          <form className="form" onSubmit={handleSubmit(onProjectSubmit)}>
            <label>
              Project Name:<em style={{ color: "#f67d34" }}>*</em>
            </label>
            <input
              type="text"
              className="in-text"
              autoComplete="off"
              style={{ marginBottom: 15 }}
              {...register("name", {
                required: true,
                minLength: 3,
                pattern: /^[A-Za-z]/,
              })}
            />
            {errors.name && (
              <p style={{ color: "red" }}>
                Project name must have at least 3 characters and must begin with
                a letter
              </p>
            )}
            <br />
            <label>Description:</label>
            <input
              type="text"
              className="in-text"
              autoComplete="off"
              style={{ marginBottom: 15 }}
              {...register("description")}
            />
            <br />
            <label>
              Customer:<em style={{ color: "#f67d34" }}>*</em>
            </label>
            <select
              style={{ marginBottom: 15 }}
              {...register("client", { required: true, minLength: 3 })}
            >
              <option></option>
              {clientList.map((client, index) => (
                <option
                  value={client.name}
                  key={`dropdown-${client.name}-${index}`}
                >
                  {client.name}
                </option>
              ))}
            </select>
            {errors.client && (
              <p style={{ color: "red" }}>Customer name must not be blank</p>
            )}
            <br />

            <label>
              Lead:<em style={{ color: "#f67d34" }}>*</em>
            </label>
            <select
              style={{ marginBottom: 15 }}
              {...register("lead", { required: true, minLength: 3 })}
            >
              <option></option>
              {memberList.map((member, index) => (
                <option
                  value={member.name}
                  key={`dropdown-${member.name}-${index}`}
                >
                  {member.name}
                </option>
              ))}
            </select>
            {errors.lead && (
              <p style={{ color: "red" }}>Lead name must not be blank</p>
            )}

            <br />
            <ButtonContainer>
              <button type="submit" className="btn green">
                Create
              </button>
            </ButtonContainer>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProjectForm;
