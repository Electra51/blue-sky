import React from "react";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";

const PostPage = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Tags",
      selector: (row) => row.tags,
    },
    {
      name: "Create Date",
      selector: (row) => row.date,
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
      title: "Beetlejuice",
      category: "1988",
      tags: "hello",
      date: "12/2/2028",
    },
    {
      id: 2,
      title: "Ghostbusters",
      category: "1988",
      tags: "hello",
      date: "12/2/2028",
    },
    {
      id: 3,
      title: "Ghostbusters",
      category: "1988",
      tags: "hello",
      date: "12/2/2028",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center pt-[56px] px-[56px] ">
        <h2>All Post</h2>
        <button className="bg-[#76C4EB] rounded-[4px] px-3 text-white py-1 text-[14px] font-medium">
          Add New Post
        </button>
      </div>
      <div className="px-[56px] mt-[10px]">
        {" "}
        <DataTable columns={columns} data={data} pagination />
      </div>
    </div>
  );
};

export default PostPage;
