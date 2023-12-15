import "./App.css";
import StatsPage from "./Pages/statsPage"
import NavBar from "./Compoents/navBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route

          path='/'
          element={<StatsPage />}


        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
