import React, { useContext, useEffect, useRef, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { getApiCall } from "@/api/fatchData";
import { AuthContex } from "@/Contexts/AuthContex";
import connectIo from "@/api/connectIo";

function Chat({ closeChat, friendId }) {
  const [mychat, setMychat] = useState([]);
  const [friend, setFriend] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [msgid, setMsgid] = useState("");
  const [fullName, setFullName] = useState("no name");
  const chatContainerRef = useRef(null);
  const { state } = useContext(AuthContex);
  const user = state?.user;
  const id = user?._id;

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [mychat]);

  useEffect(() => {
    const fatchData = async () => {
      await getApiCall
        .get(`/api/v1/chat/person/${id}/${friendId}`)
        .then((response) => {
          if (response) {
            setMychat(response.data.data.messages);
            setMsgid(response.data.data._id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fatchData();
  }, [friendId]);

  useEffect(() => {
    const fatchData = async () => {
      const data = await getApiCall(friendId);
      setFriend(data?.data);
      setFullName(data.fullname);
    };
    fatchData();
  }, [friendId]);

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
        status: "send",
        msgid,
      });
      setInputMessage("");
    }
  };

  connectIo().on("updatedMessage", (updatedMessage) => {
    setMychat(updatedMessage.messages);
  });

  return (
    <>
      <div className="bg-black shadow-md rounded-lg fixed bottom-1 z-20 w-3/12 ms-80 h-4/6">
        <div className="bg-slate-950 p-2 flex">
          <HiArrowNarrowLeft
            className="text-gray-50 w-2/12 text-2xl cursor-pointer"
            onClick={closeChat}
          />
          <img
            className="bg-slate-700 rounded-full w-1/12"
            src={friend.profilephoto}
            alt=""
          />
          <h2 className="text-white px-2 w-5/12">
            {fullName.length > 5
              ? `${fullName.substring(0, 5)}...`
              : friend.fullname}
          </h2>

          <div className="w-4/12 flex">
            <BiSolidPhoneCall className="text-gray-50 w-4/12 text-2xl" />
            <BsFillCameraVideoFill className="text-gray-50 w-4/12 text-2xl" />
            <AiTwotoneSetting className="text-gray-50 w-4/12 text-2xl" />
          </div>
        </div>

        <div
          className="h-5/6 w-1/1 overflow-y-auto overflow-x-clip"
          ref={chatContainerRef}
        >
          {mychat.length === 0 ? (
            <h1 className="text-slate-600 text-center px-4 py-40">
              Sorry, You have no messages
            </h1>
          ) : (
            mychat.map((msg) => (
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
            className="text-sm text-white py-2 px-4 w-9/12 bg-slate-900 rounded-md shadow-md"
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
