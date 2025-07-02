import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  const getColor = (path: string): string => {
    return location.pathname === path ? "#1D7885" : "#292D32";
  };

  return ( 
    <footer className="flex justify-between items-center px-8 py-5 fixed w-full h-max bottom-0 bg-white border-t border-gray-200">
      <Link className="flex flex-col items-center" to={"/"}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
            fill={getColor("/")}
          />
        </svg>
        <p className={`text-[12px] text-[${getColor("/")}]`}>Home</p>
      </Link>

      <Link className="flex flex-col items-center" to={"/document"}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path
            d="M8.5 12.2H15.5"
            stroke={getColor("/document")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 16.2H12.88"
            stroke={getColor("/document")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 6H14.5C16.5 6 16.5 5 16.5 4C16.5 2 15.5 2 14.5 2H10.5C9.5 2 8.5 2 8.5 4C8.5 6 9.5 6 10.5 6Z"
            stroke={getColor("/document")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 4.02002C19.83 4.20002 21.5 5.43002 21.5 10V16C21.5 20 20.5 22 15.5 22H9.5C4.5 22 3.5 20 3.5 16V10C3.5 5.44002 5.17 4.20002 8.5 4.02002"
            stroke={getColor("/document")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={`text-[12px] text-[${getColor("/document")}]`}>
          Document
        </p>
      </Link>

      <Link className="flex flex-col items-center" to={"/chat"}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path
            d="M18.73 10.79V14.79C18.73 15.05 18.72 15.3 18.69 15.54C18.46 18.24 16.87 19.58 13.94 19.58H13.54C13.29 19.58 13.05 19.7 12.9 19.9L11.7 21.5C11.17 22.21 10.31 22.21 9.78 21.5L8.57999 19.9C8.44999 19.73 8.16 19.58 7.94 19.58H7.54001C4.35001 19.58 2.75 18.79 2.75 14.79V10.79C2.75 7.86001 4.10001 6.27001 6.79001 6.04001C7.03001 6.01001 7.28001 6 7.54001 6H13.94C17.13 6 18.73 7.60001 18.73 10.79Z"
            stroke={getColor("/chat")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.73 6.79001V10.79C22.73 13.73 21.38 15.31 18.69 15.54C18.72 15.3 18.73 15.05 18.73 14.79V10.79C18.73 7.60001 17.13 6 13.94 6H7.54004C7.28004 6 7.03004 6.01001 6.79004 6.04001C7.02004 3.35001 8.61004 2 11.54 2H17.94C21.13 2 22.73 3.60001 22.73 6.79001Z"
            stroke={getColor("/chat")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.2455 13.25H14.2545"
            stroke={getColor("/chat")}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.7455 13.25H10.7545"
            stroke={getColor("/chat")}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.2455 13.25H7.2545"
            stroke={getColor("/chat")}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={`text-[12px] text-[${getColor("/chat")}]`}>Chat</p>
      </Link>

      <Link className="flex flex-col items-center" to={"/profile"}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
            stroke={getColor("/profile")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
            stroke={getColor("/profile")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke={getColor("/profile")}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={`text-[12px] text-[${getColor("/profile")}]`}>Profile</p>
      </Link>
    </footer>
  );
};
