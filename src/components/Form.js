import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonContainer from "../components/ButtonContainer";
import { countries } from "../mock/countries.mock";
import { useSelector, useDispatch } from "react-redux";
import { addProject } from "../features/Projects";
import { addClient } from "../features/Clients";
import { addMember } from "../features/Members";

export default function Form({ isProject, isClient, isMember, close }) {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projects.value);
  const clientList = useSelector((state) => state.clients.value);
  const memberList = useSelector((state) => state.members.value);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClientSubmit = (data) => {
    console.log(data);
    const { name, address, city, postalCode, country } = data;
    dispatch(
      addClient({
        id: clientList[clientList.length - 1].id + 1,
        name: name,
        address: address,
        city: city,
        postalCode: postalCode,
        country: country,
      })
    );
    close();
  };
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
  };
  const onMemberSubmit = (data) => {
    console.log(data);
    const { name, hoursPerWeek, username, email } = data;
    dispatch(
      addMember({
        id: memberList[memberList.length - 1].id + 1,
        name: name,
        hoursPerWeek: hoursPerWeek,
        userName: username,
        email: email,
      })
    );
    close();
  };

  return (
    <div id="new-member" className="new-member-inner">
      <button
        onClick={() => close()}
        style={{ float: "right", borderRadius: 15, borderWidth: 1 }}
      >
        X
      </button>
      {/* -------------------------------------------------------------------------------------------------- */}
      {isClient && (
        <div>
          <h2>Create new client</h2>
          <form className="form" onSubmit={handleSubmit(onClientSubmit)}>
            <label>
              Client name:<em style={{ color: "#f67d34" }}>*</em>
            </label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 15 }}
              {...register("name", {
                required: true,
                minLength: 3,
                pattern: /^[A-Za-z]/,
              })}
            />
            {errors.name && (
              <p style={{ color: "red" }}>
                Client name must have at least 3 characters and must begin with
                a letter
              </p>
            )}
            <br />
            <label>Address:</label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 15 }}
              {...register("address")}
            />
            <br />
            <label>City:</label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 15 }}
              {...register("city")}
            />
            <br />
            <label>Zip/Postal code:</label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 15 }}
              {...register("postalCode")}
            />

            <br />
            <label>Country:</label>
            <select style={{ marginBottom: 15 }} {...register("country")}>
              <option value="">Select country</option>
              {countries.map((country, index) => (
                <option value={country.name} key={index}>
                  {country.name}
                </option>
              ))}
            </select>
            <ButtonContainer>
              <button type="submit" className="btn green">
                Create
              </button>
            </ButtonContainer>
          </form>
        </div>
      )}
      {/* -------------------------------------------------------------------------------------------------- */}
      {isProject && (
        <div>
          <h2>Create new project</h2>
          <form className="form" onSubmit={handleSubmit(onProjectSubmit)}>
            <label>
              Project Name:<em style={{ color: "#f67d34" }}>*</em>
            </label>
            <input
              type="text"
              className="in-text"
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
      )}
      {/* -------------------------------------------------------------------------------------------------- */}
      {isMember && (
        <div>
          {" "}
          <h2>Create new team member</h2>
          <form className="form" onSubmit={handleSubmit(onMemberSubmit)}>
            <label>Name:</label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 10 }}
              {...register("name", {
                minLength: 3,
                pattern: /^[A-Za-z]/,
              })}
            />
            {errors.name && (
              <p style={{ color: "red", paddingBottom: 10 }}>
                Name of a member must have at least 3 characters and must begin
                with a letter
              </p>
            )}
            <label>Hours per week:</label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 10 }}
              {...register("hoursPerWeek", {
                maxLength: 2,
                pattern: /^[1-9][0-9]?$|^100$/,
              })}
            />
            {errors.hoursPerWeek && (
              <p style={{ color: "red", paddingBottom: 10 }}>
                Hours per week field must be a number value and less than 100
              </p>
            )}
            <label>
              Username:<em style={{ color: "#f67d34" }}>*</em>
            </label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 10 }}
              {...register("username", {
                required: true,
                minLength: 3,
                pattern: /^[A-Za-z]/,
              })}
            />
            {errors.username && (
              <p style={{ color: "red", paddingBottom: 10 }}>
                Username must have at least 3 characters and must begin with a
                letter
              </p>
            )}
            <label>
              Email:<em style={{ color: "#f67d34" }}>*</em>
            </label>
            <input
              type="text"
              className="in-text"
              style={{ marginBottom: 10 }}
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
            {errors.email && (
              <p style={{ color: "red", paddingBottom: 10 }}>
                Invalid email pattern
              </p>
            )}
            <li className="inline">
              <label>
                Status:<em style={{ color: "#f67d34" }}>*</em>
              </label>
              <span className="radio">
                <label htmlFor="active">Active:</label>
                <input
                  type="radio"
                  value={true}
                  name="status"
                  id="active"
                  {...register("active", { required: true })}
                />
              </span>
              <span className="radio">
                <label htmlFor="inactive">Inactive:</label>
                <input
                  type="radio"
                  value={false}
                  name="status"
                  id="inactive"
                  {...register("active", { required: true })}
                />
              </span>
              {errors.active && (
                <p style={{ color: "red", paddingBottom: 10 }}>
                  {" "}
                  Must be checked
                </p>
              )}
            </li>
            <li className="inline">
              <label>
                Role:<em style={{ color: "#f67d34" }}>*</em>
              </label>
              <span className="radio">
                <label htmlFor="admin">Admin:</label>
                <input
                  type="radio"
                  value="admin"
                  name="role"
                  id="admin"
                  {...register("role", { required: true })}
                />
              </span>
              <span className="radio">
                <label htmlFor="worker">Worker:</label>
                <input
                  type="radio"
                  value="worker"
                  name="role"
                  id="worker"
                  {...register("role", { required: true })}
                />
              </span>
              {errors.role && (
                <p style={{ color: "red", paddingBottom: 10 }}>
                  {" "}
                  Must be checked
                </p>
              )}
            </li>

            <ButtonContainer>
              <button type="submit" className="btn green">
                Invite team member
              </button>
            </ButtonContainer>
          </form>
        </div>
      )}
    </div>
  );
}
