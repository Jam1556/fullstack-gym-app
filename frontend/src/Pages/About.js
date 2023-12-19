import React from "react";
import Navbar from "../Components/Navbar"; 
import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <Navbar/>
    <h1>About Us</h1>
    <h2>Alex</h2>
    <div className="about-container">
    <p> I put forward a couple of design ideas for the overall app, as well as creating the functionality for the Workout page. I created the ADD button which conditionally renders some input bars and a submit button, and when that button is pressed it triggers a POST api fetch request, sending your workout information to the server. 
        There is also a GET request implemented in this button to show your recent workouts in the Workout Card I created on the left side of the screen. </p>
        <h3>Details</h3>
        <p>Github: <Link to="https://github.com/AW1711">AW1711</Link>
            email adress: ajgwinstanley@hotmail.com
        </p>
        </div>
        <h2>Baker</h2>
        <div className="about-container">
            <p></p>
        </div>
        <h2>Jamie</h2>
        <div className="about-container">
            <p></p>
        </div>
<h2>Mubarik</h2>
<div className="about-container">
    <p></p>
</div>
    </>
    )
}

export default About