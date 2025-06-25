import cancelicon from "../assets/img/close-circle.svg";
import { useState } from "react";
import arrowx from "../assets/img/arrow-right.svg";

function ChooseAppointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDay = firstDayOfMonth.getDay() || 7;

  const daysInMonth = Array.from(
    { length: lastDayOfMonth.getDate() },
    (_, i) => i + 1
  );

  const prevDays = Array(startDay - 1).fill(null);

  const handlePrevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    setSelectedDate(prev);
  };

  const handleNextMonth = () => {
    const next = new Date(year, month + 1, 1);
    setSelectedDate(next);
  };
  return (
    <>
      <div className="px-[18px] py-[18px]  mt-[32px]">
        <div className="flex justify-between">
          <h3 className="h3-chose-appointmment ">Choose Appointment Date</h3>
          <img src={cancelicon} alt="" />
        </div>
        <div className=" py-[24px] flex justify-center">
          <div className="bg-gray-300 w-[100%] h-[0.5px]" />
        </div>
        {/*  */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="size-[48px] flex justify-center items-center border-[2px] rounded-[10px] border-[#F5F6F9]"
          >
            <img
              className=" transition-transform rotate-180"
              src={arrowx}
              alt=""
            />
          </button>
          <h2 className="h3-chose-appointmment text-black">
            {selectedDate.toLocaleDateString("en-EN", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button
            onClick={handleNextMonth}
            className="size-[48px] flex justify-center items-center border-[2px] rounded-[10px] border-[#F5F6F9]"
          >
            <img src={arrowx} alt="" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center mb-[16px]">
          {daysOfWeek.map((day, i) => (
            <p className="p-chose-appointment" key={i}>
              {day}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {prevDays.map((_, i) => (
            <div key={`empty-${i}`} className="text-gray-300"></div>
          ))}

          {daysInMonth.map((day) => {
            const isToday =
              day === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(new Date(year, month, day))}
                className={`button-chose-appointment text-[#555B6C] ${
                  isToday ? "text-red-700" : ""
                } ${
                  day === selectedDate.getDate() &&
                  month === selectedDate.getMonth() &&
                  year === selectedDate.getFullYear()
                    ? "rounded-[10px] bg-[#1D7885] text-white"
                    : ""
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ChooseAppointment;
