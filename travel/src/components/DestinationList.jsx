import React from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = ({ destinations }) => {
  return (
    <div className="card-container">
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} {...dest} />
      ))}
    </div>
  );
};

export default DestinationList;
