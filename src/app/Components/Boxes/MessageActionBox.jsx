import React from "react";
import { BiLike } from "react-icons/bi";
import {
  FaAngry,
  FaCopy,
  FaForward,
  FaHeart,
  FaReply,
  FaSadCry,
  FaSadTear,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function MessageActionBox(id) {
  return (
    <>
      <div className="p-1 px-2 shadow-xl rounded-lg bg-red-950 inline-block">
        <div className="flex items-center">
          <FaHeart className="text-xl text-white m-2 cursor-pointer" />
          <BiLike className="text-xl text-white m-2 cursor-pointer" />
          <FaSadTear className="text-xl text-white m-2 cursor-pointer" />
          <FaSadCry className="text-xl text-white m-2 cursor-pointer" />
          <FaAngry className="text-xl text-white m-2 cursor-pointer" />
        </div>

        <div className="flex text-white text-[10px] items-center">
          <div className="p-1 bg-red-900 rounded-md w-[20%] text-center m-1 cursor-pointer">
            <h1>Reply</h1>
            <FaReply className="text-sm text-white m-1" />
          </div>
          <div className="p-1 bg-red-900 rounded-md w-[20%] text-center m-1 cursor-pointer">
            <h1>Copy</h1>
            <FaCopy className="text-sm text-white m-1" />
          </div>
          <div className="p-1 bg-red-900 rounded-md w-[20%] text-center m-1 cursor-pointer">
            <h1>Forward</h1>
            <FaForward className="text-sm text-white m-1" />
          </div>
          <div className="p-1 bg-red-900 rounded-md w-[20%] text-center m-1 cursor-pointer">
            <h1>Delete</h1>
            <MdDelete className="text-sm text-white m-1" />
          </div>
        </div>
      </div>
    </>
  );
}
