import React, { useState, useEffect } from "react";
import Styles from "./MealType.module.css";

const MealType = (props) => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeMeal, setActiveMeal] = useState("all"); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 200;

      if (scrollPosition >= scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMealClick = (meal) => {
    setActiveMeal(meal);
    props.mealType(meal);
  };

  return (
    <div
    className={`${Styles.meals__list} ${isFixed ? `${Styles.fixed} ${Styles.show}` : ""}`}
    >
      <p
        className={`${Styles["meal__type"]} ${
          activeMeal === "all" ? Styles["active"] : ""
        }`}
        onClick={() => handleMealClick("all")}
      >
        All
      </p>
      <p
        className={`${Styles["meal__type"]} ${
          activeMeal === "breakfast" ? Styles["active"] : ""
        }`}
        onClick={() => handleMealClick("breakfast")}
      >
        Breakfast
      </p>
      <p
        className={`${Styles["meal__type"]} ${
          activeMeal === "lunch" ? Styles["active"] : ""
        }`}
        onClick={() => handleMealClick("lunch")}
      >
        Lunch
      </p>
      <p
        className={`${Styles["meal__type"]} ${
          activeMeal === "dinner" ? Styles["active"] : ""
        }`}
        onClick={() => handleMealClick("dinner")}
      >
        Dinner
      </p>
      <p
        className={`${Styles["meal__type"]} ${
          activeMeal === "teatime" ? Styles["active"] : ""
        }`}
        onClick={() => handleMealClick("teatime")}
      >
        Tea Time
      </p>
    </div>
  );
};

export default MealType;
