import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="card h-[416px] w-[360px] rounded-md bg-white">
      <figure className="h-[200px] w-[328px] mx-auto mt-[16px] rounded-sm">
        <img
          src={data?.img}
          alt={data?.name}
          className="w-full h-full object-fill"
        />
      </figure>
      <div className="card-body items-center ml-4">
        <div className="flex justify-normal items-center gap-3 my-4">
          <p className="text-[12px] text-[#76C4EB] font-medium">
            {data?.category}
          </p>
          <p className="text-[#5F5F5F] text-[12px] font-normal">{data?.date}</p>
        </div>
        <h2 className="text-[16px] font-medium mb-[10px]">{data?.name}</h2>

        {data?.details?.length > 80 ? (
          <p className="text-[12px]">{data?.details.slice(0, 80) + "..."}</p>
        ) : (
          <p className="text-[12px]">{data?.details}</p>
        )}
        <div className="card-actions">
          <Link to={`/details/${data?.id}`}>
            <button className="text-[14px] text-[#76C4EB] flex justify-center items-center font-medium gap-2 mt-[18px]">
              <p className="text-[#76C4EB]">Read More</p>
              <IoIosArrowRoundForward className="text-[#50bdf3] text-[16px]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
