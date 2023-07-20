import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import RecipeDetails from "./components/Pages/RecipeDetails/RecipeDetails";
import Login from "./components/Pages/Authenticate/Login";
import Signup from "./components/Pages/Authenticate/Signup";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<RecipeDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
