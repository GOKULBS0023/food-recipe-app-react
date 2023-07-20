import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";
import Styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  
  const [recipeData, setRecipeData] = useState(null);
  useEffect(() => {
    const storedRecipe = localStorage.getItem("selectedRecipe");
    if (storedRecipe) {
      setRecipeData(JSON.parse(storedRecipe));
    }
  }, []);
  return (
    <div className={Styles["recipe__details-page"]}>
      <Link to="/" style={{ color: "#000" }} className={Styles["back-to-home"]}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={Styles["left__arrow-icon"]}
        />
        Back to Home
      </Link>
      {recipeData ? (
        <Details recipe={recipeData}></Details>
      ) : (
        <Link to="/" className={Styles["no-recipe"]}>
          <h2 className={Styles["no-recipe__text"]}>
            No details found for this recipe!{" "}
            <FontAwesomeIcon
              icon={faFaceFrownOpen}
            />
          </h2>
        </Link>
      )}
    </div>
  );
};

export default RecipeDetails;
