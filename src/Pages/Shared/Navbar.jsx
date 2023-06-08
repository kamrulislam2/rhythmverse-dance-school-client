import React, { useContext, useState } from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import avatarImg from "../../assets/avatar-login.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      <div className="mt-1 p-2 lg:hidden">
        {user ? (
          <div className="flex flex-row-reverse gap-3 items-center mr-6">
            <img
              className="w-10 h-10 p-1 rounded-full mr-3 bg-[#DDDCDC]"
              src={user?.photoURL}
              alt="avatar photo"
            />

            <Link
              onClick={handleLogout}
              className="bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer px-3 py-2 text-base font-medium"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex flex-row-reverse gap-3 items-center mr-10">
            <img
              className="w-10 h-10 p-1 rounded-full mr-3 bg-[#DDDCDC]"
              src={avatarImg}
              alt="avatar photo"
            />
            <Link
              to="/login"
              className="bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer px-3 py-2 text-base font-medium"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </>
  );

  return (
    <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GrMenu size={40} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl uppercase font-medium"
            >
              {navMenu}
            </ul>
          </div>
          <Link
            to="/"
            className="cursor-pointer font-extrabold text-2xl lg:text-3xl flex flex-col"
          >
            RhythmVerse
            <span className="text-lg lg:text-xl text-[#DDDCDC] font-semibold tracking-[0.22em] lg:tracking-[0.34em]">
              Dance School
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl uppercase font-medium">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user ? (
            <>
              <img
                className="w-14 h-14 p-1 rounded-full mr-3 bg-[#DDDCDC]"
                src={user?.photoURL}
                alt="avatar photo"
              />

              <Link
                onClick={handleLogout}
                className="bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer transition-transform px-5 py-3 text-xl font-medium"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <img
                className="w-14 h-14 p-1 rounded-full mr-3 bg-[#DDDCDC]"
                src={avatarImg}
                alt="avatar photo"
              />
              <Link
                to="/login"
                className="bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer transition-transform px-5 py-3 text-xl font-medium"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
