"use client";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { MdOpenInFull } from "react-icons/md";
import { useRouter } from "next/navigation";
import axios from "axios";
import UseAuthContext from "@/Hooks/UseAuthContext";
import UseLogout from "@/Hooks/UseLogout";
import Spinner from "@/app/Components/Loaders/Spinner";


export default function DashboardNav() {
  const {user} = UseAuthContext()
  const {logout, loading, error} = UseLogout()
  const [spinnerBox, setSpinnerBox] = useState(false);
  const router = useRouter();

  const [mobileNav, setMobileNav] = useState(false);
  const [menuItems, setMenuItems] = useState([
    "Profile",
    "Product list",
    "User list",
    "App setting",
    "Help",
  ]);


  if (!user) {
    return (
      <div className="h-screen hidden w-2/12 bg-slate-900 lg:inline-block p-5">
        <ul>
          <Link
            href={``}
            className="cursor-pointer loading my-2 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-4 px-4 w-full"
          >{" "}</Link>
          {menuItems.map((item) => (
            <Link
              href={``}
              key={item}
              className="cursor-pointer loading my-2 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-4 px-4 w-full"
            >{" "}</Link>
          ))}
          <button

            className="cursor-pointer my-5 bg-slate-800 loading block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-4 px-4 w-full"
          >{" "}</button>
        </ul>
      </div>
    );
  }

  //   onclick
  const toggleNav = () => {
    if (mobileNav === false) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  };

  const handleSubboxClick = (event) => {
    event.stopPropagation();
  };

  const customSignOut = async () => {
    logout()
    setSpinnerBox(true);

  };

  const currecturl = (urltext) => {
    const formattedItem = urltext.replace(" ", "");
    return formattedItem.toString();
  };

  return (
    <>
      {loading && <Spinner />}
      {/* for mobile toggle */}
      <div
        onClick={toggleNav}
        className="border-2 lg:hidden border-blue-950 absolute p-1 my-5 px-4"
      >
        <MdOpenInFull className="text-xl text-white" />
      </div>
      {/* for large device */}
      <div className="h-screen hidden w-2/12 bg-slate-900 lg:inline-block p-5">
        <ul>
          <Link
            href={`/dashboard`}
            className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
          >
            Dashboard
          </Link>
          {menuItems.map((item) => (
            <Link
              href={currecturl(`/dashboard/${item.toLowerCase()}`)}
              key={item}
              className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={customSignOut}
            className="cursor-pointer my-5 bg-slate-800 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
          >
            Sign Out
          </button>
        </ul>
      </div>
      {/* for small device  */}
      {mobileNav && (
        <div
          onClick={toggleNav}
          className=" w-12/12 h-screen z-20 fixed top-0 left-0 w-screen"
        >
          <div
            onClick={handleSubboxClick}
            className="h-screen absolute w-8/12 bg-slate-900 lg:inline-block p-5"
          >
            <ul>
              <Link
                href={`/dashbord`}
                onClick={toggleNav}
                className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
              >
                Dashboard
              </Link>
              {menuItems.map((item) => (
                <Link
                  href={`/dashbord/${item.toLowerCase()}`}
                  onClick={toggleNav}
                  key={item}
                  className="cursor-pointer block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={customSignOut}
                className="cursor-pointer my-5 bg-slate-800 block text-slate-400 hover:text-white hover:bg-slate-700 rounded-md font-bold p-2 px-4 w-full"
              >
                Sign Out
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}