import React from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function Security({ closeSettingSecurety }) {
  return (
    <>
      <div className="">
        <ul>
          <li
            className="text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow"
            onClick={closeSettingSecurety}
          >
            <IoMdArrowBack />
          </li>
        </ul>
        <h1 className="text-white py-4 text-center">Your Recent Login</h1>
        <div className="text-white p-4">windos computer dhaka 0001001</div>
      </div>
    </>
  );
}
