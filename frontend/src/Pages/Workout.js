import React from "react";
import Navbar from "../Components/Navbar"; 



const Workout = ()=>{
    
    return (
        <div>
            <Navbar/>
    <h1>Workout</h1>
    <input
    type="text"
    placeholder="exercise"/>
    <input
    type="text"
    placeholder="duration(mins)"/>
    </div>
    )
}
export default Workout