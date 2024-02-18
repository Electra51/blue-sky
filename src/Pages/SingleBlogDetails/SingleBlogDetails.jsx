import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import img1 from "../../assets/img1.jpg";
const SingleBlogDetails = () => {
  return (
    <div>
      <div className="mt-[60px] text-[14px] font-medium bg-white h-[56px] flex">
        <div className="max-w-[1120px] ml-[20px] lg:ml-[387px] flex items-center gap-10">
          <Link
            to="/"
            className="flex justify-normal items-center gap-5 text-[#5F5F5F] cursor-pointer"
          >
            <IoIosArrowBack />
            Back
          </Link>
          <div className="flex justify-normal items-center gap-2">
            {" "}
            <p className="text-[#5F5F5F]">Blogs</p>
            <span className="text-[#5F5F5F]">/</span>
            <p className="text-[#5F5F5F]">Blog Details</p>
          </div>
        </div>
      </div>
      <div className="mt-[32px] max-w-[1120px] mx-auto">
        <div className="w-[1120px] h-[569px]">
          {" "}
          <img src={img1} alt="" className="h-full w-full object-fill" />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
