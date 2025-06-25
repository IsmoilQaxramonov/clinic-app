import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import { Document } from "./pages/document"

import { Profile } from "./pages/profile";

import { Home } from "./pages/home";
import { Chat } from "./pages/chat";
import { Recommend } from "./components/recommend";
import ChooseAppointment from "./components/choose-appointment";
import { Appointment } from "./components/appointment-details";
import Reviews from "./components/reviews";
import UpComing from "./components/up-coming";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/document" element={<Document/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/recommend" element={<Recommend/>}/>
        <Route path="/choose-appointment" element={<ChooseAppointment/>}/>
        <Route path="/appointment-details" element={<Appointment/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/location" element={<Profile/>}/>
        <Route path="/specialist" element={<Profile/>}/>
        <Route path="/up-coming" element={<UpComing/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
