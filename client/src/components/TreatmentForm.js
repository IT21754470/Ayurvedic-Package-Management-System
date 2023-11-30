// components/TreatmentForm.js
import React from "react";
import "../css/TreatmentForm.css";

const TreatmentForm = ({
  handleSubmit,
  handleOnChange,
  handleFileChange,
  handleClose,
  rest,
}) => {
  return (
    <div className="form-container">
      <h2>{rest._id ? "Edit Treatment" : "Add Treatment"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Treatment Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleOnChange}
            value={rest.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Treatment Image:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="packageName">Package Name:</label>
          <input
            type="text"
            id="packageName"
            name="packageName"
            onChange={handleOnChange}
            value={rest.packageName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={handleOnChange}
            value={rest.price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description1">Description 1:</label>
          <textarea
            id="description1"
            name="description1"
            onChange={handleOnChange}
            value={rest.description1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description2">Description 2:</label>
          <textarea
            id="description2"
            name="description2"
            onChange={handleOnChange}
            value={rest.description2}
          />
        </div>
        <button className="btn btn-signup" type="submit">
          {rest._id ? "Update" : "Save Treatment"}
        </button>
        {rest._id && (
          <button className="btn btn-cancel" onClick={handleClose}>
            Cancel
          </button>
        )}
        <button className="btn btn-close" onClick={handleClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default TreatmentForm;


















