import React from "react";
import Styles from "./HealthDropdown.module.css";

const Dropdown = (props) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    props.onChangeHealthLabel(selectedValue);
  };
  return (
    <select onChange={handleChange} className={Styles["health__dropdown"]}>
      <option value="vegan">Vegan</option>
      <option value="alcohol-cocktail">Alcohol-Cocktail</option>
      <option value="alcohol-free">Alcohol-Free</option>
      <option value="celery-free">Celery-Free</option>
      <option value="crustacean-free">Crustcean-Free</option>
      <option value="dairy-free">Dairy-Free</option>
      <option value="DASH">Dash</option>
      <option value="egg-free">Egg-Free</option>
      <option value="fish-free">Fish-Free</option>
      <option value="fodmap-free">Fodmap-Free</option>
      <option value="gluten-free">Gluten-Free</option>
      <option value="immuno-supportive">Immuno Supportive</option>
      <option value="keto-friendly">Keto-Friendly</option>
      <option value="Kidney-friendly">Kidney-Friendly</option>
      <option value="kosher">Kosher</option>
      <option value="low-potassium">Low Potassium</option>
      <option value="low-sugar">Low Sugar</option>
      <option value="lupine-free">Lupine-Free</option>
      <option value="Mediterranean">Mediterranean</option>
      <option value="mollusk-free">Mollusk-Free</option>
      <option value="mustard-free">Mustard-Free</option>
      <option value="no-oil-added">No oil added</option>
      <option value="paleo">Paleo</option>
      <option value="peanut-free">Peanut-Free</option>
      <option value="pecatarian">Pescatarian</option>
      <option value="pork-free">Pork-Free</option>
      <option value="red-meat-free">Red-Meat-Free</option>
      <option value="sesame-free">Sesame-Free</option>
      <option value="shellfish-free">Shellfish-Free</option>
      <option value="soy-free">Soy-Free</option>
      <option value="sugar-conscious">Sugar-Conscious</option>
      <option value="sulfite-free">Sulfite-Free</option>
      <option value="tree-nut-free">Tree-Nut-Free</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="wheat-free">Wheat-Free</option>
    </select>
  );
};

export default Dropdown;
