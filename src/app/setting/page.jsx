"use client";
import { GoArrowSwitch } from "react-icons/go";
import MainSetting from "./components/MainSetting";
import { useState } from "react";
import Link from "next/link";

function Setting() {
  const [mainsetting, setMainSetting] = useState(true);
  const [setting, setSetting] = useState(false);

  //hundle onclick
  const showSetting = () => {
    setSetting(true);
    setMainSetting(false);
  };
  const closeSetting = () => {
    setSetting(false);
    setMainSetting(true);
  };
  return (
    <div className="col-span-3 bg-slate-950 mx-2 p-4">
      {mainsetting && (
        <div>
        <div className="flex items-center bg-slate-700 px-4 py-2">
          <h1 className=" w-5/6 text-white rounded text-2lg">
            Switch Account
          </h1>
          <GoArrowSwitch className="w-1/6 text-white" />
        </div>
        <ul className="my-4">
          <Link href={"/myprofile"}>
            <li className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow">
              profile
            </li>
          </Link>
          <Link href={"/message"}>
            <li className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow">
              Message
            </li>
          </Link>
          <Link href={"/friend"}>
            <li className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow">
              Friend
            </li>
          </Link>
          <Link href={"/video"}>
            <li className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow">
              Video
            </li>
          </Link>
          <Link href={"/rendompeople"}>
            <li className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow">
              Rendom People
            </li>
          </Link>
          <li
            className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow"
            onClick={showSetting}
          >
            Setting
          </li>
          <Link href={"/report"}>
            <li className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow">
              Report
            </li>
          </Link>
          <Link href={"/support"}>
            <li className="text-lg text-white py-2 px-4 cursor-pointer rounded shadow">
              Help And Support
            </li>
          </Link>
          <Link href={"/logout"}>
            <li className="text-lg text-white py-2 my-2 cursor-pointer bg-slate-800 text-center px-4 rounded shadow">
              Log Out
            </li>
          </Link>
        </ul>
      </div>
      )}

      {setting && <MainSetting closeSetting={closeSetting} />}
    </div>
  );
}

export default Setting;
