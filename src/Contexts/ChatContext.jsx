"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { getApiCall } from "@/api/fatchData";
import { AuthContex } from "./AuthContex";

export const ChatContext = createContext();

const chatsReducer = (chatstate, action) => {
  switch (action.type) {
    case "ALL_CHAT":
      return { chats: action.payload };
    case "ADD_CHAT":
      return { chats: [...chatstate.chats, action.payload] };
    case "SENDM_ESSAGE":
      console.log(action.payload);
      const newChats = chatstate.chats?.map((chat) => {
        if (chat?._id === action.payload?.id) {
          chat?.messages?.push(action.payload?.data);
          return chat;
        } else {
          return chat;
        }
      });
      return { chats: newChats };
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
    chats: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiCall(`chat/myconversion`);
        const responseData = response?.data || [];

        if (
          !Array.isArray(chatstate.chats) ||
          chatstate.chats.length !== responseData.length
        ) {
          let newChatArray = [];
          for (const chat of response?.data) {
            if (id) {
              const flatChatIds = chat?.chatIds?.flat();
              const friendid = flatChatIds?.find((idd) => idd !== id);

              if (friendid) {
                const profileData = await getApiCall(`user/${friendid}`);
                const newChat = { ...chat, profile: profileData?.data };
                newChatArray.push(newChat);
                chatdispatch({ type: "ALL_CHAT", payload: newChatArray });
              }
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <ChatContext.Provider value={{ chatstate, chatdispatch }}>
      {children}
    </ChatContext.Provider>
  );
}
