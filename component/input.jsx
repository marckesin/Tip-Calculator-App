import styles from "../styles/Home.module.css";

// Input component for the calculator
export default function Input(props) {
  return (
    <div className={styles.input}>
      <label htmlFor={props.name} className={styles.text}>
        {props.text}
      </label>
      <input
        type="number"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        min={props.min}
        step={props.step}
      />
    </div>
  );
}
