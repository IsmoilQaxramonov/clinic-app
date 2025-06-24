import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Recommend } from "./pages/recommend";
import { Appointment } from "./pages/appointment-details";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Recommend/> */}
      {/* <Appointment/> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
