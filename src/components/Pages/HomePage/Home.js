import React, { useState, useEffect } from "react";
import { api_id, api_key } from "../../../API_KEYS/key";
import Axios from "axios";
import "./Home.css";
import QueryForm from "./QueryForm/QueryForm";
import MealType from "./MealType/MealType";
import DisplayRecipes from "./DisplayRecipes/DisplayRecipes";

const Home = () => {
  const [mealType, setMealType] = useState("all");
  const [query, setQuery] = useState("Banana");
  const [recipes, setRecipes] = useState(null);
  const [healthLabel, setHealthLabel] = useState("vegan");
  const [dietValue, setDietValue] = useState("balanced");
  const getMealType = (meal) => {
    setMealType(meal);
  };
  const inputChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitButtonHandler = async (e) => {
    if (e) {
      e.preventDefault();
    }
    var url = `https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}&from=0&to=10&health=${healthLabel}&diet=${dietValue}`;
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
  };

  useEffect(() => {
    submitButtonHandler();
  }, [healthLabel, dietValue, query]);
  return (
    <div className="home">
      <h1 className="heading">Food Recipes</h1>
      <QueryForm
        onInputChangeHandler={inputChangeHandler}
        inputQuery={query}
        submitButtonHandler={submitButtonHandler}
        onChangeHealthLabel={(label) => {
          setHealthLabel(label);
        }}
        onChangeDiet={(value) => {
          setDietValue(value);
        }}
      />
      <MealType mealType={getMealType} />
      {recipes && <DisplayRecipes recipes={recipes} mealType={mealType} />}
    </div>
  );
};
export default Home;
