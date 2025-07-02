import { DetailsMen } from "../assets/svg";

function UpComing() {
  return (
    <div className="p-4 bg-[#1D7885] rounded-[20px] mt-5 mx-4 mb-24">
      <div className="flex justify-between mb-[16]">
        <h2 className="h2-uncoming ">Upcoming Appointments</h2>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.73389 3.90381C8.82862 3.80907 8.99169 3.80907 9.08643 3.90381L15.6069 10.4233C16.0239 10.8404 16.2603 11.4042 16.2603 12.0005C16.2601 12.6008 16.0305 13.1602 15.6099 13.5728L15.6069 13.5767L9.09424 20.0874C9.02766 20.1479 8.95853 20.1704 8.90967 20.1704C8.84528 20.1703 8.78506 20.1474 8.73389 20.0962C8.63917 20.0014 8.63915 19.8384 8.73389 19.7437L15.2534 13.2231C15.9286 12.5479 15.9286 11.4521 15.2534 10.7769L8.73389 4.25635C8.63915 4.16161 8.63915 3.99855 8.73389 3.90381Z"
            fill="#292D32"
            stroke="white"
          />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-[16px] mt-[16px]">
        <div className="p-[16px] flex flex-col bg-[#FFFFFF17] rounded-[15px] ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 9.08997H20.5"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 13.7H12.0045"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 13.7H8.30329"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 16.7H8.30329"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3 className="h3-uncoming mt-[12px]">Mon, 11 June 2024</h3>
          <p className="p-uncoming mb-[4px]">Appointments Date</p>
        </div>
        <div className="p-[16px] flex flex-col bg-[#FFFFFF17] rounded-[15px] ">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2099 15.18L13.1099 13.33C12.5699 13.01 12.1299 12.24 12.1299 11.61V7.51001"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.5 6C3.25 7.67 2.5 9.75 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2C11.07 2 9.7 2.3 8.47 2.85"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3 className="h3-uncoming mt-[12px]">08:00 - 12:00</h3>
          <p className="p-uncoming mb-[4px]">Appointments Time</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-white p-[12px] rounded-[15px] mt-[28px]">
        <DetailsMen />
        <div>
          <p className="p-title text-black">Dr. Strange Walker</p>
          <p className="p-lorem">Internist Specialist Doctor</p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V12"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9965 11H16.0054"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9955 11H12.0045"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99451 11H8.00349"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
export default UpComing;
