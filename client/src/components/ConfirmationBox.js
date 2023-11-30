import React from "react";

function ConfirmationBox({ onConfirm, onCancel }) {
  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h2>Confirmation</h2>
        <p>Are you sure you want to add this treatment?</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmationBox;

