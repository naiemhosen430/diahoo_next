"use client";
import React, { useEffect, useState } from "react";
import { getApiCall } from "@/api/fatchData";

export default function SingleMsg({ openChat, friend }) {
  const [user, setusER] = useState([]);

  return (
    <div className="py-4" onClick={openChat}>
      <div className="py-2 px-4 flex items-center shadow-md cursor-pointer hover:bg-slate-900 rounded-2xl">
        <div className="w-1/6 rounded-full">
          <img
            className="w-14 h-14 rounded-full"
            src={friend?.profile?.profilephoto}
            alt="No image"
          />
        </div>
        <div className="w-5/6">
          <div>
            <h1 className="text-white py-2 text-2xl">
              {friend?.profile?.fullname}
            </h1>
          </div>
          <div className=" flex items-center space-x-2">
            <h4 className="text-slate-500">
              {friend?.profile?.messages[-1]?.mstContent?.slice(0, 20)}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
