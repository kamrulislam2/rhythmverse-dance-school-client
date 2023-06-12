import React, { useContext } from "react";
import Banner from "./Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import TopInstructor from "./TopInstructor";
import RecentNews from "./RecentNews";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const { dark } = useContext(AuthContext);
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_api_URL}/classes?limit=${6}`
      );
      return res.data;
    },
  });

  return (
    <div data-theme={dark ? "dark" : "light"} className="pt-24">
      <Banner></Banner>
      <PopularClasses classes={classes} />
      <PopularInstructors classes={classes} />
      <TopInstructor classes={classes} />

      <RecentNews />
    </div>
  );
};

export default Home;
