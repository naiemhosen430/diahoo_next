"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsChatRightTextFill, BsPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdReorder } from "react-icons/md";
import { AuthContex } from "@/Contexts/AuthContex";

export default function Header() {
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



  return (
    <>
      <div className="  fixed w-full text-slate-300 bg-[#242526] menu-item-color top-0 nav-bg z-10 lg:py-4 p-4 lg:px-8 ">
        <div className="flex justify-center items-center">
          <div className="lg:w-3/12 w-10/12">
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
                        <FaHome className="text-white text-2xl" />
                      </Link>
                    </li>
                    <li className="w-1/5 block px-10">
                      <Link href={`/message`}>
                        <BsChatRightTextFill className="text-white text-xl" />
                      </Link>
                    </li>
                    <li className="w-1/5 block px-10">
                      <Link href={"/myprofile"}>
                        <CgProfile className="text-white text-xl" />
                      </Link>
                    </li>
                    <li className="w-1/5 block px-10">
                      <Link href={"/friend"}>
                        <BsPeopleFill className="text-white text-xl" />
                      </Link>
                    </li>
                    <li className="w-1/5 block px-10">
                      <Link href={"/setting"}>
                        <AiTwotoneSetting className="text-white text-xl" />
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

          <div
            onClick={toggleMenuBox}
            className="w-2/12 lg:hidden text-center font-bold text-black py-0 rounded-md"
          >
            <MdReorder className="text-2xl text-white inline-block" />
          </div>
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
                  <li className="block px-4">
                    <Link href={`/message`}>
                      <BsChatRightTextFill className="text-white text-xl" />
                    </Link>
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
                    <Link href={"/setting"}>
                      <AiTwotoneSetting className="text-white text-xl" />
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
          className="h-screen fixed top-0 left-0 text-slate-400 z-20"
          data-aos="fade-right"
        >
          <div className="shadow-md rounded-md"></div>

          <div className="space-x-4 text-center py-10">
            <Link
              className="py-2 px-4 block w-full rounded-md shadow-md bg-slate-500 nld"
              href={"/dashbord/help"}
              onClick={toggleMenuBox}
            >
              Help?
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
