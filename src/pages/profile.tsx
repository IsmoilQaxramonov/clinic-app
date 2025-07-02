import { Link } from "react-router-dom";
import UpComing from "../components/up-coming";
import { GoogleMapCart } from "../components/google-map";
// import { Specialist } from "../components/specialist";

export const Profile = () => {
  return (
    <>
      <div className="p-4">
        <p className="p-title">Check-Up Location</p>
        {/* <p className="p-title my-4">Most Search Specialist</p> */}
      </div>
        <Link to={"/location"}>
          <GoogleMapCart/>
        </Link>
      {/* <Specialist /> */}
      <UpComing />
    </>
  );
};
