import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Recommend } from "./pages/recommend";
import { Appointment } from "./pages/appointment-details";
import Header from "./components/header";
import Choseappointment from "./components/chose-appointment";
import Radinghospital from "./components/rading-hospital";
import Reviews from "./components/reviews";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Recommend />
      <Choseappointment />
      <Radinghospital />
      <Appointment />
      <Reviews />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
