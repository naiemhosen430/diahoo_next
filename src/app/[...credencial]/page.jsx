"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProfileHeader from "../Components/CommonComponents/ProfileHeader";
import PublicProfileBody from "./components/PublicProfileBody";
import { getApiCall } from "@/api/fatchData";

export default function page() {
  const [profileInfo, setProfileInfo] = useState(null);

  let { credencial } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApiCall(`user/${credencial[0]}`);
        setProfileInfo(data?.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [credencial]);


  return (
    <>
      <div className="col-span-3 h-screen overflow-y-auto bg-slate-900 mx-2">
        <ProfileHeader
          coverImage={profileInfo?.coverphoto}
          profileImage={profileInfo?.profilephoto}
          fullName={profileInfo?.fullname}
          tittle={profileInfo?.tittle}
        />

        {profileInfo && <PublicProfileBody profileInfo={profileInfo} />}
      </div>
    </>
  );
}
