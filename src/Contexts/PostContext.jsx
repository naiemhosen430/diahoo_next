"use client";
import { createContext, useEffect, useReducer, useState } from "react";

export const PostsContex = createContext();

const profileReducer = (state, action) => {
  switch (action.type) {
    case "ALL_POST":
      return { profile: action.payload };
    case "ADD_POST":
      return { profile: action.payload };
    case "DELETE_POST":
      return { profile: action.payload };
    default:
      return state;
  }
};

export default function PostsContextProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, {
    posts: null,
  });

  return (
    <PostsContex.Provider value={{ state, dispatch }}>
      {children}
    </PostsContex.Provider>
  );
}
