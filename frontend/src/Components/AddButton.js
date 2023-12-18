import React from "react"
//the button on the screen that you click to open the dialogue box

const AddButton=({onClick})=>{
    const buttonStyle={
        backgroundColor:"turquoise",
position:"relative",
        top:"70%",
        left:"67%",
        padding:"10px 50px",
        fontSize:"200%",
    }
    return(
    <div>

    <button
    style={buttonStyle} onClick={onClick}
    >Add</button>
    </div>
)}

export default AddButton