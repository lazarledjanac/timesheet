import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { deleteMember, updateMember } from "../features/Members";
import { countries } from "../mock/countries.mock";

const Member = ({ id, key }) => {
  const dispatch = useDispatch();

  const memberList = useSelector((state) => state.members.value);

  const member = memberList.find((member) => member.id === id);
  const { name, hoursPerWeek, userName, email } = member;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, hoursPerWeek, userName, email } = data;
    dispatch(
      updateMember({
        id,
        name,
        hoursPerWeek,
        userName,
        email,
      })
    );
    setItemClass("item");
  };
  const [itemClass, setItemClass] = useState("item");
  const itemClassToggle = () => {
    itemClass === "item" ? setItemClass("item open") : setItemClass("item");
  };

  return (
    <div className={itemClass} key={key}>
      <div className="heading" onClick={itemClassToggle}>
        <span>{name}</span>
        <i>+</i>
      </div>
      <div className="details">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <ul className="form">
              <li>
                <label>Name:</label>
                <input
                  type="text"
                  className="in-text"
                  defaultValue={name}
                  style={{ marginBottom: 10 }}
                  {...register("name", {
                    minLength: 3,
                    pattern: /^[A-Za-z]/,
                  })}
                />
                {errors.name && (
                  <p style={{ color: "red" }}>
                    Name of a member must have at least 3 characters and must
                    begin with a letter
                  </p>
                )}
              </li>
              <li>
                <label>Hours per week:</label>
                <input
                  type="text"
                  className="in-text"
                  defaultValue={hoursPerWeek}
                  style={{ marginBottom: 10 }}
                  {...register("hoursPerWeek", {
                    required: true,
                    maxLength: 2,
                    pattern: /^[1-9][0-9]?$|^100$/,
                  })}
                />
                {errors.hoursPerWeek && (
                  <p style={{ color: "red" }}>
                    Hours per week field must be a number value and less than
                    100
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
                  defaultValue={userName}
                  style={{ marginBottom: 10 }}
                  {...register("username", {
                    required: true,
                    minLength: 3,
                    pattern: /^[A-Za-z]/,
                  })}
                />
                {errors.username && (
                  <p style={{ color: "red" }}>
                    Username must have at least 3 characters and must begin with
                    a letter
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
                  defaultValue={email}
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
        </form>
      </div>
    </div>
  );
};
export default Member;
