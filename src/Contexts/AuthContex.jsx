'use client'
import { userAction } from "@/actions/userAction";
import { getApiCall } from "@/api/fatchData";
import { authReducer } from "@/reducers/userReducer";
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer, useState } from "react";
export const AuthContex = createContext();


export default function AuthContexProvider({ children }) {
  const cookieValue = getCookie('accesstoken');


  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });


  return (
    <AuthContex.Provider value={{ state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
}
