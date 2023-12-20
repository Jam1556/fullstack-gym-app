import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/About.css"; // Make sure to create an About.css file for styling

const teamMembers = [
  {
    name: "Alex",
    role: "Design and Workout Page",
    description:
      "I put forward a couple of design ideas for the overall app, as well as creating the functionality for the Workout page. I created the ADD button which conditionally renders some input bars and a submit button, and when that button is pressed it triggers a POST api fetch request, sending your workout information to the server. There is also a GET request implemented in this button to show your recent workouts in the Workout Card I created on the left side of the screen.",
    github: "https://github.com/AW1711",
    email: "ajgwinstanley@hotmail.com",
  },
  // Add similar objects for Baker, Jamie, Mubarik
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Meet the team behind the Gym App</p>
        </header>
        <section className="team-members">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
              <p className="member-contact">
                GitHub:{" "}
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  {member.name}
                </a>
                <br />
                Email:{" "}
                <a href={`mailto:${member.email}`}>
                  {member.email}
                </a>
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default About;