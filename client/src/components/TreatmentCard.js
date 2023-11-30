// TreatmentCard.js
import React, { useState } from "react";
import "../css/TreatmentCard.css";
import TreatmentDetailsModal from "./TreatmentDetailsModal";

function TreatmentCard({ treatment }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    
  return (
    <div className="treatment-card">
      <h3 className="treatment-name">{treatment.name}</h3>
      <img
        src={`http://localhost:8090/uploads/${treatment.image}`}
        alt={`Treatment ${treatment._id}`}
        className="treatment-image"
      />
      <div className="treatment-details">
      <p className="treatment-packageName">{treatment.packageName}</p>
        <p className="treatment-description">{treatment.description1}</p>
        <p className="treatment-price">Price: ${treatment.price}</p>
        <button className={`view-more-button ${isModalOpen ? "allow-pointer" : ""}`} onClick={toggleModal}>
          View More
        </button>
      </div>

      {isModalOpen && (
        <TreatmentDetailsModal treatment={treatment} onClose={toggleModal} />
      )}
    </div>
  );
}

export default TreatmentCard;
