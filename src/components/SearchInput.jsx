import React from "react";

const SearchInput = ({ term, onChange }) => {
  return (
    <div className="search-page">
      <input
        value={term}
        type="search"
        name="search-clients"
        className="in-search"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
