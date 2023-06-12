import React from "react";
import Container from "../../components/Container/Container";

const RecentNews = () => {
  return (
    <Container>
      <h2 className="text-4xl font-bold uppercase text-center my-16">
        Recent News
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-80 w-full"
              src="https://i.ibb.co/wdr7dq5/arthur-murray.webp"
              alt="man"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Why you should learn Musical Theater Dance?
            </h2>
            <p>
              Musical theater dance combines elements of various dance styles,
              incorporating storytelling...
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Read More</div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-80 w-full"
              src="https://i.ibb.co/mt52VCs/Albert-Torres.jpg"
              alt="man"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Contemporary Fusion Dance is a Classic Thing!
            </h2>
            <p>
              Contemporary fusion combines elements of different dance styles,
              often blending modern, ballet, jazz...
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Read More</div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-80 w-full"
              src="https://i.ibb.co/rM3pFYy/akram-khan.jpg"
              alt="man"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ballet Dance was one of style?</h2>
            <p>
              Ballet is a classical dance form characterized by precise and
              graceful movements, pointe work...
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Read More</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentNews;
