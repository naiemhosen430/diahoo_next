import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function ActiveStatus({ closetiveStatusBox }) {
  const [activeStatus, setActiveStatus] = useState(true);

  const hundleOnlineStatus = (e) => {
    const seelectedValue = e.target.value;
    setActiveStatus(seelectedValue === "public");
  };

  return (
    <>
      <ul>
        <li
          className="text-2xl text-white py-2 my-2 px-4 cursor-pointer rounded shadow"
          onClick={closetiveStatusBox}
        >
          <IoMdArrowBack />
        </li>
      </ul>

      <ul>
        <li className="flex items-center mx-2 my-2 bg-slate-800 py-1 px-2">
          <div className="w-5/6">
            <h3 className="text-white text-xl">Online Status..</h3>
            <p className="text-slate-400 text-sm">
              If you offline then you won't able to see any user's online
              status..
            </p>
          </div>
          <div className="w-1/6 text-center">
            <select
              className="text-white rounded-lg py-1 px-1 text-xs bg-black"
              value={setActiveStatus ? "on" : "off"}
              onChange={hundleOnlineStatus}
            >
              <option
                className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                value="on"
              >
                On
              </option>
              <option
                className="text-white rounded-lg py-1 px-1 text-xs bg-black"
                value="off"
              >
                Off
              </option>
            </select>
          </div>
        </li>
      </ul>
    </>
  );
}
