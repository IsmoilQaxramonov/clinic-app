import { Calendar, Clock, DetailsMen, Galichka, Location } from "../assets/svg";

export const Appointment = () => {
  return (
    <>
      <div className="px-10 py-5">
        <p className="p-title">Details Appointment</p>
        <div className="flex flex-col gap-4 my-4 py-5 px-6 border border-gray-200 rounded-3xl">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <div>
              <p className="p-title">09 Jan 2025</p>
              <p className="p-lorem">Appointment Date</p>
            </div>
            <Calendar />
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <div>
              <p className="p-title">13:00 PM</p>
              <p className="p-lorem">Appointment Time</p>
            </div>
            <Clock />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="p-title">Radiant HospitalM</p>
              <p className="p-lorem">Appointment Location</p>
            </div>
            <Location />
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#F8FBFB] p-4 rounded-3xl">
          <div className="flex items-center gap-3">
            <DetailsMen />
            <div>
              <p className="p-title">Dr. Raze Invoker</p>
              <p className="p-lorem">Internist Specialist </p>
            </div>
          </div>
          <Galichka />
        </div>
      </div>
    </>
  );
};
