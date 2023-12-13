import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from "./Pages/About"
import Workout from "./Pages/Workout"
import Search from "./Pages/Search"

function App() {
  const headerStyle = {
    backgroundColor: "grey",
  };


  return (
    <div className="App">
      <BrowserRouter>
      <h1 style={headerStyle}>Gym App</h1>
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route
        path="/about"
        element={<About />}
        />
        <Route
        path="/search"
        element={<Search />}
        />
        <Route
        path="/workout"
        element={<Workout />}
        />
      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
