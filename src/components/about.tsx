import { Link } from "react-router-dom";
import AboutMen from "../assets/img/header-men.png";

export const About = () => {
  return (
    <Link
      to="/about"
      className="m-4 p-4"
    >
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto bg-blue-100 flex items-center justify-center">
        <img
          src={AboutMen}
          alt="Doctor"
          className="w-auto h-full object-contain"
        />
      </div>

      <div className="mt-4 text-center space-y-1">
        <p className="text-xl font-bold text-gray-800">Jasur Kholmatov</p>
        <p className="text-gray-600 text-sm">
          2018 yildan beri Saalam dental da ishliman <br /> stomatolog-ortoped
        </p>
        <p className="text-gray-600 text-sm">7 yillik tajriba</p>
        <p className="text-blue-700 font-semibold text-sm">
          Konsultatsiya: 50.000 so'm
        </p>
      </div>
    </Link>
  );
};
