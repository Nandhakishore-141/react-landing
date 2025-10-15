import React from "react";

const DestinationCard = ({ name, type, country,image }) => {
  return (
    <div className="card">
        <img
        src={image}
         style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "10px 10px 0 0"
          
        }}
        />
      <h3>{name}</h3>
      <p>{country}</p>
      <br />
    </div>
  );
};

export default DestinationCard;
