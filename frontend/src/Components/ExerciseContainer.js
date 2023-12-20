import React, { useState } from "react";
import AddExercise from "./AddExercise";
import WorkoutCard from "./WorkoutCard";

const ExerciseContainer = () => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    // Update the state with the new exercise
    setExercises([...exercises, exercise]);
  };

  return (
    <div>
      <AddExercise onAddExercise={addExercise} />
      <WorkoutCard exercises={exercises} />
    </div>
  );
};

export default ExerciseContainer;