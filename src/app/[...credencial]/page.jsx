"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProfileHeader from "../Components/CommonComponents/ProfileHeader";
import PublicProfileBody from "./components/PublicProfileBody";

export default function page() {
  const [profileInfo, setProfileInfo] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPublicProfile(id);
        setProfileInfo(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="col-span-3 h-screen overflow-y-auto bg-slate-900 mx-2">
        <ProfileHeader
          coverImage={profileInfo.coverImage}
          profileImage={profileInfo.profileImage}
          fullName={profileInfo.fullName}
          tittle={profileInfo.tittle}
        />

        <PublicProfileBody profileInfo={profileInfo} />
      </div>
    </>
  );
}
