"use client";
import React, { useEffect, useState, useContext } from "react";
import ProfileHeader from "../CommonComponents/ProfileHeader";
import ButtonBox from "../CommonComponents/ButtonBox";
import CreatePost from "../CommonComponents/Post/CreatePost";
import CreateNote from "../CommonComponents/Note/CreateNote";
import MyNote from "../CommonComponents/Note/MyNote";
import Link from "next/link";
import { AuthContex } from "@/Contexts/AuthContex";
import { StateContext } from "@/Contexts/StateContext";

function LeftSideBer() {
  const { state } = useContext(AuthContex);
  const {
    toggleCreatePostBox,
    createboxshow,
    showaddnoteboxalert,
    toggleAddNodeBox,
    showmynoteboxalert,
toggleMyNodeBox
  } = useContext(StateContext);

  const user = state?.user;

  if (!user) {
    return (
      <div className="lg:col-span-2 lg:block hidden text-zinc-50 p-4"></div>
    );
  }
  return (
    <>
      <div className="">
        {createboxshow && (
          <CreatePost toggleCreatePostBox={toggleCreatePostBox} />
        )}
        {showaddnoteboxalert && (
          <CreateNote toggleAddNodeBox={toggleAddNodeBox} />
        )}
        {showmynoteboxalert && (
          <MyNote toggleMyNodeBox={toggleMyNodeBox} />
        )}

        <div className="lg:col-span-2 lg:block hidden text-zinc-50 p-4">
          <ProfileHeader
            profileImage={user?.profilephoto}
            fullName={user?.fullname}
            tittle={user?.tittle}
            id={user?._id}
          />
          <ButtonBox
            toggleCreatePostBox={toggleCreatePostBox}
            toggleAddNodeBox={toggleAddNodeBox}
            toggleMyNodeBox={toggleMyNodeBox}
          />
          <div className="px-10">
            <ul className="my-4">
              <Link href={"/myprofile"}>
                <li className="text-lg text-white py-2 px-4 cursor-pointer rounded hover:bg-red-700 shadow">
                  profile
                </li>
              </Link>
              <Link href={"/message"}>
                <li className="text-lg text-white py-2 px-4 cursor-pointer rounded hover:bg-red-700 shadow">
                  Message
                </li>
              </Link>
              <Link href={"/friend"}>
                <li className="text-lg text-white py-2 px-4 cursor-pointer rounded hover:bg-red-700 shadow">
                  Friend
                </li>
              </Link>
              <Link href={"/video"}>
                <li className="text-lg text-white py-2 px-4 cursor-pointer rounded hover:bg-red-700 shadow">
                  Video
                </li>
              </Link>
              <Link href={"/rendompeople"}>
                <li className="text-lg text-white py-2 px-4 cursor-pointer rounded hover:bg-red-700 shadow">
                  Rendom People
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBer;
