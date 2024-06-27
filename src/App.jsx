import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
