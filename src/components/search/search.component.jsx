import React from "react";
import "./search.styles.css";

export const SearchComponent = ({ handleChange }) => {
  return (
    <div>
      <input
        className="search"
        onChange={handleChange}
        type="search"
        placeholder="Search monster"
      />
    </div>
  );
};
