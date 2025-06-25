import { Link } from "react-router-dom";
import { Appointment } from "../components/appointment-details";

export const Document = () => {
  return (
    <>
      <Link to={"/document"}>
        <Appointment />
      </Link>
    </>
  );
};
