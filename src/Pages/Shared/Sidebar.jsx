import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { TiArrowBackOutline } from "react-icons/ti";
import { FaBook, FaBookMedical, FaDollarSign } from "react-icons/fa";

const Sidebar = () => {
  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  return (
    <div className="drawer-side">
      <label className="drawer-overlay"></label>
      <ul className="menu w-40 lg:w-72 h-full bg-[#FDD8D6] text-base-content">
        {/* Sidebar content here */}
        <Container className="relative">
          {isAdmin ? (
            <>
              <h3 className="text-2xl font-bold mb-10">Admin Panel</h3>

              <NavLink
                to="/dashboard/mySelectedClass"
                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              >
                <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline">
                  Manage Classes
                </h3>
              </NavLink>
              <NavLink
                to="/dashboard/myEnrolledClass"
                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              >
                <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline">
                  Manage Users
                </h3>
              </NavLink>

              <Link
                to="/"
                className="text-lg font-semibold inline-flex gap-2 items-center px-3 py-2 bg-transparent border border-black transition transform hover:scale-105 absolute bottom-16"
              >
                <TiArrowBackOutline />
                Back
              </Link>
            </>
          ) : isInstructor ? (
            <>
              <h3 className="text-2xl font-bold mb-10">Instructor's Panel</h3>

              <NavLink
                to="/dashboard/mySelectedClass"
                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              >
                <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline">
                  Add a Class
                </h3>
              </NavLink>
              <NavLink
                to="/dashboard/myEnrolledClass"
                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              >
                <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline">
                  My Classes
                </h3>
              </NavLink>
              <Link
                to="/"
                className="text-lg font-semibold inline-flex gap-2 items-center px-3 py-2 bg-transparent border border-black transition transform hover:scale-105 absolute bottom-16"
              >
                <TiArrowBackOutline />
                Back
              </Link>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-10">Student's Panel</h3>

              <NavLink
                to="/dashboard/mySelectedClass"
                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              >
                <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline inline-flex items-center gap-2">
                  <FaBook /> Selected Classes
                </h3>
              </NavLink>
              <NavLink
                to="/dashboard/myEnrolledClass"
                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              >
                <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline inline-flex items-center gap-2">
                  <FaBookMedical /> Enrolled Classes
                </h3>
              </NavLink>
              <NavLink
                to="/dashboard/paymentHistory"
                className={({ isActive }) => (isActive ? "text-gray-500" : "")}
              >
                <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline inline-flex items-center gap-2">
                  <FaDollarSign /> Payment History
                </h3>
              </NavLink>

              <Link
                to="/"
                className="text-lg font-semibold inline-flex gap-2 items-center px-3 py-2 bg-transparent border border-black transition transform hover:scale-105 absolute left-12 bottom-16"
              >
                <TiArrowBackOutline />
                Back
              </Link>
            </>
          )}
        </Container>
      </ul>
    </div>
  );
};

export default Sidebar;
