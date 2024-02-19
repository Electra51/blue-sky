import React from "react";
import logo from "../../assets/logo.png";
import { sidebarData } from "./data";
import { NavLink } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="w-[260px] bg-[#FFFFFF] h-[100vh] relative">
      <div className="flex items-center justify-center gap-2 py-10">
        <img src={logo} alt="" width={30} />
        <p className="text-2xl font-semibold">BlueSKy</p>
      </div>
      <div>
        {sidebarData?.map((e, i) => {
          return (
            <div>
              <NavLink
                to={e?.link}
                className={`active ${
                  e?.label == "Blog"
                    ? "flex justify-normal items-center gap-3 w-[212px] h-[40px] mx-auto rounded-[4px] pl-4 bg-[#76C4EB]"
                    : ""
                }`}
              >
                <img src={e?.img} className="border" />
                <p
                  className={`${
                    e?.label == "Blog"
                      ? "text-white"
                      : "text-[#5F5F5F] pl-[68px] py-2"
                  }  text-[14px]`}
                >
                  {" "}
                  {e?.label}
                </p>
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="flex justify-between items-center gap-2">
          <div className="h-[36px] w-[36px] rounded-full bg-[#FFF6D8]"></div>
          <p className="text-[#11233A] text-[14px] font-medium">
            Leslie Alexander
          </p>
          <IoLogOutOutline className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
