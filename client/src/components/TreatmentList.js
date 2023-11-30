// components/TreatmentList.js
import React from "react";
import "../css/TreatmentList.css";


const TreatmentList = ({ dataList, handleEdit, handleDelete }) => {
  return (

    
    <div className="tableContainer">
       
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Package Name</th>
            <th>Price</th>
            <th>Description 1</th>
            <th>Description 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((treatment) => (
            <tr key={treatment._id}>
              <td>{treatment.name}</td>
              <td>
                <img
                  src={`http://localhost:8090/uploads/${treatment.image}`}
                  alt={`Treatment ${treatment._id}`}
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>{treatment.packageName}</td>
              <td>{treatment.price}</td>
              <td>{treatment.description1}</td>
              <td>{treatment.description2}</td>
              <td>
                <button className="btn btn-edit" onClick={() => handleEdit(treatment)}>
                  Edit
                </button>
                <button className="btn btn-delete" onClick={() => handleDelete(treatment._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TreatmentList;
