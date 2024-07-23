"use client";
import React, { useContext, useEffect } from "react";
import ChatLoader from "./../Components/Loaders/ChatLoader";
import SingleNtf from "./components/SingleMsg";
import { NtfContext } from "@/Contexts/NtfContext";
import UseAuthContext from "@/Hooks/UseAuthContext";
function page() {
  const { ntfstate } = useContext(NtfContext);
  const { hundleUpdateProfile } = UseAuthContext();

  useEffect(() => {
    const fatchData = async () => {
      await hundleUpdateProfile({
        ntfseen: ntfstate.ntf?.length,
      });
    };
    if (ntfstate) {
      fatchData();
    }
  }, [ntfstate]);

  return (
    <>
      <div className="col-span-3">
        {!ntfstate?.ntf ? (
          <div>
            {Array(7)
              .fill()
              .map((_, index) => (
                <ChatLoader key={index} />
              ))}
          </div>
        ) : ntfstate.ntf.length === 0 ? (
          <h1 className="text-slate-600 col-span-3 mx-2 text-center px-4 py-20 text-lg">
            You have no notification.
          </h1>
        ) : (
          ntfstate.ntf.map((ntf) => {
            return (
              <div key={ntf?._id} className="chat-container col-span-3">
                <div className="col-span-3 mx-2">
                  <SingleNtf ntf={ntf} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default page;
