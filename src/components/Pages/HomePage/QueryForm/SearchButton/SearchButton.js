import React from 'react';
import Styles from "./SearchButton.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchButton = () => {
  return (
    <button type='submit' className={Styles["search__btn"]}> 
    <FontAwesomeIcon icon={faSearch} className={Styles["search__icon"]}/>
    </button>
  )
}

export default SearchButton;