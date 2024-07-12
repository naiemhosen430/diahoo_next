"use client";
import { createContext, useEffect, useReducer, useState } from "react";

export const ChatContext = createContext();

const chatsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_CHAT":
      return { chats: action.payload };
    case "ADD_CHAT":
      return { chats: action.payload };
    case "DELETE_CHAT":
      return { chats: action.payload };
    default:
      return state;
  }
};

export default function ChatContextProvider({ children }) {
  const [state, dispatch] = useReducer(chatsReducer, {
    chats: null,
  });

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}
