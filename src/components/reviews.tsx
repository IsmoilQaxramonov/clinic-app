import RealStars from "../assets/img/realstar.svg";
import shadowStars from "../assets/img/shadowstar.svg";
import Review from "./review";
import profilimg from "../assets/img/Image Grup.png";
import profilimg2 from "../assets/img/Image Grup (1).png";
function Reviews() {
  return (
    <div className="flex flex-col justify-center px-[20px] py-[20px] ">
      <div className="flex justify-between mb-[16px]">
        <h2 className="h2-reviews">Reviews and Ratings</h2>
        <p className="p-reviews">View all</p>
      </div>
      <div className="py-[24px] px-[24px] flex flex-col justify-center border-1 border-[#F1F1F1] rounded-[20px] gap-[24px]">
        <div className="flex gap-[12px] justify-between">
          <h3 className="h3-reviews">4.5/5.0</h3>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[2px]">
              <img className="size-[20px]" src={RealStars} alt="" />
              <img className="size-[20px]" src={RealStars} alt="" />
              <img className="size-[20px]" src={RealStars} alt="" />
              <img className="size-[20px]" src={RealStars} alt="" />
              <img className="size-[20px]" src={shadowStars} alt="" />
            </div>
            <h4 className="h4-reviews">1250+ Reviews</h4>
          </div>
        </div>
        <Review
          profilimg={profilimg}
          profilname="Nabila Reyna"
          profilonline="30 min ago"
          profilstars="4.5"
          profildescription="Excellent service! Dr. Raze Invoker was attentive and thorough. The clinic was clean, and the staff were friendly. Highly recommend for in-person care!"
        />
        <Review
          profilimg={profilimg2}
          profilname="Ferry Ichsan A"
          profilonline="A week ago"
          profilstars="5.0"
          profildescription="Quick and easy appointment! Dr. Raze Invoker was professional, and the staff made me feel comfortable. Highly recommend!"
        />
      </div>
    </div>
  );
}
export default Reviews;
