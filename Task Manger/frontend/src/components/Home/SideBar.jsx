import React from "react";
import { GrNotes } from "react-icons/gr";
import { Link } from "react-router-dom";

const SideBar = () => {
  const data = [
    {
      title: "All Tasks",
      icon: <GrNotes />,
      link: "/",
    },
    {
      title: "Important Tasks",
      link: "/important",
    },
    {
      title: "Completed Tasks",
      link: "/completed",
    },
    {
      title: "Incompleted Tasks",
      link: "/incompleted",
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Task Manger</h2>
        <h4 className="mb-1 text-gray-400"> h@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="my-2 flex items-center hover:bg-gray-400 p-2 rounded transition-all duration-300"
          >
            {items.icon}
            {items.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default SideBar;
