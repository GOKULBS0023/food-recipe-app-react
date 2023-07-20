import React from "react";
import Styles from "./DietDropdown.module.css";

const DietDropdown = (props) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    props.onChangeDiet(selectedValue);
  };

  return (
    <select
      onChange={handleChange}
      value={props.selectedDiet}
      className={Styles["diet__dropdown"]}
    >
      <option value="balanced">Balanced</option>
      <option value="high-fiber">High-Fiber</option>
      <option value="high-protein">High-Protein</option>
      <option value="low-carb">Low-Carb</option>
      <option value="low-fat">Low-Fat</option>
      <option value="low-sodium">Low-Sodium</option>
    </select>
  );
};

export default DietDropdown;
