import React from "react";
import Banner from "./Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PopularClasses from "./PopularClasses";

const Home = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["popular-classes"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_api_URL}/popular-classes`
      );
      return res.data;
    },
  });

  return (
    <div className="pt-24">
      <Banner></Banner>
      <PopularClasses classes={classes}></PopularClasses>
    </div>
  );
};

export default Home;
