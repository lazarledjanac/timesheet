import React from "react";
import { useForm } from "react-hook-form";
import ButtonContainer from "../components/ButtonContainer";
import { countries } from "../mock/countries.mock";
import { useSelector, useDispatch } from "react-redux";
import { addClient } from "../features/Clients";

const CreateClientForm = ({ close }) => {
  const dispatch = useDispatch();

  const { clientList } = useSelector((state) => state.clients);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClientSubmit = (data) => {
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
    alert("Client successfully added!");
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
        <h2>Create new client</h2>
        <form className="form" onSubmit={handleSubmit(onClientSubmit)}>
          <label>
            Client name:<em style={{ color: "#f67d34" }}>*</em>
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
              Client name must have at least 3 characters and must begin with a
              letter
            </p>
          )}
          <br />
          <label>Address:</label>
          <input
            type="text"
            className="in-text"
            autoComplete="off"
            style={{ marginBottom: 15 }}
            {...register("address")}
          />
          <br />
          <label>City:</label>
          <input
            type="text"
            className="in-text"
            autoComplete="off"
            style={{ marginBottom: 15 }}
            {...register("city", { pattern: /[A-Za-z]/ })}
          />
          {errors.city && (
            <p style={{ color: "red" }}>City field must only contain letters</p>
          )}
          <br />
          <label>Zip/Postal code:</label>
          <input
            type="text"
            className="in-text"
            autoComplete="off"
            style={{ marginBottom: 15 }}
            {...register("postalCode", {
              pattern: /[0-9]/,
            })}
          />
          {errors.postalCode && (
            <p style={{ color: "red" }}>
              Postal Code field must only contain numbers
            </p>
          )}
          <br />
          <label>
            Country:<em style={{ color: "#f67d34" }}>*</em>
          </label>
          <select
            style={{ marginBottom: 10 }}
            {...register("country", { required: true })}
          >
            <option value="">Select country</option>
            {countries.map((country, index) => (
              <option value={country.name} key={index}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && (
            <p style={{ color: "red" }}>Country name field must not be blank</p>
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
  );
};

export default CreateClientForm;
