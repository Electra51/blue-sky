import React from "react";
import logo from "../../assets/logo.png";
import { sidebarData } from "./data";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[260px] bg-[#FFFFFF] h-[100vh]">
      <div className="flex items-center justify-center gap-2 py-10">
        <img src={logo} alt="" width={30} />
        <p className="text-2xl font-semibold">BlueSKy</p>
      </div>
      <div>
        {sidebarData?.map((e, i) => {
          return (
            <div>
              <NavLink to={e?.link} className="flex justify-start items-center">
                <img src={e?.img} className="border" />
                <p> {e?.label}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
