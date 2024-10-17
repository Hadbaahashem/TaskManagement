import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const Cards = ({ home, setInputDiv }) => {
  const data = [
    {
      title: "The Best Coding Channel",
      desc: "I have to create my channel the best ever coding channel in Hindi for those who do not understand English pro",
      status: "Complete",
    },
    {
      title: "CPP Concepts",
      desc: "I need to clear basics of C++. Topics: Abstraction, Inheritance, Polymorphism, virtual functions etc.",
      status: "Incomplete",
    },
    {
      title: "Assignment",
      desc: "My assignment is due on 20 March. I have to complete it.",
      status: "Complete",
    },
    {
      title: "Projects",
      desc: "For the project, I need to see tutorials of the Code Master YouTube channel.",
      status: "Complete",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((items, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-gray-800 p-4 rounded-sm"
        >
          <div>
            <h3 className="text-lg font-semibold">{items.title}</h3>
            <p className="text-gray-300 my-2">{items.desc}</p>
          </div>
          <div className="mt-4 w-full flex items-center">
            <button
              className={`${
                items.status === "Incomplete" ? "bg-red-400" : "bg-green-700"
              } bg-red-400 p-2  rounded`}
            >
              {items.status}
            </button>
            <div className="text-white p-2 w-3/6 text-2xl font-semibold flex justify-around">
              <button>
                <FaEdit />
              </button>
              <button>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      {home === "true" && (
        <button
          className="flex flex-col justify-center items-center bg-gray-800 p-4 rounded-sm text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
          onClick={() => setInputDiv("fixed")}
        >
          <IoMdAdd className="text-5xl" />
          <h2 className="text-2xlmt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
