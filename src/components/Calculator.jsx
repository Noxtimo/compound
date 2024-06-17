import React, { useState } from "react";

const Calculator = () => {
  const [principal, setPrincipal] = useState(5000);

  const [rate, setRate] = useState(5);

  const [time, setTime] = useState(5);

  const [compound, setCompound] = useState(1);

  const [result, setResult] = useState(0);

  const [extra, setExtra] = useState(0);

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
      <div>
        <h2>Compound Interest Calculator</h2>

        <div>
          <label>Principal:</label>

          <input
            type="text"
            value={principal}
            onChange={(e) => setPrincipal(+e.target.value)}
          />
        </div>
        <div>
          <label>Additonal contributions each year</label>

          <input
            type="text"
            value={extra}
            onChange={(e) => setExtra(+e.target.value)}
          />
        </div>

        <div>
          <label>Annual Interest Rate (%):</label>

          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </div>

        <div>
          <label>Time (years):</label>

          <input
            type="text"
            value={time}
            onChange={(e) => setTime(+e.target.value)}
          />
        </div>

        <div>
          <label>Compounds per Year:</label>

          <input
            type="text"
            value={compound}
            onChange={(e) => setCompound(+e.target.value)}
          />
        </div>

        <button onClick={calculateInterest}>Calculate</button>

        <div>
          <h3>Compound Interest:</h3>

          <p>{result}</p>
        </div>
      </div>
    </>
  );
};

export default Calculator;
