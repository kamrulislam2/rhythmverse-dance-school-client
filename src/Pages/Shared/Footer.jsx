import React from "react";
import logo from "../../assets/site-logo.ico";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex flex-col lg:flex-row justify-between  p-10 lg:p-12 bg-black text-neutral-content">
      <div>
        <img className="w-24 h-24 -ml-5 -mt-2" src={logo} alt="" />
        <Link
          to="/"
          className="cursor-pointer -mt-4 font-extrabold text-xl lg:text-2xl flex flex-col"
        >
          RhythmVerse
          <span className="text-sm lg:text-lg text-[#DDDCDC] font-semibold tracking-[0.29em] lg:tracking-[0.23em]">
            Dance School
          </span>
        </Link>
        <small className="w-1/2 lg:w-full text-[#DDDCDC]">
          Copyright © 2023 - All right reserved
        </small>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Login</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Classes</a>
        <a className="link link-hover">Instructors</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Classes</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Dashboard</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>

      <div>
        <span className="footer-title">Contact Us</span>
        <a className="link link-hover">Phone: +880 1839 00 6867</a>
        <a className="link link-hover">Email: contact@babystoyout.com</a>
        <a className="link link-hover">Address: 4312, Chittagong Bangladesh</a>
      </div>
    </footer>
  );
};

export default Footer;
