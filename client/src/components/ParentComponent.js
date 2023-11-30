// ParentComponent.js
import React, { useState } from "react";
import ConfirmationBox from "./ConfirmationBox";
import { useHistory } from "react-router-dom";

function ParentComponent() {
  const history = useHistory();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Logic to confirm the action
    // For example, you can perform some action and then navigate to a success page

    // Navigate to the success page
    history.push("/success"); // Replace with the path to your success page

    // Close the confirmation dialog
    setShowConfirmation(false);
  };

  const handleCancel = () => {      
    // Close the confirmation dialog
    setShowConfirmation(false);
  };

  return (
    <div>
      <button onClick={handleAddClick}>Add Treatment</button>
      {showConfirmation && (
        <ConfirmationBox onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}

export default ParentComponent;
