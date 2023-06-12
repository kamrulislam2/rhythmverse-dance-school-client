import React, { useContext } from "react";
import Banner from "./Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import TopInstructor from "./TopInstructor";
import RecentNews from "./RecentNews";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { dark, user, loading } = useContext(AuthContext);
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_api_URL}/classes?limit=${6}`
      );
      return res.data;
    },
  });

  console.log(classes);

  return (
    <div data-theme={dark ? "dark" : "light"} className="pt-24">
      <Helmet>
        <title>RhythmVerse | Home</title>
      </Helmet>

      <Banner></Banner>
      <PopularClasses classes={classes} />
      <PopularInstructors classes={classes} />
      <TopInstructor classes={classes} />

      <RecentNews />
    </div>
  );
};

export default Home;
