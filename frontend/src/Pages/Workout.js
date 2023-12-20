import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar"; 
import AddExercise from "../Components/AddExercise";
import AddButton from "../Components/AddButton";
import WorkoutCard from "../Components/WorkoutCard";
import Footer from "../Components/Footer";

const Workout = () => {
  const [showAddExercise, setShowAddExercise] = useState(false);
  const [exercisesData, setExercisesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/exercise/items");
        if (response.ok) {
          const data = await response.json();
          setExercisesData(data);
        } else {
          console.error("Failed to fetch exercises:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchData();
  }, [showAddExercise]); // Add showAddExercise as a dependency

  const AddButtonClick = () => {
    setShowAddExercise(true);
  };

  const SubmitWorkoutClick = () => {
    setShowAddExercise(false);
  };

  return (
    <>
            <Navbar />
      <div>
  
        <WorkoutCard exercises={exercisesData} />
        <AddButton onClick={AddButtonClick} />
        {showAddExercise && <AddExercise onClose={SubmitWorkoutClick} />}
      </div>
      <Footer />
    </>
  );
};

export default Workout;