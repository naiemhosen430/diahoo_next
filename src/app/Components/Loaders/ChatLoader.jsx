import React from "react";

export default function ChatLoader() {
  return (
    <div>
      <div className="flex items-center p-2">
        <div className="w-2/12 m-2">
        <div className="lg:h-20 h-16 w-16 lg:w-20 loading rounded-full "></div>
        </div>
        <div className="w-9/12 m-2">

        <div className=" w-12/12 m-2 loading p-3"></div>
        <div className=" w-6/12 m-2 loading p-2"></div>
        </div>
      </div>

    </div>
  );
}
