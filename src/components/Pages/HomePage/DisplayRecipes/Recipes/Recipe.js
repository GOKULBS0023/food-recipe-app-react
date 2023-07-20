import React, { useState } from "react";
import Styles from "./Recipe.module.css";
import { Link } from "react-router-dom";

const Recipe = (props) => {
  const [isValidImageURL, setIsValidImageURL] = useState(false);
  const image = props.getRecipe.image;
  const userMealType = props.mealType;
  let recipeMealTypes = [];
  props.getRecipe.mealType.length === 2 &&
    (recipeMealTypes = props.getRecipe.mealType[1].split("/"));
  let mealTypes = props.getRecipe.mealType[0].split("/");
  recipeMealTypes.length > 1 && (mealTypes = [...mealTypes, ...recipeMealTypes]);

  const checkImageValidity = () => {
    const img = new Image();
    img.onload = () => {
      setIsValidImageURL(true);
    };
    img.onerror = () => {
      setIsValidImageURL(false);
    };
    img.src = image;
  };

  checkImageValidity();

  const shouldDisplayRecipe = () => {
    if (userMealType === "all" || mealTypes.includes(userMealType)) {
      return true;
    }
    return false;
  };
const handleRecipeClickEvent =()=>{
  localStorage.setItem("selectedRecipe", JSON.stringify(props.getRecipe));
}
  return (
    <React.Fragment>
      {isValidImageURL && shouldDisplayRecipe() && (
        <Link style={{ textDecoration: "none" }} className={Styles.recipe} onClick={handleRecipeClickEvent} to="/recipes">
          <div className={Styles["recipe__img-box"]}>
            <img
              src={props.getRecipe.image}
              className={Styles["recipe__img"]}
              alt={props.getRecipe.label}
            />
          </div>
          <div className={Styles["recipe__details"]}>
            <h2 className={Styles["recipe__name"]}>{props.getRecipe.label}</h2>
          </div>
        </Link>
      )}
    
    </React.Fragment>
  );
};

export default Recipe;
