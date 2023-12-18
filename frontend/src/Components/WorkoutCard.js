import React from "react";

const WorkoutCard = ({ exercises }) => {
  console.log("Exercises:", exercises);

  const cardStyle = {
    border: "8px solid",
    width: "18%",
    height: "400px",
    backgroundColor: "grey"
  };

  // Retrieve the most recently added exercise
  const mostRecentExercise =
    exercises && exercises.exercise && exercises.exercise.length > 0
      ? exercises.exercise[exercises.exercise.length - 1]
      : null;

  return (
    <div style={cardStyle}>
      <h2>Most Recent Exercise</h2>
      {mostRecentExercise ? (
        <ul>
          <li key={mostRecentExercise._id}>
            <strong>Exercise:</strong> {mostRecentExercise.text}
          </li>
          <li key={mostRecentExercise._id + "_reps"}>
            <strong>Reps:</strong> {mostRecentExercise.reps || "N/A"}
          </li>
          <li key={mostRecentExercise._id + "_sets"}>
            <strong>Sets:</strong> {mostRecentExercise.sets || "N/A"}
          </li>
          <li key={mostRecentExercise._id + "_duration"}>
            <strong>Duration:</strong> {mostRecentExercise.duration || "N/A"} mins
          </li>
        </ul>
      ) : (
        <p>No exercises added yet.</p>
      )}
    </div>
  );
};

export default WorkoutCard;