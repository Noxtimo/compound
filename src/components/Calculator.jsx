import React, { useState } from "react";
import ToggleCurrency from "./ToggleCurrency";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";

const Calculator = () => {
  const [principal, setPrincipal] = useState(5000);

  const [rate, setRate] = useState(5);

  const [time, setTime] = useState(5);

  const [compound, setCompound] = useState(1);

  const [result, setResult] = useState(0);

  const [extra, setExtra] = useState(500);

  const [currency, setCurrency] = useState("£");

  const compoundInterst = [];
  compoundInterst.push((principal + extra) * (1 + rate / 100));
  const initialInvestment = [];
  initialInvestment.push(principal + extra);

  const handleMaxTime = (e) => {
    if (e.target.value <= 42) {
      setTime(e.target.value);
    }
  };

  for (let i = 0; i < time - 1; i++) {
    var lastElementInInitialInvestmentArray =
      initialInvestment[initialInvestment.length - 1];
    initialInvestment.push(lastElementInInitialInvestmentArray + extra);

    compoundInterst.push(
      (compoundInterst[compoundInterst.length - 1] + extra) * (1 + rate / 100)
    );
  }

  const generateCountdownArray = (num) => {
    const array = [];
    for (let i = 0; i < num; i++) {
      array.push(i);
    }
    return array;
  };

  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
  ];

  const handleKeyDown = (event) => {
    if (!/[0-9]/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleCurrencyChange = (e) => {
    const value = e.target.value;

    setCurrency(value);
  };

  return (
    <div
      className="calculator-container"
      style={{ backgroundColor: "inherit" }}
    >
      <h2 className="result">Compound Interest Calculator</h2>
      <div>
        <div className="input-row" style={{ backgroundColor: "inherit" }}>
          <div className="currency-container">
            <ToggleCurrency setCurrency={setCurrency} />
          </div>
        </div>
        <div className="input-row">
          <label>Principal:</label>

          <div className="currency-div">
            <span>{currency}</span>
            <input
              onKeyDown={handleKeyDown}
              className="currency-field"
              type="text"
              value={principal}
              maxLength="6"
              onChange={(e) => setPrincipal(+e.target.value)}
            />
          </div>
        </div>
        <div className="input-row">
          <label>Yearly contribution</label>

          <div className="currency-div">
            <span>{currency}</span>
            <input
              onKeyDown={handleKeyDown}
              className="currency-field"
              type="text"
              value={extra}
              maxLength="5"
              onChange={(e) => setExtra(+e.target.value)}
            />
          </div>
        </div>

        <div className="input-row">
          <label>Interest Rate %</label>

          <input
            onKeyDown={handleKeyDown}
            className="input-fields"
            type="text"
            maxLength="2"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Time (years):</label>

          <input
            className="input-fields"
            type="text"
            maxLength="2"
            onKeyDown={handleKeyDown}
            value={time}
            onChange={handleMaxTime}
          />
        </div>

        <div className="input-row"></div>

        <div className="result">
          <h2>Future Value: </h2>

          <h2 style={{ color: "green" }}>
            <span style={{ marginRight: "3%" }}>{currency}</span>
            {time < 1
              ? initialInvestment[initialInvestment.length - 1]
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
              : compoundInterst[compoundInterst.length - 1]
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
        </div>
        <div className="input-row"></div>

        <div className="result">
          <h2>Aggregate Interest: </h2>

          <h2 style={{ color: "green" }}>
            <span style={{ marginRight: "3%" }}>{currency}</span>
            {time < 1
              ? (
                  initialInvestment[initialInvestment.length - 1] -
                  initialInvestment[initialInvestment.length - 1]
                )
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
              : (
                  compoundInterst[compoundInterst.length - 1] -
                  initialInvestment[initialInvestment.length - 1]
                )
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
