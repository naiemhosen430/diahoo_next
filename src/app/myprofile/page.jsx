"use client";
import React, { useContext } from "react";
import { AuthContex } from "@/Contexts/AuthContex";
import ProfileHeader from "../Components/CommonComponents/ProfileHeader";
import ProfileBody from "./Components/ProfileBody";

function page() {
  const { state, dispatch } = useContext(AuthContex);
  const { user } = state;

  if (!user) {
    return <h1 className="text-white text-center">Loading....</h1>;
  }

  return (
    <div className=" h-screen overflow-y-auto custom-scrollbar-hidden bg-slate-950 mx-2">
      <ProfileHeader
        coverImage={user?.coverImage}
        profileImage={user?.profileImage}
        fullName={user?.fullName}
        tittle={user?.tittle}
      />

      <ProfileBody />
    </div>
  );
}

export default page;
