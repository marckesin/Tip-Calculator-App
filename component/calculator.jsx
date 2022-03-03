import { styled } from "@mui/material/styles";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import Card from "@mui/material/Card";
import GridButtons from "./gridButtons";
import styles from "../styles/Home.module.css";

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
  borderRadius: "4px",
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

function ResetButtonInactive(props) {
  return <ButtonUnstyled {...props} component={CustomButton} />;
}

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const handleBill = event => setBill(event.target.value);
  const handleReset = () => {
    setBill("");
    setTip("");
    setPeople("");
  };
  const handleTip = event => setTip(event.target.value);
  const handlePeople = event => setPeople(event.target.value);

  return (
    <Card className={styles.calculator}>
      <div className={styles.calculatorLeft}>
        <div className={styles.input}>
          <label htmlFor="bill" className={styles.text}>
            Bill
          </label>
          <input
            type="text"
            name="bill"
            id="bill"
            value={bill}
            onChange={handleBill}
          />
        </div>
        <div>
          <p className={styles.text}>Select Tip %</p>
          <GridButtons handleTip={handleTip} />
        </div>
        <div className={styles.input}>
          <label htmlFor="people" className={styles.text}>
            Number of People
          </label>
          <input
            type="text"
            name="people"
            id="people"
            value={people}
            onChange={handlePeople}
          />
        </div>
      </div>
      <div className={styles.calculatorRight}>
        <div className={styles.result}>
          <div>
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          {bill ? <h2>${tip}</h2> : <h2>$0.00</h2>}
        </div>
        <div className={styles.result}>
          <div>
            <p>Total</p>
            <span>/ person</span>
          </div>
          {bill ? <h2>${bill}</h2> : <h2>$0.00</h2>}
        </div>
        <div className={styles.button}>
          {bill ? (
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