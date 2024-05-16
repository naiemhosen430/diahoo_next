'use client'
import { userAction } from "@/actions/userAction";
import { getApiCall } from "@/api/fatchData";
import { authReducer } from "@/reducers/userReducer";
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer, useState } from "react";
export const AuthContex = createContext();


export default function AuthContexProvider({ children }) {
  const cookieValue = getCookie('user');


  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(()=>{
    if (cookieValue){
      const response = getApiCall("/auth/me")
      if (response?.data?.data){
        dispatch(userAction.addMyData, response.data.data)
      }
    }
  },[cookieValue])


  return (
    <AuthContex.Provider value={{ state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
}
