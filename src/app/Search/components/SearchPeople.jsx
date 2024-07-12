"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function SearchPeople({ searchPeople }) {
  const [SearchPeopler, setSearchPeopler] = useState([]);
  useEffect(() => {
    setSearchPeopler(searchPeople);
  }, [searchPeople]);
  return (
    <div className="p-4">
      {SearchPeopler.length === 0 ? (
        <h1 className="text-slate-600 px-4 py-20">No user found.</h1>
      ) : (
        SearchPeopler.map((user) => (
          <div className="flex py-1 px-2" key={user.id}>
            <img
              className="w-2/12"
              src={user.profilephoto}
              alt="user profile"
            />
            <h1 className="text-slate-100 w-7/12">{user.fullname}</h1>
            <div className="w-1/6 flex items-center justify-center">
              <Link
                className="text-white py-1 px-2 rounded-md bg-slate-800 text-xs"
                href={`/profile/${user._id}`}
              >
                <button>View Profile</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
