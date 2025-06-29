import { Link } from "react-router-dom";
import LocationImg from "../assets/img/location.png";
import UpComing from "../components/up-coming";
import { Specialist } from "../components/specialist";

export const Profile = () => {
  return (
    <>
      <div className="px-4 py-4">
        <p className="p-title mb-4">Check-Up Location</p>
        <Link to={"/location"}>
          <img className="w-full" src={LocationImg} alt="" />
        </Link>
        <p className="p-title my-4">Most Search Specialist</p>
      </div>
      <Specialist />
      <UpComing />
    </>
  );
};
