'use client'
import React, { useEffect, useState } from "react";
import ProfileHeader from "../Components/CommonComponents/ProfileHeader";
import ProfileBody from "./Components/ProfileBody";
import UseAuthContext from "@/Hooks/UseAuthContext";
import UseGetProfile from "@/Hooks/Profile/UseGetProfile";

function page() {
  const { user } = UseAuthContext();
    const { profile, loading, error, getProfile } = UseGetProfile(); 
    console.log(profile)

    useEffect(() => {
        if (user) {
            getProfile(user.id); 
        }
    }, [user]);

    if (loading || !profile) {
        return <h1 className="text-white text-center">Loading....</h1>; 
    }

    if (error) {
        return <h1 className="text-white text-center">Error: {error}</h1>; 
    }
  return (
    <div className=" h-screen overflow-y-auto custom-scrollbar-hidden bg-slate-950 mx-2">
      <ProfileHeader
        coverImage={profile?.coverImage}
        profileImage={profile?.profileImage}
        fullName={profile?.fullName}
        tittle={profile?.tittle}
      />

      <ProfileBody />
    </div>
  );
}

export default page;