import { Button } from "../components/button";
import { RecommendCart } from "../components/recommend-cart";

export const Recommend = () => {
  return (
    <>
      <div className="py-4">
        <p className="p-title pl-4">Recommended Doctors</p>
        <div
          className="overflow-x-scroll flex gap-2 my-5 pl-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Button
            textColor="text-[#1D7885]"
            bgColor="bg-[#EBF3F4]"
            title="Lastest"
            borderColor="border-[#1D7885]"
          />
          <Button
            textColor="text-[#555B6C]"
            bgColor="bg-[#fff]"
            title="Pediatric Specialist"
            borderColor="border-gray-500"
          />
          <Button
            textColor="text-[#555B6C]"
            bgColor="bg-[#fff]"
            title=" Oftalmologi Specialist"
            borderColor="border-gray-500"
          />
        </div>
        <div
          className="flex gap-4 overflow-x-scroll whitespace-nowrap pl-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <RecommendCart />
          <RecommendCart />
        </div>
      </div>
    </>
  );
};
