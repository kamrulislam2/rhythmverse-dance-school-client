import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Container from "../../components/Container/Container";

const TopInstructor = () => {
  const { data: topInstructor = [] } = useQuery({
    queryKey: ["topInstructor"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_api_URL}/classes?limit=${1}`
      );
      return res.data;
    },
  });
  console.log(topInstructor);

  return (
    <Container>
      <div className="py-16">
        <h2 className="text-4xl font-bold uppercase text-center mb-16">
          Top Instructor Of The Year
        </h2>

        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={topInstructor[0].instructor.image}
              className="max-w-[600px] rounded-lg shadow-2xl rounded-r-full rounded-b-full border-r-[20px] border-b-[20px] border-r-[#FDD8D6] border-b-[#FDD8D6]"
            />
            <div>
              <h1 className="text-5xl font-extrabold">
                {topInstructor[0].instructor.name}
              </h1>
              <p className="py-6 text-lg">{topInstructor[0].details}</p>
              <button className="bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer  px-5 py-3 text-xl font-medium transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopInstructor;
