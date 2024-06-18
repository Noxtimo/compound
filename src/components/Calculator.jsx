import React, { useState } from "react";

const Calculator = () => {
  const [principal, setPrincipal] = useState(5000);

  const [rate, setRate] = useState(5);

  const [time, setTime] = useState(5);

  const [compound, setCompound] = useState(1);

  const [result, setResult] = useState(0);

  const [extra, setExtra] = useState(500);

  const calculateInterest = () => {
    const amount =
      principal * Math.pow(1 + rate / 100 / compound, compound * time);

    let annualContributionAmount = 0;
    for (let i = 0; i < time; i++) {
      annualContributionAmount +=
        extra * Math.pow(1 + rate / 100 / compound, compound * (time - i));
    }

    const totalAmount = amount + annualContributionAmount;

    setResult(totalAmount.toFixed(2));
  };

  return (
    <>
      <h2 className="result">Compound Interest Calculator</h2>
      <div>
        <div className="input-row">
          <label>Principal:</label>

          <input
            className="input-fields"
            type="text"
            value={principal}
            onChange={(e) => setPrincipal(+e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Yearly contribution</label>

          <input
            className="input-fields"
            type="text"
            value={extra}
            onChange={(e) => setExtra(+e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Annual Interest Rate (%):</label>

          <input
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
            type="text"
            value={time}
            onChange={(e) => setTime(+e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Compounds per Year:</label>

          <input
            className="input-fields"
            type="text"
            value={compound}
            onChange={(e) => setCompound(+e.target.value)}
          />
        </div>

        <div className="input-row">
          <button onClick={calculateInterest}>Calculate</button>
        </div>

        <div className="result">
          <h2>Future Value:</h2>

          <h2>{result}</h2>
        </div>
      </div>
    </>
  );
};

export default Calculator;
