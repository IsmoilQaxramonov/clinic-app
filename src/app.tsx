import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Appointment } from "./pages/appointment-details";
import Header from "./components/header";
import ChoseAppointment from "./components/choose-appointment";
import RadingHospital from "./components/radiant-hospital";
import Reviews from "./components/reviews";
import Uncoming from "./components/upcoming";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <ChoseAppointment />
      <RadingHospital />
      <Appointment />
      <Reviews />
      <Uncoming />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
