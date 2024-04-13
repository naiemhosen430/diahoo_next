'use client'
import React, { useEffect, useState } from "react";
import ProfileHeader from "../CommonComponents/ProfileHeader";
import ButtonBox from "../CommonComponents/ButtonBox";
import UseAuthContext from "@/Hooks/UseAuthContext";
import CreatePost from "../CommonComponents/Post/CreatePost";
import CreateNote from "../CommonComponents/Note/CreateNote";
import MyNote from "../CommonComponents/Note/MyNote";


function LeftSideBer() {
  const {user,dispatch}=UseAuthContext()
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

  useEffect(() => {
    const fatchData = async () => {
      const data = await GetProfile();
      setUserInfo({
        profileImage: data.profilephoto,
        fullName: data.fullname,
        tittle: data.tittle,
      });
    };

    fatchData();
  }, []);

  const coverImagee = false;
  if (!user){
    return null
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