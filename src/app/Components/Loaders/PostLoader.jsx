import React from "react";

export default function PostLoader() {
  return (
    <div>
      <div className="flex items-center p-2 justify-center">
        <div className="w-2/12 m-2 loading rounded-full p-5"></div>
        <div className="w-9/12 m-2 loading p-5"></div>
      </div>
      <div>
        <div className="p-32 2xl loadingbig"></div>
      </div>
      <div className="flex items-center p-2 justify-center">
        <div className="w-3/12 m-2 loading rounded-2xl p-5"></div>
        <div className="w-3/12 m-2 loading rounded-2xl p-5"></div>
        <div className="w-3/12 m-2 loading rounded-2xl p-5"></div>
      </div>
    </div>
  );
}
