import React from "react";
import Styles from "./Details.module.css";

const Details = (props) => {
  const recipe = props.recipe;
  console.log(recipe);
  return (
    <div className={Styles["container"]}>
      <div className={Styles["recipe__image-box"]}>
        <img src={recipe.image} alt={recipe.label} />
      </div>
      <div className={Styles["recipe__content-box"]}>
        <h2>
          {recipe.label}{" "}
          <a className={Styles["source"]} href={recipe.url} target="_blank" rel="noreferrer" >
            <blockquote>{recipe.source} (get full recipe)</blockquote>
          </a>
        </h2>
        <div className={Styles["cal-wg"]}>
          <h4
            className={Styles["calories"]}
            style={
              recipe.calories > 400 ? { color: "red" } : { color: "green" }
            }
          >
            Calories: {recipe.calories.toFixed(2)}
          </h4>
          <h4
            className={Styles["calories"]}
            style={
              recipe.totalWeight > 250 ? { color: "red" } : { color: "green" }
            }
          >
            Total Weight: {recipe.totalWeight.toFixed(2)}g
          </h4>
        </div>
        <div className={Styles["other__data"]}>
          <div className={Styles["label"]}>
            <ul className={Styles["list"]}>Diet Type: </ul>
            {recipe.dietLabels.map((diet) => (
              <li key={diet} className={Styles["items"]}>
                {diet}
              </li>
            ))}
          </div>
          <div className={Styles["label"]}>
            <ul className={Styles["list"]}>Meal Type: </ul>
            {recipe.mealType.map((meal) => (
              <li key={meal} className={Styles["items"]}>
                {meal.charAt(0).toUpperCase() + meal.slice(1)}
              </li>
            ))}
          </div>
          <div className={Styles["label"]}>
            <ul className={Styles["list"]}>Dish Type: </ul>
            {recipe.dishType.map((dish) => (
              <li key={dish} className={Styles["items"]}>
                {dish.charAt(0).toUpperCase() + dish.slice(1)}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className={Styles["recipe__ingredient"]}>
        <ul className={Styles["list"]}>
          {recipe.ingredientLines.length} Ingredients Used:
        </ul>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index} className={Styles["items"]}>
            {ingredient}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Details;
