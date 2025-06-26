import { Link } from "react-router-dom";
import Reviews from "../components/reviews";
import { Question } from "../components/question";

export const Chat = () => {
  return (
    <>
      <Link to={"/chat"}>
        <Question />
        <Reviews />
      </Link>
    </>
  );
};
