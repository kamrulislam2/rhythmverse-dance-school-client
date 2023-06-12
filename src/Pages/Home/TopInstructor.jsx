import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const TopInstructor = ({ classes }) => {
  if (!classes || !classes[0] || !classes[0].instructor) {
    return null;
  }
  useEffect(() => {
    AOS.init();
  }, []);

  const { details, students } = classes[0];
  const { image, name } = classes[0]?.instructor;
  return (
    <Container>
      {classes[0] && classes[0].instructor && (
        <div data-aos="zoom-in-up" data-aos-duration="3000" className="py-16">
          <h2 className="text-4xl font-bold uppercase text-center mb-16">
            Top Instructor Of The Year
          </h2>

          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={image}
                className="w-full mb-6 lg:mb-0 lg:max-w-[600px] rounded-lg shadow-2xl rounded-r-full rounded-b-full border-r-[20px] border-b-[20px] border-r-[#FDD8D6] border-b-[#FDD8D6]"
              />
              <div>
                <h1 className="text-5xl font-extrabold">{name}</h1>
                <p className="py-6 text-lg">{details}</p>
                <p className="py-6 text-lg">
                  <span className="font-bold">Total Students:</span> {students}
                </p>
                <Link to="/instructors">
                  <button className="bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer  px-5 py-3 text-xl font-medium transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default TopInstructor;
