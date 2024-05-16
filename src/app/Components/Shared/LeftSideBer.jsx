'use client'
import React, { useEffect, useState, useContext } from "react";
import ProfileHeader from "../CommonComponents/ProfileHeader";
import ButtonBox from "../CommonComponents/ButtonBox";
import CreatePost from "../CommonComponents/Post/CreatePost";
import CreateNote from "../CommonComponents/Note/CreateNote";
import MyNote from "../CommonComponents/Note/MyNote";
import { AuthContex } from "@/Contexts/AuthContex";


function LeftSideBer() {
  const {state} = useContext(AuthContex)
  const user = state?.user
  const [userInfo, setUserInfo] = useState({
    profileImage: "",
    fullName: "",
    tittle: "",
  });
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

  // useEffect(() => {
  //   const fatchData = async () => {
  //     const data = await GetProfile();
  //     setUserInfo({
  //       profileImage: data.profilephoto,
  //       fullName: data.fullname,
  //       tittle: data.tittle,
  //     });
  //   };

  //   fatchData();
  // }, []);

  const coverImagee = false;
  if (!user){
    return (
      <div className="lg:col-span-2 lg:block hidden text-zinc-50 p-4">
          <div className="lg:block p-5 lg:mr-0 ">
          <h1 className="text-slate-500 lg:text-3xl text-2xs font-bold text-center">
            Welcome back to Diahoo
          </h1>
          <p className="text-slate-600 lg:block hidden p-5">
            Welcome back to diahoo of your digital life! 🌐 Log in to reconnect
            with friends, share your latest adventures, and stay in the loop
            with the moments that matter most. Your community awaits—let's dive
            back into the conversation! #StayConnected 📱💬
          </p>
        </div>
      </div>
    )
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
          profileImage={userInfo.profileImage}
          fullName={userInfo.fullName}
          tittle={userInfo.tittle}
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