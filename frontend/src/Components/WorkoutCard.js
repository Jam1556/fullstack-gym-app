import React from "react";

const WorkoutCard = ({ exercises }) => {
  console.log("Exercises:", exercises);

  const cardStyle = {
    borderRadius:"10px",
    border: "2px solid",
    width: "18%",
    height: "400px",
position: "relative",
    left:"10%",


  };

  const entryStyle = {
    backgroundColor: "turquoise",
    borderRadius:"5px",
    border: "1px solid"
  }

  // Retrieve the most recently added exercise
  const recentExercises =
  exercises && exercises.exercise
    ? exercises.exercise.slice(-4).reverse()
    : [];

return (
  <div style={cardStyle}>
    {recentExercises.length > 0 ? (
      <ul style={entryStyle}>
        {recentExercises.map((exercise) => (
          <li key={exercise._id}>
            <strong>Exercise:</strong> {exercise.text}
            <br />
            <strong>Reps:</strong> {exercise.reps || "N/A"}
            <br />
            <strong>Sets:</strong> {exercise.sets || "N/A"}
            <br />
            <strong>Duration:</strong> {exercise.duration || "N/A"} mins
          </li>
        ))}
      </ul>
    ) : (
      <p>No exercises added yet.</p>
    )}
  </div>
);
    }

export default WorkoutCard;