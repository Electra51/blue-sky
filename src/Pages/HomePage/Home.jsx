import React from "react";
import Card from "../../components/Common/Card";
import { Link } from "react-router-dom";
import { blogdata } from "../../components/Common/data";
const Home = () => {
  return (
    <div className="my-20 max-w-[1240px] mx-auto">
      <div>
        {" "}
        <h2 className="text-[40px] font-semibold">Explore Our Blogs</h2>
        <div className="flex justify-between items-center">
          <p className="text-[16px] font-normal">
            Discover the Depths of Knowledge and Inspiration in Every Post
          </p>
          <Link to="/details">
            {" "}
            <p className="text-[16px] font-medium text-[#76C4EB]">See All</p>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[20px] justify-center items-center mt-[24px]">
        {blogdata?.slice(0, 3).map((e, i) => {
          return <Card data={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
