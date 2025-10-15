import React from "react";

const FilterBar = ({ setFilterType }) => {
  const filters = ["All", "Beach", "Mountain", "City"];

  return (
    <div style={{ margin: "20px" }}>
      {filters.map((type) => (
        <button
          key={type}
          onClick={() => setFilterType(type)}
          className="filter-btn"
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
