import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <div className="mt-[60px] text-[14px] font-medium bg-white h-[56px] flex">
        <div className="max-w-[1240px] ml-[340px] flex items-center gap-10">
          <Link
            to="/"
            className="flex justify-normal items-center gap-5 text-[#5F5F5F] cursor-pointer"
          >
            <IoIosArrowBack />
            Back
          </Link>
          <p className="text-[#5F5F5F]">Blogs</p>
        </div>
      </div>
      <div className="mt-[32px] grid grid-cols-3 gap-10 max-w-[1240px] mx-auto">
        <div className="h-[377px] w-[360px] bg-white rounded-md">hi</div>
        <div className="col-span-2">hello</div>
      </div>
    </div>
  );
};

export default Details;
