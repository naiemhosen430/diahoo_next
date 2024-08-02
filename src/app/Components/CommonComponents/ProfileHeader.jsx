"use client";

import { useEffect, useState } from "react";
import connectIo from "@/api/connectIo";

function ProfileHeader({ coverImage, profileImage, fullName, tittle, id }) {
  const [online, setOnline] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (id) {
      // Initialize WebSocket connection
      const socketIo = connectIo();
      setSocket(socketIo);

      // Request user status
      socketIo.emit("getUserStatus", { userId: id });

      // Handle status response
      socketIo.on("userStatusResponse", (status) => {
        if (status.status === "online") {
          setOnline(true);
        } else {
          setOnline(false);
        }
      });

      // Cleanup on unmount
      return () => {
        socketIo.disconnect();
      };
    }
  }, [id]);

  return (
    <div className="text-center">
      <div className="coverImage h-32 overflow-hidden flex items-center justify-center">
        <img
          className="block w-full bg-slate-700"
          src={coverImage ? coverImage : "cover.jpeg"}
          alt="Cover Image"
        />
      </div>
      <div className="profileImage mt-[-50px] flex items-center justify-center">
        <div className="h-20 relative w-20 bg-slate-500 rounded-full">
          <img
            className="h-20 relative w-20"
            src={profileImage}
            alt="Profile Image"
          />
          <div
            style={{
              backgroundColor: online ? "green" : "",
            }}
            className="h-5 w-5 border-2 absolute bottom-0 right-0 rounded-full"
          ></div>
        </div>
      </div>
      <div className="coverImage">
        <h1 className="text-2xl text-white">{fullName}</h1>
        <h1 className="text-slate-400 text-sm">{tittle}</h1>
      </div>
    </div>
  );
}

export default ProfileHeader;
