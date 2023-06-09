import React from "react";
import Container from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassesCard from "../../components/ClassesCard/ClassesCard";

const Classes = () => {
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
      <Container>
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
