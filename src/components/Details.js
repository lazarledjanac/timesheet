import React, { useState } from "react";
import ButtonContainer from "../components/ButtonContainer";
import { countries } from "../mock/countries.mock";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject, updateProject } from "../features/Projects";
import { deleteClient, updateClient } from "../features/Clients";
import { deleteMember, updateMember } from "../features/Members";
import { useGetCountriesQuery } from "../features/CountryApi";

function Details({
  project,
  client,
  member,
  key,
  postalCode,
  address,
  country,
  city,
  lead,
  description,
  customer,
  id,
  hoursPerWeek,
  userName,
  email,
}) {
  const dispatch = useDispatch();

  // const { data: countriesList, isFetching } = useGetCountriesQuery();
  // console.log(countriesList);
  // const [countries, setCountries] = useState(countriesList?.data?.country);

  const clientList = useSelector((state) => state.clients.value);
  const memberList = useSelector((state) => state.members.value);
  const projectList = useSelector((state) => state.projects.value);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (project) {
      const { name, description, client, lead } = data;
      dispatch(
        updateProject({
          id: id,
          projectName: name,
          description: description,
          client: client,
          lead: lead,
        })
      );
      console.log(projectList);
    }
    if (client) {
      const { name, address, city, postalCode, country } = data;
      dispatch(
        updateClient({
          id: id,
          clientName: name,
          address: address,
          city: city,
          postalCode: postalCode,
          country: country,
        })
      );
      console.log(clientList);
    }
    if (member) {
      const { name, hoursPerWeek, userName, email } = data;
      dispatch(
        updateMember({
          id: id,
          memberName: name,
          hoursPerWeek: hoursPerWeek,
          userName: userName,
          email: email,
        })
      );
      console.log(memberList);
    }
  };
  const [itemClass, setItemClass] = useState("item");
  const itemClassToggle = () => {
    itemClass === "item" ? setItemClass("item open") : setItemClass("item");
  };
  // if (isFetching) return "...";
  return (
    <div className={itemClass} key={id}>
      <div className="heading" onClick={itemClassToggle}>
        <span>
          {project && project}
          {client && client}
          {member && member}
        </span>
        <i>+</i>
      </div>
      <div className="details">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* -------------------------------------------------------------------------------------------------- */}

          {client && (
            <>
              <div>
                <ul className="form">
                  <li>
                    <label>
                      Client Name: <em style={{ color: "#f67d34" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="in-text"
                      value={client}
                      style={{ marginBottom: 15 }}
                      {...register("name", {
                        required: true,
                        minLength: 3,
                        pattern: /^[A-Za-z]/,
                      })}
                    />
                    {errors.name && (
                      <p style={{ color: "red" }}>
                        Client name must have at least 3 characters and must
                        begin with a letter
                      </p>
                    )}
                  </li>
                  <li>
                    <label>Zip/Postal code:</label>
                    <input
                      type="text"
                      className="in-text"
                      value={postalCode}
                      style={{ marginBottom: 15 }}
                      {...register("postalCode")}
                    />
                  </li>
                </ul>
                <ul className="form">
                  <li>
                    <label>Address:</label>
                    <input
                      type="text"
                      className="in-text"
                      value={address}
                      style={{ marginBottom: 15 }}
                      {...register("address")}
                    />
                  </li>
                  <li>
                    <label>Country:</label>
                    <select
                      value={country}
                      style={{ marginBottom: 15 }}
                      {...register("country")}
                    >
                      <option value="">Select country</option>
                      {countries.map((country, index) => (
                        <option value={country.name} key={index}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </li>
                </ul>
                <ul className="form last">
                  <li>
                    <label>City:</label>
                    <input
                      type="text"
                      className="in-text"
                      value={city}
                      style={{ marginBottom: 15 }}
                      {...register("city")}
                    />
                  </li>
                </ul>
              </div>
              <ButtonContainer>
                <button
                  type="submit"
                  style={{ marginRight: 10 }}
                  className="btn green"
                  onClick={() => setItemClass("item")}
                >
                  Save
                </button>
                <a
                  className="btn red"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    dispatch(deleteClient({ id: id }));
                    console.log(clientList);
                  }}
                >
                  Delete
                </a>
              </ButtonContainer>
            </>
          )}
          {/* -------------------------------------------------------------------------------------------------- */}
          {project && (
            <>
              <div>
                <ul className="form">
                  <li key="1">
                    <label>
                      Project Name<em style={{ color: "#f67d34" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="in-text"
                      value={project}
                      style={{ marginBottom: 15 }}
                      {...register("name", {
                        required: true,
                        minLength: 3,
                        pattern: /^[A-Za-z]/,
                      })}
                    />
                    {errors.name && (
                      <p style={{ color: "red" }}>
                        Project name must have at least 3 characters and must
                        begin with a letter
                      </p>
                    )}
                  </li>

                  <li key="2">
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
                  <li key="3">
                    <label>Project description</label>
                    <input
                      type="text"
                      className="in-text"
                      value={description}
                      style={{ marginBottom: 15 }}
                      {...register("description")}
                    />
                  </li>
                </ul>

                <ul className="form last">
                  <li key="4">
                    <label>
                      Customer:<em style={{ color: "#f67d34" }}>*</em>
                    </label>
                    <select
                      style={{ marginBottom: 15 }}
                      {...register("client", { required: true, minLength: 3 })}
                    >
                      <option>{customer}</option>
                      {clientList.map((client, index) => (
                        <option value={client.name} key={`dropdown-${index}`}>
                          {client.name}
                        </option>
                      ))}
                    </select>
                  </li>
                  {errors.client && (
                    <p style={{ color: "red" }}>
                      Customer name must not be blank
                    </p>
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
                  onClick={() => setItemClass("item")}
                >
                  Save
                </button>
                <a
                  className="btn red"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    dispatch(deleteProject({ id: id }));
                  }}
                >
                  Delete
                </a>
              </ButtonContainer>
            </>
          )}

          {/* -------------------------------------------------------------------------------------------------- */}
          {member && (
            <>
              <div>
                <ul className="form">
                  <li>
                    <label>Name:</label>
                    <input
                      type="text"
                      className="in-text"
                      value={member}
                      style={{ marginBottom: 10 }}
                      {...register("name", {
                        minLength: 3,
                        pattern: /^[A-Za-z]/,
                      })}
                    />
                    {errors.name && (
                      <p style={{ color: "red" }}>
                        Name of a member must have at least 3 characters and
                        must begin with a letter
                      </p>
                    )}
                  </li>
                  <li>
                    <label>Hours per week:</label>
                    <input
                      type="text"
                      className="in-text"
                      value={hoursPerWeek}
                      style={{ marginBottom: 10 }}
                      {...register("hoursPerWeek", {
                        required: true,
                        maxLength: 2,
                        pattern: /^[1-9][0-9]?$|^100$/,
                      })}
                    />
                    {errors.hoursPerWeek && (
                      <p style={{ color: "red" }}>
                        Hours per week field must be a number value and less
                        than 100
                      </p>
                    )}
                  </li>
                </ul>
                <ul className="form">
                  <li>
                    <label>
                      Username:<em style={{ color: "#f67d34" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="in-text"
                      value={userName}
                      style={{ marginBottom: 10 }}
                      {...register("username", {
                        required: true,
                        minLength: 3,
                        pattern: /^[A-Za-z]/,
                      })}
                    />
                    {errors.username && (
                      <p style={{ color: "red" }}>
                        Username must have at least 3 characters and must begin
                        with a letter
                      </p>
                    )}
                  </li>
                  <li>
                    <label>
                      Email:<em style={{ color: "#f67d34" }}>*</em>
                    </label>
                    <input
                      type="text"
                      className="in-text"
                      value={email}
                      style={{ marginBottom: 10 }}
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+\.\S+$/,
                      })}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>Invalid email pattern</p>
                    )}
                  </li>
                </ul>
                <ul className="form last">
                  <li>
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
                      {errors.active && (
                        <p style={{ color: "red" }}> Must be checked</p>
                      )}
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
                  </li>
                  <li>
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
                      {errors.role && (
                        <p style={{ color: "red" }}> Must be checked</p>
                      )}
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
                  </li>
                </ul>
              </div>
              <ButtonContainer>
                <button
                  type="submit"
                  style={{ marginRight: 10 }}
                  className="btn green"
                  onClick={() => setItemClass("item")}
                >
                  Save
                </button>
                <a
                  className="btn red"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    dispatch(deleteMember({ id: id }));
                  }}
                >
                  Delete
                </a>
              </ButtonContainer>
            </>
          )}
          {/* -------------------------------------------------------------------------------------------------- */}
        </form>
      </div>
    </div>
  );
}

export default Details;
