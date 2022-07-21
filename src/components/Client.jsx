import React, { useRef, useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { deleteClient, updateClient } from "../features/Clients";
import { countries } from "../mock/countries.mock";

const Client = ({ id, key }) => {
  const dispatch = useDispatch();

  const clientList = useSelector((state) => state.clients.value);

  const client = clientList.find((client) => client.id === id);
  const { name, address, city, postalCode, country } = client;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, address, city, postalCode, country } = data;
    dispatch(
      updateClient({
        id,
        name,
        address,
        city,
        postalCode,
        country,
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
      </div>
      <div className="details">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <ul className="form">
              <li>
                <label>
                  Client Name: <em style={{ color: "#f67d34" }}>*</em>
                </label>
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
                {errors.name && (
                  <p style={{ color: "red" }}>
                    Client name must have at least 3 characters and must begin
                    with a letter
                  </p>
                )}
              </li>
              <li>
                <label>Zip/Postal code:</label>
                <input
                  type="text"
                  className="in-text"
                  defaultValue={postalCode}
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
                  defaultValue={address}
                  style={{ marginBottom: 15 }}
                  {...register("address")}
                />
              </li>
              <li>
                <label>Country:</label>
                <select
                  defaultValue={country}
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
                  defaultValue={city}
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
                dispatch(deleteClient({ id }));
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
export default Client;
