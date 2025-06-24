import stars from "../assets/img/star.svg";
function Reviews() {
  return (
    <div className="flex flex-col justify-center px-[20px] py-[20px]">
      <div className="flex justify-between">
        <h2 className="h2-reviews">Reviews and Ratings</h2>
        <p className="p-reviews">View all</p>
      </div>
      <div className="py-[24px] px-[24px] flex flex-col justify-center border-1 border-[#F1F1F1] gap-[24px]">
        <div className="flex gap-[12px]">
          <h3 className="h3-reviews">4.5/5.0</h3>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[2px]">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
