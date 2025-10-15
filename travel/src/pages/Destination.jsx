import React, { useState } from "react";
import DestinationList from "../components/DestinationList";
import FilterBar from "../components/FilterBar";
import DestinationCard from "../components/DestinationCard";
import Bali from "../assets/Bali.webp"
import Goa from "../assets/Goa.webp"
import Paris from "../assets/Paris.webp"
import Manali from "../assets/Manali.jpg"


const destinations = [
  { id: 1, name: "Goa", type: "Beach", country: "India" ,image :Goa,temp:warm},
  { id: 2, name: "Manali", type: "Mountain", country: "India" ,image:Manali,temp:cold},
  { id: 3, name: "Paris", type: "City", country: "France",image: Paris,temp:cold},
  { id: 4, name: "Bali", type: "Beach", country: "Indonesia",image:Bali,temp:warm}, 
];

const Destination = () => {
  const [search,setSearch] = useState("");
  const [temp,setTemp] = useState("");

const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(search.toLowerCase()) ||
    dest.type.toLowerCase().includes(search.toLowerCase()) ||
    dest.country.toLowerCase().includes(search.toLowerCase())
  );
return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2> Explore Destinations</h2>
      <input
        type="text"
        placeholder="Search by name, type, or country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        style={{
          padding: "10px",
          width: "320px",
          borderRadius: "5px",
          border: "1px solid gray",
          outline: "none",
        }}
      />

  
      {filteredDestinations.length > 0 ? (
        <DestinationList destinations={filteredDestinations} />
      ) : (
        <p style={{ marginTop: "30px", color: "gray" }}> No destinations found!</p>
      )}
    </div>
  );
};

export default Destination;
