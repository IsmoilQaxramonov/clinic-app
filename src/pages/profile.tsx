import LocationImg from "../assets/img/location.png"
import { ProfileLogo1, ProfileLogo2, ProfileLogo3, ProfileLogo4 } from "../assets/svg";
import { ProfileCart } from "../components/profile-cart";

export const Profile = () => {
  return (
    <>
      <div className="px-4 py-4">
        <p className="p-title mb-4">Check-Up Location</p>
        <img className="w-full" src={LocationImg} alt="" />
        <p className="p-title my-4">Most Search Specialist</p>
        <div className="grid grid-cols-2 gap-3.5">
          <ProfileCart bgColor="bg-[#BC439A]" logo={ProfileLogo1} title="Pathologist"/>
          <ProfileCart bgColor="bg-[#B385FF]" logo={ProfileLogo2} title="Dermatologist"/>
          <ProfileCart bgColor="bg-[#AFCB81]" logo={ProfileLogo3} title="Ophthalmologist"/>
          <ProfileCart bgColor="bg-[#3586A9]" logo={ProfileLogo4} title="Pathologist"/>        
        </div>
      </div>
    </>
  );
};
