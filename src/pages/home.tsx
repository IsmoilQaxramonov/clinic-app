import { Link } from "react-router-dom"
import Header from "../components/header"
// import { Recommend } from "../components/recommend"
import ChooseAppointment from "../components/choose-appointment"
import RadiantHospital from "../components/radiant-hospital"

export const Home = () => {
    return (
        <>
            <Link to={"/"}>
                <Header/>
                {/* <Recommend/> */}
                <ChooseAppointment/>
                <RadiantHospital/>
            </Link>
        </>
    )
}