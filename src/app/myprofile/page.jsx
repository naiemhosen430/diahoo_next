'use client'
import React, { useEffect, useState } from "react";
import ProfileHeader from "../Components/CommonComponents/ProfileHeader";
import ProfileBody from "./Components/ProfileBody";
import UseAuthContext from "@/Hooks/UseAuthContext";

function page() {
    const {user,dispatch}=UseAuthContext()

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