import { Imgheader5, Imgheader6, Imgheader7 } from "../assets/svg";
import bgdekor from "../assets/img/Vector.png";
export function Header() {
  return (
    <>
      <div className="px-[10px] py-[10px] mt-[32px]">
        <div className="pl-[24px] pt-[24px] bg-[#1D7885] rounded-[24px] min-h-[183px] w-[100%] flex justify-between relative">
          <div className="w-[200px] h-[135px]">
            <p className="p-header">Trusted doctor on your schedule 😉 </p>
            <h2 className="h2-header">Consult A Doctor — Book Today!</h2>
            <div className="flex gap-[18px] mt-[16px]">
              <div className="flex -space-x-3 ">
                <Imgheader5 />
                <Imgheader6 />
                <Imgheader7 />
              </div>
              <div className="flex flex-col">
                <h3 className="h3-header">30.000+</h3>
                <p className="p-header">Happy Patients</p>
              </div>
            </div>
          </div>
          <div>
            <img src={bgdekor} className="w-[130px] mt-[20px]" alt="" />
            <img
              className="absolute w-[150px] bottom-[0px] right-[0px]"
              src="public\076A9939.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
