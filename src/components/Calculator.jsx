import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);
const Calculator = () => {
  const [principal, setPrincipal] = useState(5000);

  const [rate, setRate] = useState(5);

  const [time, setTime] = useState(5);

  const [compound, setCompound] = useState(1);

  const [result, setResult] = useState(0);

  const [extra, setExtra] = useState(500);

  const compoundInterst = [];
  compoundInterst.push((principal + extra) * (1 + rate / 100));
  const initialInvestment = [];
  initialInvestment.push(principal + extra);

  for (let i = 0; i < time; i++) {
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

  const data = {
    labels: [...generateCountdownArray(time + 1)],
    datasets: [
      {
        label: "Initial Investment",
        data: [0, ...initialInvestment],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Compounded Investment",
        data: [0, ...compoundInterst],
        fill: false,
        borderColor: "green",
      },
    ],
  };

  const handleSetTime = (e) => {
    const value = +e.target.value;
    if (value >= 1 && value <= 100) {
      setTime(value);
    } else {
      // Optionally handle the case where value is outside the range
      // You may choose to ignore or set a default value within the range
      setTime(1); // Setting time to 1 if value is less than 1 or greater than 100
    }
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
  return (
    <>
      <h2 className="result">Compound Interest Calculator</h2>
      <div>
        <div className="input-row">
          <label>Principal:</label>

          <input
            onKeyDown={handleKeyDown}
            className="input-fields"
            type="text"
            value={principal}
            onChange={(e) => setPrincipal(+e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Yearly contribution</label>

          <input
            onKeyDown={handleKeyDown}
            className="input-fields"
            type="text"
            value={extra}
            onChange={(e) => setExtra(+e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Annual Interest Rate (%):</label>

          <input
            onKeyDown={handleKeyDown}
            className="input-fields"
            type="text"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Time (years):</label>

          <input
            className="input-fields"
            type="number"
            onKeyDown={handleKeyDown}
            value={time}
            onChange={handleSetTime}
          />
        </div>

        <div className="input-row">
          <label>Compounds per Year:</label>

          <input
            onKeyDown={handleKeyDown}
            className="input-fields"
            type="text"
            value={compound}
            onChange={(e) => setCompound(+e.target.value)}
          />
        </div>

        <div className="input-row"></div>

        <div className="result">
          <h2>Future Value:</h2>

          <h2>{compoundInterst[compoundInterst.length - 2].toFixed(2)}</h2>
        </div>
      </div>
      <Line
        data={data}
        className="my-chart"
        datasetIdKey="id"
        options={{
          scales: {
            y: {
              min: 0,
              max:
                Math.round(compoundInterst[compoundInterst.length - 1] / 1000) *
                1000,
            },
          },
        }}
      />
    </>
  );
};

export default Calculator;
