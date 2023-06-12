import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassesCard from "../../components/ClassesCard/ClassesCard";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_api_URL}/classes`);
      return res.data;
    },
  });

  return (
    <div className="pt-24">
      <Container>
        <Helmet>
          <title>RhythmVerse | Classes</title>
        </Helmet>
        <div className="py-16">
          <h2 className="text-4xl font-bold uppercase text-center mb-16">
            All Classes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((singleClass) => (
              <ClassesCard key={singleClass._id} singleClass={singleClass} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Classes;
