import { Link } from "react-router-dom";
import { ProfileCart } from "./profile-cart";
import { ProfileLogo1, ProfileLogo2, ProfileLogo3, ProfileLogo4 } from "../assets/svg";

export const Specialist = () => {
  return (
    <Link to={"/specialist"} className="grid grid-cols-2 gap-3.5 m-4">
      <ProfileCart
        bgColor="bg-[#BC439A]"
        logo={ProfileLogo1}
        title="Pathologist"
      />
      <ProfileCart
        bgColor="bg-[#B385FF]"
        logo={ProfileLogo2}
        title="Dermatologist"
      />
      <ProfileCart
        bgColor="bg-[#AFCB81]"
        logo={ProfileLogo3}
        title="Ophthalmologist"
      />
      <ProfileCart
        bgColor="bg-[#3586A9]"
        logo={ProfileLogo4}
        title="Pathologist"
      />
    </Link>
  );
};
