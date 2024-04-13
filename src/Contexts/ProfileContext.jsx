'use client'
import { createContext, useEffect, useReducer, useState } from "react";

export const ProfileContex = createContext();

const profileReducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return { profile: action.payload };
    case "ADDFRIEND":
      return { profile: action.payload };
    case "REMOVEFRIEND":
      return { profile: action.payload };
    case "ACCEPTFRIEND":
        return { profile: action.payload };
    case "BLOCKFRIEND":
      return { profile: action.payload };
    case "UNBLOCKFRIEND":
        return { profile: action.payload };
  
    default:
      return state;
  }
};

export default function ProfileContextProvider({ children }) {


  const [state, dispatch] = useReducer(profileReducer, {
    profile: null,
  });


  return (
    <ProfileContex.Provider value={{ profile: state.profile, dispatch }}>
      {children}
    </ProfileContex.Provider>
  );
}
