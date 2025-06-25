import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import { Profile } from "./pages/profile";

import { Appointment } from "./pages/appointment-details";
import { Home } from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Appointment/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
