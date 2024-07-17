"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { AuthContex } from "@/Contexts/AuthContex";
import connectIo from "@/api/connectIo";
import { ChatContext } from "@/Contexts/ChatContext";
import { generateRandomId } from "@/Utils/generateRandomId";

function Chat({ closeChat, friendId }) {
  const [dataChat, setDataChat] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef(null);
  const { chatstate, chatdispatch } = useContext(ChatContext);
  const allChats = chatstate?.chats;
  const { state } = useContext(AuthContex);
  const user = state?.user;
  const id = user?._id;

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [dataChat]);

  useEffect(() => {
    if (friendId && allChats) {
      const chatData = allChats?.find(
        (data) => data?.profile?._id === friendId
      );
      setDataChat(chatData);
    }
  }, [friendId, allChats]);

  const forMatTime = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
    return `${hours}:${minutes}`;
  };

  // send message
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      connectIo().emit("messageText", {
        mstContent: inputMessage,
        ownerId: id,
        sendtime: new Date(),
        status: "sent",
        id: generateRandomId(10),
        msgid: dataChat?._id,
      });
      setInputMessage("");
    }
  };

  // const messageData = dataChat?.messages?.filter((newMessages)=>{
  //   if (newMessages?.id == ){

  //   }
  // })
  connectIo().on("updatedMessage", (updatedMessage) => {
    if (updatedMessage?.status == 200) {
      chatdispatch({
        type: "SENDM_ESSAGE",
        payload: {
          data: updatedMessage?.data,
          id: dataChat?._id,
        },
      });
    }
  });

  return (
    <>
      <div className="bg-black shadow-md rounded-lg fixed lg:bottom-10 bottom-0 z-20 lg:w-3/12 w-full lg:ms-80 h-screen lg:h-4/6">
        <div className="bg-slate-950 p-2 py-4 flex">
          <HiArrowNarrowLeft
            className="text-gray-50 w-2/12 text-2xl cursor-pointer"
            onClick={closeChat}
          />
          <img
            className="bg-slate-700 rounded-full w-1/12"
            src={
              dataChat?.profile?.profilephoto
                ? dataChat?.profile?.profilephoto
                : "default.jpeg"
            }
            alt=""
          />
          <h2 className="text-white px-2 w-5/12">
            {dataChat?.profile?.fullname?.length > 5
              ? `${dataChat?.profile?.fullname.slice(0, 10)}...`
              : dataChat?.profile?.fullname}
          </h2>

          <div className="w-4/12 flex">
            <BiSolidPhoneCall className="text-gray-50 w-4/12 text-2xl" />
            <BsFillCameraVideoFill className="text-gray-50 w-4/12 text-2xl" />
            <AiTwotoneSetting className="text-gray-50 w-4/12 text-2xl" />
          </div>
        </div>

        <div
          className="h-5/6 w-1/1 overflow-y-auto custom-scrollbar-hidden overflow-x-clip"
          ref={chatContainerRef}
        >
          {dataChat?.messages?.length === 0 ? (
            <h1 className="text-slate-600 text-center px-4 py-40">
              Sorry, You have no messages
            </h1>
          ) : (
            dataChat?.messages?.map((msg) => (
              <div
                key={msg.sendtime}
                className={`p-2 ${
                  msg.ownerId === friendId ? "" : "text-right"
                }`}
              >
                <div className="py-1 px-4">
                  <div className="inline-block bg-fuchsia-950 px-2 py-1 rounded-lg">
                    <h4 className="text-white text-left">{msg.mstContent}</h4>
                    <p className="text-right text-slate-500 text-xs">
                      {forMatTime(msg.sendtime)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex">
          <input
            className="text-sm text-white py-3 px-4 w-9/12 bg-slate-900 rounded-md shadow-md"
            type="text"
            placeholder="Type your message...."
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
          />
          <button
            className="text-white text-sm py-2 px-4 bg-slate-800 w-3/12 rounded-md"
            type="button"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(Chat);
