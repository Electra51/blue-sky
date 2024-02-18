import React from "react";
import Card from "../../components/Common/Card";
import { Link } from "react-router-dom";
import { blogdata } from "../../components/Common/data";
const Home = () => {
  return (
    <div className="my-20 max-w-[1120px] mx-auto">
      <div>
        {" "}
        <h2 className="text-[40px] font-semibold text-center lg:text-left">
          Explore Our Blogs
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-[16px] font-normal text-center lg:text-left">
            Discover the Depths of Knowledge and Inspiration in Every Post
          </p>
          <Link to="/details">
            {" "}
            <p className="text-[16px] font-medium text-[#76C4EB]">See All</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:justify-items-start gap-[20px] justify-center items-center mt-[24px]">
        {blogdata?.slice(0, 3).map((e, i) => {
          return <Card data={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
