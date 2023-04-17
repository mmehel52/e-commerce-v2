import React from "react";
import Sidebar from "../components/admin-sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
