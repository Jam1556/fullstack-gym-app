import React, { useState } from "react";

const AddExercise = ({ onClose }) => {
  const [exerciseData, setExerciseData] = useState({
    text: "",

  });

  const inputStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "67%",
    top: "80%",
    width: "10%",
  };

  const buttonStyle = {
    display: "flex",
    position: "absolute",
    left: "77%",
    top: "86.5%",
    width: "3%",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({
      ...exerciseData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/exercise/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exerciseData),
      });

      if (response.ok) {

        onClose();
      } else {

        console.error("Failed to create exercise:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating exercise:", error);
    }
  };

  return (
    <div>
      <form style={inputStyle}>
        <input
          type="text"
          placeholder="Exercise"
          name="text"
          value={exerciseData.text}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Reps"
          name="reps"
          value={exerciseData.reps}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Sets"
          name="sets"
          value={exerciseData.sets}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Duration(mins)"
          name="duration"
          value={exerciseData.duration}
          onChange={handleInputChange}
        />
      </form>
      <button
        style={buttonStyle}
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddExercise;