'use client'
import { authReducer } from "@/reducers/userReducer";
import { createContext, useEffect, useReducer, useState } from "react";
export const AuthContex = createContext();


export default function AuthContexProvider({ children }) {



  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const fatchMyData = async () => {
    try {
      const response = await getApiCall("/auth/me")
      console.log(response?.data)
      console.log(userAction.addMyData)
      dispatch(userAction.addMyData, response?.data)
    } catch (error) {
      router.push("/login", { scroll: true });
    }
  }

  
  useEffect(()=>{
    fatchMyData()
  },[])
  

  return (
    <AuthContex.Provider value={{ state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
}
