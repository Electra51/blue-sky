import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { categoryData } from "../../components/Common/data";
import { blogdata } from "../../components/Common/data";
import Card from "../../components/Common/Card";
import { IoSearchOutline } from "react-icons/io5";
import Pagination from "../../components/Common/Pagination";
const Details = () => {
  const [page, setPage] = useState(0);
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
          <p className="text-[#5F5F5F]">Blogs</p>
        </div>
      </div>
      <div className="mt-[32px] grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[1120px] mx-auto">
        <div>
          <div className="h-[377px] w-[360px] bg-white rounded-md p-4">
            <p className="text-[16px] font-medium">Categories</p>
            <div className="grid grid-cols-1 divide-y divide-[#E9E9E9] mt-3">
              {" "}
              {categoryData?.map((e, i) => {
                return (
                  <p
                    className="text-[14px] font-normal py-4 cursor-pointer"
                    key={i}
                  >
                    {e?.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="h-[400px] w-[360px] bg-white rounded-md p-4 mt-5">
            <form className="border rounded-lg">
              <div class="relative text-[#f1f1f1] focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <IoSearchOutline className="text-[#f1f1f1]" />
                </span>
                <input
                  type="search"
                  name="q"
                  class="py-2 rounded-md pl-10 focus:outline-none focus:bg-base-200"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
            </form>
            <p className="text-[16px] font-medium pt-4">Recent posts</p>
            <div className="grid grid-cols-1 divide-y divide-[#E9E9E9]">
              {" "}
              {blogdata?.slice(0, 4).map((e, i) => {
                return (
                  <p
                    className="text-[14px] font-normal py-4 cursor-pointer"
                    key={i}
                  >
                    {e?.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] justify-center items-center">
            {blogdata?.slice(6 * page, 6 * (page + 1)).map((e, i) => {
              return <Card data={e} key={i} />;
            })}
          </div>
          <Pagination length={blogdata?.length} page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Details;
