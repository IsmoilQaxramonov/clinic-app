interface ProfileProps {
    bgColor: string,
    title: string,
    logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
}

export const ProfileCart = ({bgColor, title, logo: Logo}: ProfileProps) => {
    return (
        <>
            <div className={`p-4 ${bgColor} rounded-2xl`}>
                <Logo/>
                <div className="mt-3">
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="text-white">12 Total Doctor</p>
                </div>
            </div>
        </>
    )
}