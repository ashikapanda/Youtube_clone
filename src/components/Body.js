import React from "react";
import SideMenu from "./SideMenu";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="grid grid-flow-col">
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default Body;
