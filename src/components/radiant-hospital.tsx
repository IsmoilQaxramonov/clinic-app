import verify from "../assets/img/verify.svg";
import stars from "../assets/img/star.svg";
import briefcase from "../assets/img/briefcase.svg";
import { Button } from "./button";

function RadingHospital() {
  return (
    <>
      <div className="px-[20px] py-[12px] mt-[32px]">
        <div className=" flex gap-[12px] items-center mb-[20px]">
          <img src="public\Mask group.png" alt="" />
          <div className="flex flex-col gap-[8px]">
            <h4 className="h4-rading-hospital">Radiant Hospital</h4>
            <h5 className="h5-rading-hospital">Dr. Raze Invoker</h5>
            <p className="p-lorem">Internist Specialist </p>
          </div>
        </div>
        <div className="flex px-[16px] py-[16px] gap-[12px] justify-between mb-[20px] border-[#F1F1F1] border-[1px] rounded-[15px]">
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-[2px] px-[12px]">
              <img className="size-[20px]" src={verify} alt="" />
              <p className="h6-rading-hospital">Verify</p>
            </div>
            <p className="p-lorem text-center">Certified</p>
          </div>
          <div className="bg-[#F1F1F1] h-[36px] w-[1px]"></div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-[2px] px-[12px]">
              <img className="size-[20px]" src={briefcase} alt="" />
              <p className="h6-rading-hospital">5 Years</p>
            </div>
            <p className="p-lorem text-center">Experience</p>
          </div>
          <div className="bg-[#F1F1F1] h-[36px] w-[1px]"></div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-[2px] px-[12px]">
              <img className="size-[20px]" src={stars} alt="" />
              <p className="h6-rading-hospital">4.5</p>
            </div>
            <p className="p-lorem text-center">Rating</p>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="price-rading-hospital">
            Rp 240.000 <br />
            <span className="p-lorem">/hour</span>
          </h2>
          <button className="bg-[#1D788519] text-[#1D7885] rounded-[40px] w-[180px] border-[#1D7885] border-1 font-medium">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default RadingHospital;
