"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsChatRightTextFill, BsPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdNotifications, MdReorder } from "react-icons/md";
import { AuthContex } from "@/Contexts/AuthContex";
import { StateContext } from "@/Contexts/StateContext";
import { GiNotebook } from "react-icons/gi";
import { GoArrowSwitch } from "react-icons/go";
import Link from "next/link";
import MainSetting from "./../../setting/components/MainSetting";
import { NtfContext } from "@/Contexts/NtfContext";
import { ChatContext } from "@/Contexts/ChatContext";

export default function Header() {
  const { ntfstate } = useContext(NtfContext);
  const { chatstate } = useContext(ChatContext);
  const NtfData = ntfstate?.ntf;
  const chatData = chatstate?.chats;
  const { toggleMyNodeBox } = useContext(StateContext);
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

  const [searchText, setSearchText] = useState("");
  const { state } = useContext(AuthContex);
  const user = state?.user;
  const [menuBox, setMenuBox] = useState(false);

  // onclick hundler
  const toggleMenuBox = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  console.log({ inmsg: chatData?.length });
  console.log({ inuser: user?.ntfseen });
  return (
    <>
      <div className="  fixed w-full text-slate-300 bg-[#242526] menu-item-color top-0 nav-bg z-20 lg:py-4 p-4 lg:px-8 ">
        <div className="flex justify-center items-center">
          <div className="lg:w-3/12 w-6/12">
            <Link href={"/"} className="font-bold block text-xl">
              <span className="block text-3xl w-1/6 text-white bolder text-3lg">
                diahoo
              </span>
            </Link>
          </div>

          <div className="lg:w-6/12 hidden lg:flex">
            {user ? (
              <>
                <div className="w-10/6 p-4">
                  <ul className="flex items-center">
                    <li className="w-1/5 block px-10">
                      <Link href={"/"}>
                        <FaHome className="text-white text-2xl lg:text-3xl" />
                      </Link>
                    </li>
                    <li className="w-1/5 relative px-10">
                      <Link className="relative" href={"/notification"}>
                        <MdNotifications className="text-white text-xl lg:text-3xl" />
                      </Link>
                      {NtfData && NtfData?.length - user?.ntfseen > 0 ? (
                        <span className="p-1 text-xs absolute right-0 top-0 rounded-full bg-black text-white font-bold">
                          {NtfData?.length - user?.ntfseen}
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="relative w-1/5 block px-10">
                      <Link className="relative" href={`/message`}>
                        <BsChatRightTextFill className="text-white text-xl lg:text-2xl" />
                      </Link>
                      {chatData && chatData?.length - user?.msgseen > 0 ? (
                        <span className="p-1 text-xs absolute right-0 top-0 rounded-full bg-black text-white font-bold">
                          {chatData?.length - user?.msgseen}
                        </span>
                      ) : (
                        ""
                      )}
                    </li>
                    <li className="w-1/5 block px-10">
                      <Link href={"/myprofile"}>
                        <CgProfile className="text-white text-xl lg:text-2xl" />
                      </Link>
                    </li>
                    <li className="w-1/5 block px-10">
                      <Link href={"/friend"}>
                        <BsPeopleFill className="text-white text-xl lg:text-2xl" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </div>

          <div className="lg:w-3/12 hidden lg:flex justify-end text-right">
            {user ? (
              <>
                <div className="w-full flex items-center justify-end">
                  <input
                    className="px-4 py-2 bg-black border-l-rose-600 text-white rounded-l-xl shadow w-4/6"
                    type="search"
                    name="searchValu"
                    id="searchValu"
                    placeholder="Search your key word...."
                    value={searchText}
                    onChange={handleSearchInputChange}
                  />
                  <Link href={`/search/${searchText}`}>
                    <button
                      className="bg-slate-700 text-rose-50 rounded-r-xl shadow py-2 px-4"
                      type="button"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  className="py-2 mx-4 lg:hidden px-8 inline-block rounded-md shadow-md bg-transparent nav-booking-btn font-bold"
                  href={"/signup"}
                >
                  Join
                </Link>

                <Link
                  className="py-2 mx-4 lg:hidden px-8 inline-block rounded-md shadow-md bg-transparent nav-booking-btn font-bold"
                  href={"/login"}
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {user ? (
            <>
              <div className="w-6/12 lg:hidden flex items-center justify-end text-center font-bold text-black ">
                <div className="py-0 relative rounded-md">
                  <Link className="relative mx-2" href={"/notification"}>
                    <MdNotifications className="m-1 text-2xl text-white inline-block" />
                  </Link>
                  {NtfData && NtfData?.length - user?.ntfseen > 0 ? (
                    <span className="p-1 text-xs absolute right-[10px] top-0 rounded-full bg-black text-white font-bold">
                      {NtfData?.length - user?.ntfseen}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="py-0 rounded-md mx-2" onClick={toggleMenuBox}>
                  <MdReorder className="m-1 text-2xl text-white inline-block" />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="lg:hidden block">
          {user ? (
            <>
              <div className="w-10/6">
                <ul className="flex items-center justify-between pt-4">
                  <li className="block px-4">
                    <Link href={"/"}>
                      <FaHome className="text-white text-2xl" />
                    </Link>
                  </li>
                  <li className="relative block px-4">
                    <Link className="relative" href={`/message`}>
                      <BsChatRightTextFill className="text-white text-xl" />
                    </Link>
                    {chatData && chatData?.length - user?.msgseen > 0 ? (
                      <span className="p-1 text-xs absolute right-[10px] top-0 rounded-full bg-black text-white font-bold">
                        {chatData?.length - user?.msgseen}
                      </span>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="block px-4">
                    <Link href={"/myprofile"}>
                      <CgProfile className="text-white text-xl" />
                    </Link>
                  </li>
                  <li className="block px-4">
                    <Link href={"/friend"}>
                      <BsPeopleFill className="text-white text-xl" />
                    </Link>
                  </li>
                  <li className="block px-4">
                    <Link href={""} onClick={toggleMyNodeBox}>
                      <GiNotebook className="text-white text-xl" />
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                className="py-2 mx-4 hidden px-8 lg:inline-block rounded-md shadow-md bg-transparent nav-booking-btn font-bold"
                href={"/signup"}
              >
                Join
              </Link>

              <Link
                className="py-2 mx-4 hidden px-8 lg:inline-block rounded-md shadow-md bg-transparent nav-booking-btn font-bold"
                href={"/login"}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>

      {menuBox && (
        <div
          className="h-screen fixed top-0 pt-32 left-0 bg-black z-10"
          data-aos="fade-right"
        >
          <div className="w-screen bg-slate-950 mx-2 p-4">
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
        </div>
      )}
    </>
  );
}
