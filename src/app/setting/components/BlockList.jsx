import React from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function BlockList({ closeSettingBlocking }) {
  return (
    <>
      <ul>
        <li
          className="text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow"
          onClick={closeSettingBlocking}
        >
          <IoMdArrowBack />
        </li>
      </ul>
      <div>
        <h1 className="text-white p-4">Block List</h1>
        <div>
          <div className="flex items-center p-4 py-2 shadow-md">
            <img className="w-1/6 rounded-full" src="" alt="no image" />
            <h1 className="text-white w-4/6 p-2">MD Naiem Hosen</h1>
            <button
              className="text-white w-1/6 border rounded bg-black p-1 text-center"
              type="button"
            >
              Unblock
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
