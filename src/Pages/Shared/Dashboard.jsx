import React from "react";
import Container from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
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
