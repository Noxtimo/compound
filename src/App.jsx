import Calculator from "./components/Calculator";
import Explanation from "./components/Explanation";
import snowball from "./images/snowball.png";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA60gK40_iYLlziZso8i2n4QJLQfZgFEJ4",
  authDomain: "compound-a0de2.firebaseapp.com",
  projectId: "compound-a0de2",
  storageBucket: "compound-a0de2.appspot.com",
  messagingSenderId: "788396911868",
  appId: "1:788396911868:web:c441da14cf52dd4dba7b79",
  measurementId: "G-0MW9W8TVZ6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <div className="main-body">
      <div className="primary-body">
        <Explanation />
        <Calculator />
        <div className="readings">
          <div>
            <div>
              {" "}
              <h1>What is compound interest</h1>
              <p>
                {" "}
                The concept of compound interest, or 'interest on interest', is
                that accumulated interest is added back onto your principal sum,
                with future interest being calculated on both the original
                principal and the already-accrued interest.{" "}
              </p>
              <p>
                This compounding effect causes investments to grow faster over
                time, much like a snowball gaining size as it rolls downhill
                When you combine the power of interest compounding with regular,
                consistent investing over a sustained period of time, you end up
                with a highly effective growth strategy for accelerating the
                long-term value of your savings or investments.
              </p>
            </div>

            <img src={snowball} className="first-image" />
          </div>
          <div>
            <h1>How compound interest is calculated</h1>
            <p>
              Compound interest is calculated using the compound interest
              formula:{" "}
              <p style={{ color: "green", width: "20%", fontWeight: "bold" }}>
                {" "}
                A = P(1+r/n)^nt.
              </p>{" "}
              For annual compounding, multiply the initial balance by one plus
              your annual interest rate raised to the power of the number of
              time periods (years). This gives a combined figure for principal
              and compound interest.
            </p>
          </div>
          <div className="formula">
            <p>A = P(1+r/n)^nt</p>
            <ul>
              <li>A = the future value of the investment</li>
              <li>P = the principal balance</li>
              <li>r = the annual interest rate (decimal)</li>
              <li>n = number of times interest is compounded per year</li>
              <li>t = the time in years</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="secondary-body"></div>
    </div>
  );
};

export default App;
