import { Link } from "react-router-dom"
import Reviews from "../components/reviews"

export const Chat = () => {
    return (
        <>
            <Link to={"/chat"}>
                <Reviews/>
            </Link>
        </>
    )
}