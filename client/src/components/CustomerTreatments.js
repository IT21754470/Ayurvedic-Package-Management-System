import React, { useState, useEffect } from "react";

import axios from "axios";
import TreatmentCard from "./TreatmentCard";
import Homepage from "./HomePage";
import "../css/CustomerTreatments.css"; // Import your CSS file

axios.defaults.baseURL = "http://localhost:8090/";

function CustomerTreatments() {
  const [treatments, setTreatments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch treatment data from your backend
    async function fetchTreatments() {
      try {
        const response = await axios.get("/getData");
        if (response.data.success) {
          setTreatments(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching treatment data:", error);
      }
    }

    fetchTreatments();
  }, []);

  const handleSearch = () => {
    const filteredTreatments = treatments.filter((treatment) =>
      treatment.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredTreatments);
  };

  return (
    <div>
      <Homepage />


    

      <h2>Customer Treatments</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i>
          Search
        </button>
      </div>
      <div className="treatment-list">
        <div className="treatment-columns">
          {searchResults.length > 0
            ? searchResults.map((treatment) => (
                <div key={treatment._id} className="treatment-column">
                  <TreatmentCard treatment={treatment} />
                </div>
              ))
            : treatments.map((treatment) => (
                <div key={treatment._id} className="treatment-column">
                  <TreatmentCard treatment={treatment} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerTreatments;
