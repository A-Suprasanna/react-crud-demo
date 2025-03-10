import React from "react";
import { Outlet } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>List of Indian Cities</h1>
      <Outlet />
    </div>
  );
}

export default Landing;
