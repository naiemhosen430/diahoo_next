"use client";
import { createContext, useEffect, useReducer } from "react";
import { getApiCall } from "@/api/fatchData";
import { AuthContex } from "./AuthContex";

export const ChatContext = createContext();

const chatsReducer = (chatstate, action) => {
  switch (action.type) {
    case "ALL_CHAT":
      return { chats: action.payload };
    case "ADD_CHAT":
      return { chats: [...chatstate.chats, action.payload] };
    case "DELETE_CHAT":
      return {
        chats: chatstate.chats.filter((chat) => chat._id !== action.payload),
      };
    default:
      return chatstate;
  }
};

export default function ChatContextProvider({ children }) {
  const { state } = useContext(AuthContex);
  const user = state?.user;
  const id = user?._id;
  const [chatstate, chatdispatch] = useReducer(chatsReducer, {
    chats: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiCall(`chat/myconversion`);
        const responseData = response?.data || [];
        console.log(response?.data);
        if (
          !Array.isArray(chatstate.chats) ||
          chatstate.chats.length !== responseData.length
        ) {
          let newChatArray = [];
          for (const chat in response?.data) {
            const friendid = chat?.chatIds?.find((idd) => id != idd);

            if (friendid) {
              const data = await getApiCall(`user/${friendid}`);
            }

            const newChat = { ...chat, profile: data?.data };
            newChatArray.push(newChat);
            chatdispatch({ type: "ALL_CHAT", payload: newChatArray });
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ChatContext.Provider value={{ chatstate, chatdispatch }}>
      {children}
    </ChatContext.Provider>
  );
}
