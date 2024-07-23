import { getApiCall } from "@/api/fatchData";
import React, { useEffect, useState } from "react";

export default function PublicProfileInfo({ user }) {
  return (
    <div className="p-4">
      {Object.keys(user).map((field) => (
        <div className="py-1 flex" key={field}>
          <span className="text-white w-3/6">{field}</span>
          <input
            className="text-white bg-slate-900 w-2/6"
            type="text"
            value={user[field]}
            disabled
          />
        </div>
      ))}
    </div>
  );
}
