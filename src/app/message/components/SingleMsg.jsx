"use client";
import React, { useEffect, useState } from "react";

export default function SingleMsg({ openChat, friend }) {
  return (
    <div className="py-2" onClick={openChat}>
      <div className="py-2 px-4 flex items-center shadow-md cursor-pointer hover:bg-slate-900 rounded-2xl">
        <div className="w-1/6 rounded-full">
          <img
            className="w-14 h-14 rounded-full"
            src={
              friend?.profile?.profilephoto
                ? friend?.profile?.profilephoto
                : "default.jpeg"
            }
            alt="No image"
          />
        </div>
        <div className="w-5/6 px-2">
          <div>
            <h1 className="text-white lg:text-xl text-lg">
              {friend?.profile?.fullname}
            </h1>
          </div>
          <div className=" flex items-center space-x-2">
            <h4 className="text-slate-500">
              {friend?.messages[
                friend?.messages?.length - 1
              ]?.mstContent?.slice(0, 20)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
