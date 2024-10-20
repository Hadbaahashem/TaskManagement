import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const InputData = ({ InputDiv, setInputDiv }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    console.log("Title:", title, "Description:", desc);
    setInputDiv("hidden");
  };

  return (
    <>
      <div
        className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>

      <div
        className={` ${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-full lg:w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={() => setInputDiv("hidden")}>
              <RxCross1 />
            </button>
          </div>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            name="desc"
            cols="30"
            rows="5"
            placeholder="Description"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />

          <button
            onClick={handleSubmit}
            className="px-3 py-2 bg-blue-400 rounded w-full text-white text-xl font-semibold hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
