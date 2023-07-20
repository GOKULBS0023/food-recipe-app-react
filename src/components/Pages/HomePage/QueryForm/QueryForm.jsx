import React, { useState } from "react";
import Input from "./Input/Input";
import SearchButton from "./SearchButton/SearchButton";
import Dropdown from "./HealthDropdown/HealthDropdown";
import DietDropdown from "./DietDropdown/DietDropdown";
import Styles from "./QueryForm.module.css";

const QueryForm = (props) => {
  return (
    <form onSubmit ={props.submitButtonHandler} className={Styles["query-from"]}>
      <Input handleInputChange = {props.onInputChangeHandler} value={props.inputQuery}></Input>
      <Dropdown onChangeHealthLabel={props.onChangeHealthLabel}/>
      <DietDropdown onChangeDiet = {props.onChangeDiet}/>
      <SearchButton></SearchButton>
    </form>
  );
};

export default QueryForm;
