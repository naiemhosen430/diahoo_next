"use client";
import { createContext, useEffect, useReducer, useState } from "react";

export const PostsContex = createContext();

const postsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_POST":
      return { posts: action.payload };
    case "ADD_POST":
      return { posts: action.payload };
    case "DELETE_POST":
      return { posts: action.payload };
    default:
      return state;
  }
};

export default function PostsContextProvider({ children }) {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: null,
  });

  return (
    <PostsContex.Provider value={{ state, dispatch }}>
      {children}
    </PostsContex.Provider>
  );
}
