
import React, { useState, useEffect } from "react";
import axios from "axios";
import TreatmentForm from "./TreatmentForm";
import TreatmentList from "./TreatmentList";


axios.defaults.baseURL = "http://localhost:8090/";

function TreatmentPage() {
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    packageName: "",
    price: "",
    description1: "",
    description2: "",
    _id: "",
  });
  const [dataList, setDataList] = useState([]);

  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append("name", formData.name);
    formDataWithFile.append("image", formData.image);
    formDataWithFile.append("packageName", formData.packageName);
    formDataWithFile.append("price", formData.price);
    formDataWithFile.append("description1", formData.description1);
    formDataWithFile.append("description2", formData.description2);

    try {
      if (formData._id) {
        formDataWithFile.append("_id", formData._id);
        const response = await axios.put(`/update/${formData._id}`, formDataWithFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success) {
          // Handle successful update
          alert(response.data.message);

          // Reset the form data
          setFormData({
            name: "",
            image: null,
            packageName: "",
            price: "",
            description1: "",
            description2: "",
            _id: "",
          });

          // Close the form
          setAddSection(false);

          // Fetch updated data
          getFetchData();
        }
      } else {
        const response = await axios.post("/create", formDataWithFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success) {
          // Handle successful creation
          alert(response.data.message);

          // Reset the form data
          setFormData({
            name: "",
            image: null,
            packageName: "",
            price: "",
            description1: "",
            description2: "",
          });

          // Close the form
          setAddSection(false);

          // Fetch updated data
          getFetchData();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  const handleEdit = (treatment) => {
    setFormData({
      _id: treatment._id,
      name: treatment.name,
      packageName: treatment.packageName,
      price: treatment.price,
      description1: treatment.description1,
      description2: treatment.description2,
    });
    setAddSection(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/delete/${id}`);

      if (response.data.success) {
        alert(response.data.message);
        getFetchData();
      }
    } catch (error) {
      console.error("Error deleting treatment:", error);
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("/getData");
      if (response.data.success) {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
   
      <h2>{formData._id ? "Edit Treatment" : "Add Treatment"}</h2>
      <button onClick={() => setAddSection(!addSection)}>

        {addSection ? "Close Form" : "Add Treatment"}
      </button>
      {addSection ? (

        
        <TreatmentForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleFileChange={handleFileChange}
          rest={formData}
        />
      ) : (
        <div>
          <TreatmentList
            dataList={dataList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}

export default TreatmentPage;


