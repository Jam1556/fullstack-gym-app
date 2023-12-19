import "./App.css";
import StatsPage from "./Pages/statsPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import { useState, UseEffect } from "react";
import Signup from "./Pages/Signup";
import "./HomePage.css"
import HomePageBar from "./Compoents/HomePageBar";
import { LoginContext } from "./Context/LoginContext";
import LoginPage from "./Pages/LoginPage";

function App() {

  const [action, setAction] = useState("")

  return (

    <BrowserRouter>
      <LoginContext.Provider value={{ action, setAction }}>


        <Routes>
          <Route

            path='/StatsPage'
            element={<StatsPage />}


          />

          <Route

            path="/"
            element={<HomePage />}


          />

          <Route

            path="/Signup"
            element={<Signup />}


          />

          <Route

            path="/LoginPage"
            element={<LoginPage />}

            
          />



        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
