import React from "react";
import Container from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>RhythmVerse | Dashboard</title>
      </Helmet>
      <div className="drawer drawer-open">
        <input type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Container>
            <Outlet />
          </Container>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
