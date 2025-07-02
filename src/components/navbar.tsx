import { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLogo } from "./nav-logo";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const links = [
    { to: "/recommend", label: "Recommended Doctors" },
    { to: "/about", label: "Information about our doctor" },
    { to: "/choose-appointment", label: "Choose Appointment Date" },
    { to: "/appointment-details", label: "Details Appointment" },
    { to: "/reviews", label: "Reviews and Ratings" },
    { to: "/location", label: "Check-Up Location" },
    // { to: "/specialist", label: "Most Search Specialist" },
    { to: "/up-coming", label: "Upcoming Appointments" },
  ];

  return (
    <>
      <nav className="px-8 py-5 flex items-center justify-between border-b border-gray-200">
        <NavLogo />

        <div className="flex items-center gap-3">
          <Hamburger
            size={24}
            color="#292D32"
            toggled={isOpen}
            toggle={setOpen}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.02 2.90997C8.70997 2.90997 6.01997 5.59997 6.01997 8.90997V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.60997 15.32 2.90997 12.02 2.90997Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 text-white z-50 flex flex-col p-10">
          <div className="flex justify-end">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          <ul className="mt-10 flex flex-col text-xl font-semibold text-center">
            {links.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
