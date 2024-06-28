import Calculator from "../components/Calculator";
import Explanation from "../components/Explanation";
import snowball from "../images/snowball.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import einstain from "../images/einstain.jpg";
import Einstain from "../components/Einstain";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-body">
        <div className="primary-body">
          <Calculator />
        </div>
        <div className="secondary-body">
          <div className="readings">
            <Explanation />
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
              <img src={snowball} className="first-image" />
            </div>
            <div>
              {" "}
              <h1>Where to invest for compound interest</h1>
              <p>
                The question about where to invest to earn the most compound
                interest has become a feature of our email inbox, with people
                thinking about mutual funds, ETFs, MMRs and high-yield savings
                accounts and wanting to know what's best. We at The Calculator
                Site work to develop quality tools to assist you with your
                financial calculations. We can't, however, advise you about
                where to invest your money to achieve the best returns for you.
                Instead, we advise you to speak to a qualified financial advisor
                for advice based upon your own circumstances.
              </p>
            </div>
            <div>
              <h1>How compound interest is calculated</h1>
              <p>
                Compound interest is calculated using the compound interest
                formula: A = P(1+r/n)^nt. For annual compounding, multiply the
                initial balance by one plus your annual interest rate raised to
                the power of the number of time periods (years). This gives a
                combined figure for principal and compound interest.
              </p>
              <label className="formula">
                <p>A = P(1+r/n)^nt</p>
                <ul>
                  <li>A = the future value of the investment</li>
                  <li>P = the principal balance</li>
                  <li>r = the annual interest rate (decimal)</li>
                  <li>n = number of times interest is compounded per year</li>
                  <li>t = the time in years</li>
                </ul>
              </label>
            </div>
            <div>
              <h1>Quotes by famous people</h1>
              <div className="quotes">
                <Einstain />

                <Einstain />

                <Einstain />
              </div>
            </div>
            <div>
              {" "}
              <h1>Import links to must reads</h1>
              <a href="https://investor.vanguard.com/investor-resources-education/news/lump-sum-investing-versus-cost-averaging-which-is-better">
                Lump-sum investing versus cost averaging
              </a>
              <a href="https://investor.vanguard.com/investor-resources-education/news/lump-sum-investing-versus-cost-averaging-which-is-better">
                Lump-sum investing versus cost averaging
              </a>
              <a href="https://investor.vanguard.com/investor-resources-education/news/lump-sum-investing-versus-cost-averaging-which-is-better">
                Lump-sum investing versus cost averaging
              </a>
              <a href="https://investor.vanguard.com/investor-resources-education/news/lump-sum-investing-versus-cost-averaging-which-is-better">
                Lump-sum investing versus cost averaging
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
