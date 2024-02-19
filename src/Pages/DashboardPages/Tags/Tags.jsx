import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
const Tags = () => {
  const columns = [
    {
      name: "Tag name",
      selector: (row) => row.name,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },

    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <div // onClick={(e) => handleButtonClick(e, row.id)}
        >
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} className="m-1">
              <BsThreeDotsVertical />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a>Delete</a>
              </li>
              <li>
                <a>View</a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Beetlejuice",
      description: "1988",
      slug: "hello",
    },
    {
      id: 2,
      name: "Ghostbusters",
      description: "1988",
      slug: "hello",
    },
    {
      id: 3,
      name: "Ghostbusters",
      description: "1988",
      slug: "hello",
    },
  ];

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleCategoryAdd = async (e) => {
    e.preventDefault();

    const data = {
      email: value.email,
      password: value.password,
    };

    console.log("data", data);
  };
  return (
    <div className=" pt-[56px] px-[56px] ">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <div className="flex justify-between items-center pt-[56px] px-[56px] ">
            <h2>All Tags</h2>
          </div>
          <div className="px-[56px] mt-[10px]">
            {" "}
            <DataTable columns={columns} data={data} pagination />
          </div>
        </div>
        <div className="w-[270px] h-[846px] bg-white">
          <p className="text-[16px] font-medium px-4 pt-4">Add new Tag</p>
          <form
            className="rounded px-4 pt-6 pb-8 mb-4"
            onSubmit={handleCategoryAdd}
          >
            <div className="mb-4">
              <label
                className="block font-normal text-[14px] mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={value.name}
                onChange={(e) => {
                  setValue((prev) => ({ ...prev, name: e.target.value }));
                }}
                placeholder="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-normal text-[14px] mb-2"
                htmlFor="slug"
              >
                Slug
              </label>
              <input
                className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="slug"
                type="text"
                value={value.slug}
                onChange={(e) => {
                  setValue((prev) => ({ ...prev, slug: e.target.value }));
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block font-normal text-[14px] mb-2"
                htmlFor="slug"
              >
                Description
              </label>
              <textarea
                className="w-[238px] border-[#E1E1E1] shadow-sm appearance-none border rounded h-[120px] py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="slug"
                type="text"
                value={value.slug}
                onChange={(e) => {
                  setValue((prev) => ({ ...prev, slug: e.target.value }));
                }}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-[#76C4EB] gap-1 hover:bg-[#76C4EB] text-white text-[14px] font-medium py-1 px-4 rounded focus:outline-none focus:shadow-outline flex justify-normal items-center"
                type="submit"
              >
                <FiPlus className="text-[#76C4EB]" /> Add New Tag
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tags;
