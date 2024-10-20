import React from "react";
import { GrNotes } from "react-icons/gr";
import { MdIncompleteCircle } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdNotificationImportant } from "react-icons/md";

import { Link } from "react-router-dom";

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
  const data = [
    {
      title: "All Tasks",
      icon: <GrNotes />,
      link: "/",
    },
    {
      title: "Important Tasks",
      icon: <MdNotificationImportant />,
      link: "/important",
    },
    {
      title: "Completed Tasks",
      icon: <IoCheckmarkOutline />,
      link: "/completed",
    },
    {
      title: "Incompleted Tasks",
      icon: <MdIncompleteCircle />,
      link: "/incompleted",
    },
  ];

  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed z-10 top-0 left-0 w-64 h-full bg-gray-900 text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-1/6 p-4 flex flex-col justify-between`}
    >
      <div>
        <h2 className="text-xl font-semibold pt-10">Task Manager</h2>
        <h4 className="mb-1 text-gray-400">h@gmail.com</h4>
        <hr className="border-gray-600" />
      </div>

      <div className="flex flex-col gap-2 mt-6">
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-all duration-300"
            onClick={toggleSidebar}
          >
            {items.icon}
            <span>{items.title}</span>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <button className="bg-red-400 w-full p-2 rounded text-white hover:bg-red-700">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
