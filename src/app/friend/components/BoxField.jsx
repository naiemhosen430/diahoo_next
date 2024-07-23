"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { getApiCall } from "@/api/fatchData";
import Link from "next/link";

export default function BoxField({ myfriend }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /// get dat from database
  const fetchData = async (myfriend) => {
    if (myfriend && myfriend.length > 0) {
      const userArray = [];
      for (const id of myfriend) {
        try {
          const suser = await getApiCall(`user/${id}`);
          userArray.push(suser?.data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
      setUsers(userArray);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(myfriend);
  }, [myfriend]);

  return (
    <div className="py-4">
      {isLoading ? (
        <div className="flex justify-center">
          <div className="my-50">
            <h1 className="loading text-slate-400 px-4 py-10 text-center"></h1>
            <span className="text-center text-white block py-5">
              loading....
            </span>
          </div>
        </div>
      ) : users.length === 0 ? (
        <h1 className="text-slate-700 px-4 py-10 text-center">
          You have no result
        </h1>
      ) : (
        users.map((user) => (
          <div
            key={user?.id}
            className="py-2 px-4 flex items-center bg-slate-950 hover:bg-slate-900 rounded-2xl"
          >
            <div className="w-2/6 rounded-full">
              <img
                className="w-14 h-14 rounded-full"
                src={user?.profilephoto}
                alt={`${user?.name}'s profile`}
              />
            </div>
            <div className="w-4/6 flex items-center">
              <div className="w-8/12">
                <h1 className="text-white py-2 text-2xl">{user?.fullname}</h1>
              </div>
              <div className="w-2/12">
                <Link href={`/${user?._id}`}>
                  <button
                    className="text-slate-100 bg-slate-600 px-8 rounded-xl py-1"
                    type="button"
                  >
                    Action
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
