import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import RecipeDetails from "./components/Pages/RecipeDetails/RecipeDetails";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route
        path="/recipes"
        element={<RecipeDetails/>}
      />
    </Routes>
  );
}

export default App;
