import NavIcon from "../assets/img/nav-logo.png"

export const NavLogo = () => {
    return (
        <div className="flex items-center gap-3">
            <img className="w-14" src={NavIcon} alt="" />
            <div className="flex flex-col items-center">
                <p className="font-bold text-2xl">Salaam</p>
                <p className="text-gray-800 text-sm">dental_clinic</p>
            </div>
        </div>
    )
}