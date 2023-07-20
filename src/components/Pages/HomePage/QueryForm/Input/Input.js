import Styles from "./Input.module.css";
const Input = (props) => {
  return (
    <input
      type="text"
      placeholder="Enter your ingredient"
      value={props.value}
      onChange={props.handleInputChange}
      className={Styles["search__input"]}
      required
    />
  );
};

export default Input;
