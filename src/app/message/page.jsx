"use client";
import React, { useContext, useEffect, useState } from "react";
import SingleMsg from "./components/SingleMsg";

import { AuthContex } from "@/Contexts/AuthContex";
import Chat from "../Components/Shared/Chat";
import { ChatContext } from "./../../Contexts/ChatContext";

function page() {
  const { chatstate, chatdispatch } = useContext(ChatContext);
  const [selectedSingleMsg, setSelectedSingleMsg] = useState(null);
  const { state } = useContext(AuthContex);
  const user = state?.user;
  const myid = user?._id;

  const openChat = (frndId) => {
    setSelectedSingleMsg(frndId);
  };

  const closeChat = () => {
    setSelectedSingleMsg(null); // Clear selected SingleMsg when closing chat
  };

  return (
    <>
      <div className="col-span-3">
        {!Array.isArray(chatstate?.chats) || chatstate?.chats.length === 0 ? (
          <h1 className="text-slate-600 col-span-3 bg-slate-950 mx-2 text-center px-4 py-20 text-lg">
            You have no chats. Start a conversation now.
          </h1>
        ) : (
          <>
            {chatstate?.chats?.map((perMessageone) => {
              // Find friend ID
              const flatChatIds = perMessageone?.chatIds?.flat();
              const frndId = flatChatIds?.find((id) => id !== myid);

              return (
                <div key={perMessageone?._id}>
                  <div className="chat-container col-span-3">
                    {selectedSingleMsg === frndId && (
                      <Chat friendId={frndId} closeChat={closeChat} />
                    )}
                    <div className="col-span-3 bg-slate-950 mx-2">
                      <SingleMsg
                        openChat={() => openChat(frndId)}
                        friend={perMessageone}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default page;
