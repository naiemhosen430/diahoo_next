"use client";
import UseAuthContext from "@/Hooks/UseAuthContext";
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
  const {fatchMyData} = UseAuthContext()
  const {state} = useContext(AuthContex)
  const user = state?.user
  const [menuBox, setMenuBox] = useState(false);

  useEffect(()=>{
    fatchMyData()
  },[])
  
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
      <div className="flex sticky text-slate-300 bg-[#5E1607] menu-item-color top-0 nav-bg z-10 justify-center items-center py-2 px-4">
        <div className="lg:w-3/12 w-10/12">
          <Link href={"/"} className="font-bold block text-xl">
            <span className="block text-3xl w-1/6 text-white bolder text-3lg">
              diahoo
            </span>
          </Link>
        </div>


        <div className="lg:w-9/12 hidden lg:flex justify-end  text-right">
          {user ? (
        <>
          <div className="w-10/6">
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
          <div className="w-2/6 flex items-center justify-end">
            <input
              className="px-4 py-2 bg-black border-l-rose-600 text-white rounded-xl shadow w-4/6"
              type="search"
              name="searchValu"
              id="searchValu"
              placeholder="Search your key word...."
              value={searchText}
              onChange={handleSearchInputChange}
            />
            <Link href={`/search/${searchText}`}>
              <button
                className="bg-slate-700 text-rose-50 rounded-xl shadow py-2 px-4"
                type="button"
              >
                Search
              </button>
            </Link>
          </div>

      </>
          
          ):(
<>

<Link
            className="py-2 mx-4 hidden px-8 lg:inline-block rounded-md shadow-md hover:bg-slate-700 bg-transparent border hover:border-0 nav-booking-btn font-bold"
            href={"/signup"}
          >
            Join
          </Link>

          <Link
            className="py-2 mx-4 hidden px-8 lg:inline-block rounded-md shadow-md hover:bg-slate-700 bg-transparent border hover:border-0 nav-booking-btn font-bold"
            href={"/login"}
          >
            Login
          </Link>
</>

          )}

        </div>

        <div
          onClick={toggleMenuBox}
          className="w-2/12 lg:hidden text-center font-bold text-black p-2 py-0 rounded-md hover:bg-slate-400"
        >
          <MdReorder className="text-4xl text-white inline-block" />
        </div>
      </div>

      {menuBox && (
        <div className="h-screen text-slate-400" data-aos="fade-right">
          <div className="shadow-md rounded-md"></div>

          <div className="space-x-4 text-center py-10">
            <Link
              className="py-2 px-4 block w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-500 nav-booking-btn font-bold"
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
