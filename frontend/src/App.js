import "./App.css";
import StatsPage from "./Pages/statsPage"
import NavBar from "./Compoents/navBar"
import Footer from "./Compoents/Footer";
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

      <Footer />
    </BrowserRouter>
  );
}

export default App;
