'use client'
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContex = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: action.payload };
    case "SIGNUP":
      return { user: action.payload };

    default:
      return state;
  }
};

export default function AuthContexProvider({ children }) {
  const cookieValue = getCookie('user');
  const initialUser = cookieValue ? JSON.parse(cookieValue) : null;

  const [state, dispatch] = useReducer(authReducer, {
    user: initialUser,
  });


  return (
    <AuthContex.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
}
