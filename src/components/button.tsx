interface ButtonProps {
    title: string,
    bgColor: string,
    textColor: string,
    borderColor: string,
}

export const Button = ({title, bgColor, textColor, borderColor}: ButtonProps) => {
    return (
        <button className={`px-5 p-3.5 whitespace-nowrap rounded-full border  ${bgColor} ${textColor} ${borderColor}`}>{title}</button>
    )
}