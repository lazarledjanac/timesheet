import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTerm } from "../features/Clients";

const SearchInput = () => {
  const dispatch = useDispatch();
  const { term } = useSelector((store) => store.clients);
  return (
    <div className="search-page">
      <input
        value={term}
        type="search"
        name="search-clients"
        className="in-search"
        onChange={(e) => {
          dispatch(setTerm(e?.target?.value));
        }}
      />
    </div>
  );
};

export default SearchInput;
