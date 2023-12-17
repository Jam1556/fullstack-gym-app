import "./App.css";
import StatsPage from "./Pages/statsPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import "./HomePage.css"
import HomePageBar from "./Compoents/HomePageBar";

function App() {
  return (
    <BrowserRouter>

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

          path="/Login"
          element={<LoginPage />}


        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
