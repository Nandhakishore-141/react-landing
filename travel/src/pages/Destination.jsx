import React, { useState } from "react";
import DestinationList from "../components/DestinationList";
import Bali from "../assets/Bali.webp";
import Goa from "../assets/Goa.webp";
import Paris from "../assets/Paris.webp";
import Manali from "../assets/Manali.jpg";
import "./Destination.css"; 

const destinations = [
  { id: 1, name: "Goa", type: "Beach", country: "India", image: Goa, temp: "warm" },
  { id: 2, name: "Manali", type: "Mountain", country: "India", image: Manali, temp: "cold" },
  { id: 3, name: "Paris", type: "City", country: "France", image: Paris, temp: "cold" },
  { id: 4, name: "Bali", type: "Beach", country: "Indonesia", image: Bali, temp: "warm" },
];

const Destination = () => {
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState("");

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(search.toLowerCase()) ||
      dest.type.toLowerCase().includes(search.toLowerCase()) ||
      dest.country.toLowerCase().includes(search.toLowerCase());

    const matchesTemp = temp ? dest.temp === temp : true;
    return matchesSearch && matchesTemp;
  });

  return (
    <div className="destination-container">
      <h2>Explore Destinations</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name, type, or country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          className="dropdown"
        >
          <option value="">All Temperatures</option>
          <option value="warm">Warm</option>
          <option value="cold">Cold</option>
        </select>
      </div>

      {filteredDestinations.length > 0 ? (
        <DestinationList destinations={filteredDestinations} />
      ) : (
        <p className="no-results">No destinations found!</p>
      )}
    </div>
  );
};

export default Destination;
