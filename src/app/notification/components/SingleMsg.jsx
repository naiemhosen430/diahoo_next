"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function SingleNtf({ ntf }) {
  return (
    <Link href={ntf?.link}>
      <div className="py-2">
        <div className="py-2 px-4 flex items-center shadow-md cursor-pointer hover:bg-slate-900 rounded-2xl">
          <div className="w-1/6 rounded-full">
            <img
              className="w-14 h-14 rounded-full"
              src={ntf?.image ? ntf?.image : "default.jpeg"}
              alt="No image"
            />
          </div>
          <div className="w-5/6 px-2">
            <div>
              <h1 className="text-white lg:text-xl text-lg">
                {ntf?.heading}{" "}
                <span className="text-sm text-slate-300">{ntf?.text}</span>
              </h1>
              <p className="text-slate-600 py-1">{ntf?.des}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
