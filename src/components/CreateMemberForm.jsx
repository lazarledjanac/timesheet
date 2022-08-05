import React from "react";
import { useForm } from "react-hook-form";
import ButtonContainer from "../components/ButtonContainer";
import { useSelector, useDispatch } from "react-redux";
import { addMember } from "../features/Members";

const CreateMemberForm = ({ close }) => {
  const dispatch = useDispatch();
  const { memberList } = useSelector((state) => state.members);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    alert("Team member successfully added!");
  };
  return (
    <div id="new-member" className="new-member-inner">
      <button
        onClick={() => close()}
        style={{ float: "right", borderRadius: 15, borderWidth: 1 }}
      >
        X
      </button>
      <div>
        <h2>Create new team member</h2>
        <form className="form" onSubmit={handleSubmit(onMemberSubmit)}>
          <label>
            Name:<em style={{ color: "#f67d34" }}>*</em>
          </label>
          <input
            type="text"
            className="in-text"
            autoComplete="off"
            style={{ marginBottom: 10 }}
            {...register("name", {
              required: true,
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
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
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
              <p style={{ color: "red", paddingBottom: 10 }}>Must be checked</p>
            )}
          </li>
          <ButtonContainer>
            <button type="submit" className="btn green">
              Invite team member
            </button>
          </ButtonContainer>
        </form>
      </div>
    </div>
  );
};

export default CreateMemberForm;
