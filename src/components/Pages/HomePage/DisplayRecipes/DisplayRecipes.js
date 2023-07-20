import React from "react";
import Recipe from "./Recipes/Recipe";
import Styles from "./DisplayRecipes.module.css";

const DisplayRecipes = (props) => {
  return (
    <div className={Styles["display__recipes-grid"]}>
      {props.recipes.map((recipe) => {
        return (
          <Recipe
            getRecipe={recipe.recipe}
            key={props.recipes.indexOf(recipe)}
            mealType={props.mealType}
          ></Recipe>
        );
      })}
    </div>
  );
};

export default DisplayRecipes;
