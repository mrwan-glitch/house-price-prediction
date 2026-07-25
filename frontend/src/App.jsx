import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    carpet_area_sqft: "",
    floor_num: "",
    Bathroom: "",
    Balcony: "",
    location_grouped: "",
    Furnishing: "",
    Transaction: "",
    Ownership: "",
    facing: "",
  });

  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        {
          carpet_area_sqft: Number(formData.carpet_area_sqft),
          floor_num: Number(formData.floor_num),
          Bathroom: Number(formData.Bathroom),
          Balcony: Number(formData.Balcony),
          location_grouped: formData.location_grouped,
          Furnishing: formData.Furnishing,
          Transaction: formData.Transaction,
          Ownership: formData.Ownership,
          facing: formData.facing,
        }
      );

      setPrice(response.data["Predicted Price"]);
    } catch (error) {
      console.error(error);
      alert("Error connecting to the backend");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.15)",
        fontFamily: "Arial",
        backgroundColor: "#ffffff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "30px",
        }}
      >
        House Price Prediction
      </h1>

      <input
        type="number"
        name="carpet_area_sqft"
        placeholder="Carpet Area (sqft)"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="number"
        name="floor_num"
        placeholder="Floor Number"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="number"
        name="Bathroom"
        placeholder="Bathrooms"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="number"
        name="Balcony"
        placeholder="Balconies"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location_grouped"
        placeholder="Location"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="Furnishing"
        placeholder="Furnishing"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="Transaction"
        placeholder="Transaction"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="Ownership"
        placeholder="Ownership"
        style={inputStyle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="facing"
        placeholder="Facing"
        style={inputStyle}
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "15px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Predict Price
      </button>

      {price && (
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <h3>Estimated Price</h3>

          <h2
            style={{
              color: "green",
              fontSize: "32px",
            }}
          >
            ₹ {Number(price).toLocaleString("en-IN")}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;