"use client";
import React, { useEffect, useState, useContext } from "react";
import ProfileHeader from "../CommonComponents/ProfileHeader";
import ButtonBox from "../CommonComponents/ButtonBox";
import CreatePost from "../CommonComponents/Post/CreatePost";
import CreateNote from "../CommonComponents/Note/CreateNote";
import MyNote from "../CommonComponents/Note/MyNote";
import { AuthContex } from "@/Contexts/AuthContex";

function LeftSideBer() {
  const { state } = useContext(AuthContex);
  const user = state?.user;
  console.log(user);

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

  const coverImagee = false;
  if (!user) {
    return (
      <div className="lg:col-span-2 lg:block hidden text-zinc-50 p-4"></div>
    );
  }
  return (
    <>
      {createboxshow && <CreatePost closecreatepostbox={closecreatepostbox} />}
      {showaddnoteboxalert && (
        <CreateNote closecreatenotebox={closecreatenotebox} />
      )}
      {showmynoteboxalert && <MyNote closecreatenotebox={closecreatenotebox} />}

      <div className="lg:col-span-2 lg:block hidden text-zinc-50 p-4 bg-slate-950">
        <ProfileHeader
          coverImage={coverImagee}
          profileImage={user?.profilephoto}
          fullName={user?.fullname}
          tittle={user?.tittle}
        />
        <ButtonBox
          postsomething={postsomething}
          showaddnotebox={showaddnotebox}
          showmynotebox={showmynotebox}
        />
      </div>
    </>
  );
}

export default LeftSideBer;
