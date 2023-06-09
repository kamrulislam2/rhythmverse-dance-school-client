import React from "react";
import Container from "../../components/Container/Container";
import PopularClassCard from "../../components/PopularClassCard/PopularClassCard";

const PopularClasses = ({ classes }) => {
  return (
    <Container>
      <div className="py-16">
        <h2 className="text-3xl font-bold uppercase underline text-center mb-16">
          Popular Classes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((singleClass) => (
            <PopularClassCard key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularClasses;
