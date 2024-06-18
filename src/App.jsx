import Calculator from "./components/Calculator";
import Explanation from "./components/Explanation";

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
      </div>
      <div className="secondary-body"></div>
    </div>
  );
};

export default App;
