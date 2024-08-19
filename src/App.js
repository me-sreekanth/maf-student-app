import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home"; // Updated import
import BasicDetails1 from "./screens/BasicDetails1"; // Updated import
import BasicDetails2 from "./screens/BasicDetails2"; // Updated import
import OtpVerification from "./screens/OtpVerification"; // Updated import
import Login from "./screens/Login"; // Updated import
import SessionHistory from "./screens/SessionHistory";
import SessionDetails from "./screens/SessionDetails";
import ExploreTrainers from "./screens/ExploreTrainers";
import Trainers from "./screens/Trainers";
import TrainerDetails from "./screens/TrainerDetails";

function App() {
  // const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // if (action !== "POP") {
    window.scrollTo(0, 0);
    // }
  }, [pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the Home page.";
        break;
      case "/basic-details1":
        title = "Basic Details 1";
        metaDescription = "Enter your first set of basic details.";
        break;
      case "/basic-details2":
        title = "Basic Details 2";
        metaDescription = "Enter your second set of basic details.";
        break;
      case "/otp-verification":
        title = "OTP Verification";
        metaDescription = "Verify your OTP.";
        break;
      case "/login":
        title = "Login";
        metaDescription = "Login to your account.";
        break;
      default:
        title = "MAF";
        metaDescription = "Welcome to MAF.";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basic-details1" element={<BasicDetails1 />} />
      <Route path="/basic-details2" element={<BasicDetails2 />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/session-history" element={<SessionHistory />} />
      <Route path="/session-details" element={<SessionDetails />} />
      <Route path="/explore-trainers" element={<ExploreTrainers />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/trainer-details" element={<TrainerDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
