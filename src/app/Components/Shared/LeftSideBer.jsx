"use client";
import React, { useEffect, useState, useContext } from "react";
import ProfileHeader from "../CommonComponents/ProfileHeader";
import ButtonBox from "../CommonComponents/ButtonBox";
import CreatePost from "../CommonComponents/Post/CreatePost";
import CreateNote from "../CommonComponents/Note/CreateNote";
import MyNote from "../CommonComponents/Note/MyNote";
import Link from "next/link";
import { AuthContex } from "@/Contexts/AuthContex";

function LeftSideBer() {
  const { state } = useContext(AuthContex);
  const user = state?.user;


  const [createboxshow, setCreateboxshow] = useState(false);
  const [showaddnoteboxalert, setShowaddnoteboxalert] = useState(false);
  const [showmynoteboxalert, setShowmynoteboxalert] = useState(false);

  // hundle onclick
  function postsomething() {
    setCreateboxshow(true);
  }
  function closecreatepostbox() {
    setCreateboxshow(false);
  }
  function showaddnotebox() {
    setShowaddnoteboxalert(true);
  }
  function closecreatenotebox() {
    setShowmynoteboxalert(false);
    setShowaddnoteboxalert(false);
  }
  function showmynotebox() {
    setShowmynoteboxalert(true);
  }

  if (!user) {
    return (
      <div className="lg:col-span-2 lg:block hidden text-zinc-50 p-4"></div>
    );
  }
  return (
    <>
      <div className="">
        {createboxshow && (
          <CreatePost closecreatepostbox={closecreatepostbox} />
        )}
        {showaddnoteboxalert && (
          <CreateNote closecreatenotebox={closecreatenotebox} />
        )}
        {showmynoteboxalert && (
          <MyNote closecreatenotebox={closecreatenotebox} />
        )}

        <div className="lg:col-span-2 lg:block hidden text-zinc-50 p-4">
          <ProfileHeader
            profileImage={user?.profilephoto}
            fullName={user?.fullname}
            tittle={user?.tittle}
          />
          <ButtonBox
            postsomething={postsomething}
            showaddnotebox={showaddnotebox}
            showmynotebox={showmynotebox}
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
