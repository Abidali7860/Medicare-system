import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Community from "./components/Community.jsx";
import YogaAsan from "./components/YogaAsan.jsx";
import YogaPlace from "./components/YogaPlace";
import BMICalculator from "./components/BMICalculator";
import MedicineReminder from "./components/MedicineReminder";
import MyProfile from "./components/MyProfile";
import FeedBack from "./components/FeedBack.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/community" element={<Community />} />
          <Route path="/YogaAsan" element={<YogaAsan />} />
          <Route path="/yoga/:name" element={<YogaPlace />} />
          <Route path="/BmiCalculator" element={<BMICalculator />} />
          <Route path="/MedicineReminder" element={<MedicineReminder />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/feedback" element={<FeedBack />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
