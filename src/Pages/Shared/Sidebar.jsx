import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label className="drawer-overlay"></label>
      <ul className="menu w-40 lg:w-72 h-full bg-[#FDD8D6] text-base-content">
        {/* Sidebar content here */}
        <Container>
          <NavLink
            to="/dashboard/mySelectedClass"
            className={({ isActive }) => (isActive ? "text-gray-500" : "")}
          >
            <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline">
              My Selected Classes
            </h3>
          </NavLink>
          <NavLink
            to="/dashboard/myEnrolledClass"
            className={({ isActive }) => (isActive ? "text-gray-500" : "")}
          >
            <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline">
              My Enrolled Classes
            </h3>
          </NavLink>
          <NavLink
            to="/dashboard/paymentHistory"
            className={({ isActive }) => (isActive ? "text-gray-500" : "")}
          >
            <h3 className="text-xl font-semibold hover:scale-105 transition transform mb-4 hover:underline">
              Payment History
            </h3>
          </NavLink>
        </Container>
      </ul>
    </div>
  );
};

export default Sidebar;
