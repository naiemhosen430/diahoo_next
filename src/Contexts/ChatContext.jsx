"use client";
import { createContext, useEffect, useReducer } from "react";
import { getApiCall } from "@/api/fatchData";

export const ChatContext = createContext();

const chatsReducer = (chatstate, action) => {
  switch (action.type) {
    case "ALL_CHAT":
      return { chats: action.payload };
    case "ADD_CHAT":
      return { chats: [...chatstate.chats, action.payload] };
    case "DELETE_CHAT":
      return { chats: chatstate.chats.filter(chat => chat._id !== action.payload) };
    default:
      return chatstate;
  }
};

export default function ChatContextProvider({ children }) {
  const [chatstate, chatdispatch] = useReducer(chatsReducer, {
    chats: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiCall(`chat/myconversion`);
        const responseData = response?.data || [];
        console.log(response?.data);
        if (!Array.isArray(chatstate.chats) || chatstate.chats.length !== responseData.length) {
          chatdispatch({ type: "ALL_CHAT", payload: responseData });
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
