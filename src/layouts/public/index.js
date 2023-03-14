import React from "react";
import { Outlet } from "react-router-dom";
// import { useAuth } from "contexts";

import Navbar from "./Navbar";


const Public = () => {
  // const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Public;
