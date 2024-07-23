"use client";
import { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import ProfileHeader from "../Components/CommonComponents/ProfileHeader";
import PublicProfileBody from "./components/PublicProfileBody";
import { getApiCall } from "@/api/fatchData";
import { AuthContex } from "@/Contexts/AuthContex";

export default function page() {
  const [profileInfo, setProfileInfo] = useState(null);
  const { state, dispatch } = useContext(AuthContex);
  const user = state?.user;
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

  if (!user || !profileInfo){
    return <h1>Loading....</h1>
  }
  return (
    <>
      <div className="col-span-3 h-screen custom-scrollbar-hidden overflow-y-auto bg-slate-900 mx-2">
        <ProfileHeader
          coverImage={profileInfo?.coverphoto}
          profileImage={profileInfo?.profilephoto}
          fullName={profileInfo?.fullname}
          tittle={profileInfo?.tittle}
        />

        {profileInfo && <PublicProfileBody profileInfo={profileInfo} setProfileInfo={setProfileInfo} />}
      </div>
    </>
  );
}
