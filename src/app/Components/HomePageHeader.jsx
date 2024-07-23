"use client";
import React, { useContext } from "react";
import { AuthContex } from "@/Contexts/AuthContex";
import { StateContext } from "@/Contexts/StateContext";

export default function HomePageHeader() {
  const { toggleCreatePostBox, toggleMyNodeBox } = useContext(StateContext);

  const { state } = useContext(AuthContex);
  const user = state?.user;
  return (
    <>
      <div>
        <div className="flex items-center overflow-x-auto">
          <div className="border rounded-xl h-[100px] text-white text-4xl flex items-center justify-center font-boold m-1 w-[60px]">
            +
          </div>
        </div>

        <div className="p-2">
          <div className="flex bg-black rounded-full items-center">
            <img
              className="h-10 w-10 rounded-full"
              src={user?.profilephoto ? user?.profilephoto : "default.jpeg"}
              alt="no image"
            />
            <input
              onClick={toggleCreatePostBox}
              className="bg-transparent cursor-pointer border-none p-3 px-5 w-11/12"
              type="text"
              readOnly
              placeholder="What's on your mind...."
            />
          </div>
        </div>
      </div>
    </>
  );
}
