import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import GridButtons from "./gridButtons";
import Input from "./input";

const ResetButton = styled(Button)({
  textTransform: "uppercase",
  backgroundColor: "hsl(172, 67%, 45%)",
  color: "hsl(183, 100%, 15%)",
  fontWeight: "700",
  fontSize: "1.25rem",
  width: "100%",
  height: "3rem",

  "&:hover": {
    backgroundColor: "hsl(185, 41%, 84%)",
    boxShadow: "none",
  },
});

const CustomButton = styled(ButtonUnstyled)({
  fontWeight: "700",
  fontSize: "1.25rem",
  textTransform: "uppercase",
  backgroundColor: "hsl(172, 67%, 45%)",
  borderRadius: "5px",
  color: "hsl(186, 14%, 43%)",
  border: "none",
  width: "100%",
  height: "3rem",

  "&:focusVisible": {
    boxShadow:
      "0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5)",
    outline: "none",
  },

  "&:disabled": {
    opacity: "0.2",
    cursor: "not-allowed",
  },
});

// Function to create styled Material-UI Buttons
function ResetButtonInactive(props) {
  return <ButtonUnstyled {...props} component={CustomButton} />;
}

// Tip calculator component
export default function Calculator() {
  const [allValues, setAllValues] = useState({
    bill: "",
    people: "",
    tip: "",
    customTip: "",
  });

  const tipAmount = (
    (allValues.bill * (allValues.tip / 100)) /
    allValues.people
  ).toFixed(2);

  const totalAmount = (
    allValues.bill / allValues.people +
    (allValues.bill * (allValues.tip / 100)) / allValues.people
  ).toFixed(2);

  // Input changes and button clicks calls this function to set values
  const handleChange = event => {
    if (event.target.name === "tip") {
      setAllValues(prevState => ({
        ...prevState,
        tip: event.target.value,
        customTip: "",
      }));
    } else if (event.target.name === "custom") {
      setAllValues(prevState => ({
        ...prevState,
        tip: event.target.value,
        customTip: event.target.value,
      }));
    } else {
      setAllValues({ ...allValues, [event.target.name]: event.target.value });
    }
  };

  // On click this function resets all values to initials values
  const handleReset = () => {
    setAllValues(prevState => ({
      ...prevState,
      bill: "",
      people: "",
      tip: "",
      customTip: "",
    }));
  };

  return (
    <Card className={styles.calculator}>
      <div className={styles.calculatorLeft}>
        <div className={styles.containerInput}>
          <Input
            text="Bill"
            name="bill"
            id="bill"
            value={allValues.bill}
            onChange={handleChange}
            min={0}
            step={".01"}
            placeholder={"0"}
          />
          <img className={styles.icon} src="./icon-dollar.svg" />
        </div>
        <div>
          <p className={styles.text}>Select Tip %</p>
          <GridButtons onClick={handleChange} value={allValues.customTip} />
        </div>
        <div className={styles.containerInput}>
          <Input
            text="Number of People"
            name="people"
            id="people"
            value={allValues.people}
            onChange={handleChange}
            min={1}
            step={"1"}
            placeholder={"0"}
          />
          <img className={styles.icon} src="./icon-person.svg" />
          {!allValues.people ? null : allValues.people < 1 ? (
            <span className={styles.hidden}>Can't be zero</span>
          ) : null}
        </div>
      </div>
      <div className={styles.calculatorRight}>
        <div className={styles.result}>
          <div>
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          {allValues.bill && allValues.people > 0 && allValues.tip ? (
            <h2>${tipAmount}</h2>
          ) : (
            <h2>$0.00</h2>
          )}
        </div>
        <div className={styles.result}>
          <div>
            <p>Total</p>
            <span>/ person</span>
          </div>
          {allValues.bill && allValues.people > 0 && allValues.tip ? (
            <h2>${totalAmount}</h2>
          ) : (
            <h2>$0.00</h2>
          )}
        </div>
        <div className={styles.button}>
          {allValues.bill ||
          allValues.tip ||
          allValues.people ||
          allValues.customTip ? (
            <ResetButton variant="contained" onClick={handleReset}>
              Reset
            </ResetButton>
          ) : (
            <ResetButtonInactive disabled>Reset</ResetButtonInactive>
          )}
        </div>
      </div>
    </Card>
  );
}
