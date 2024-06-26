import Calculator from "../components/Calculator";
import snowball from "../images/snowball.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";

const About = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-body-not-home">
        <div className="readings">
          <div>
            <h1>About This Website</h1>
            <p>
              Welcome to my website dedicated to compound interest—a powerful
              concept in finance that can significantly impact your financial
              growth over time. At [Your Website Name], my mission is to
              demystify compound interest, empower you with knowledge, and
              provide practical tools to enhance your financial decision-making.
            </p>
            <p>
              My intention is to serve as a comprehensive resource for
              individuals at all stages of their financial journey. Whether
              you're just starting to explore savings options, planning for
              retirement, or looking to optimize your investment strategies, we
              aim to provide clear explanations and actionable insights.
            </p>
            <h2>What We Offer:</h2>
            <ul>
              <li>
                <strong>Educational Content:</strong> Dive into articles and
                guides that explain the fundamentals of compound interest, its
                benefits, and how it compares to other financial concepts like
                simple interest.
              </li>
              <li>
                <strong>Interactive Tools:</strong> Use my calculators to
                visualize how compound interest can grow your savings or
                investments over time. Experiment with different scenarios to
                see the impact of varying interest rates, compounding
                frequencies, and investment durations.
              </li>
              <li>
                <strong>Practical Tips:</strong> Discover strategies to maximize
                the benefits of compound interest in real-world situations.
                Learn about effective savings habits, investment
                diversification, and long-term financial planning.
              </li>
              <li>
                <strong>Community Support:</strong> Join discussions and connect
                with others who share your interest in financial literacy and
                wealth-building strategies. Share your experiences, ask
                questions, and learn from a supportive community.
              </li>
            </ul>
            <p>
              My goal is to equip you with the knowledge and tools needed to
              harness the power of compound interest effectively. By
              understanding how compounding works and incorporating it into your
              financial strategy, you can achieve your financial goals more
              efficiently and build long-term wealth.
            </p>
            <p>
              Thank you for visiting my website. We're dedicated to providing
              valuable resources and insights that empower you to make informed
              financial decisions and secure your financial future. Explore our
              site, engage with my content, and embark on a journey towards
              financial empowerment.
            </p>
          </div>
          <div className="social-media-about">
            <h1>Be sure to check out my social media.</h1>
            <SocialIcons />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
