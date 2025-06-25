import realstars from "../assets/img/realstar.svg";

interface ReviewProps {
  profilimg: string;
  profilname: string;
  profilonline: string;
  profilstars: string;
  profildescription: string;
}

function Review({
  profilimg,
  profilname,
  profilonline,
  profilstars,
  profildescription,
}: ReviewProps) {
  return (
    <div className="flex flex-col gap-[21px] ">
      <div className="pt-[1px] bg-[#F1F1F1] mb-[24px]"></div>
      <div className="flex gap-[12px] items-center">
        <img src={profilimg} alt="" />
        <div className="flex flex-col gap-1">
          <h1 className="h1-review">{profilname}</h1>
          <p className="h2-review">{profilonline}</p>
        </div>
        <div className="bg-[#FFB06317] rounded-[10px] p-[6px] flex">
          <img src={realstars} alt="" />
          <h3 className="h3-review">{profilstars}</h3>
        </div>
      </div>
      <p className="p-lorem">{profildescription}</p>
    </div>
  );
}
export default Review;
