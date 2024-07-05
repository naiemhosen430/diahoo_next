"use client";
import { getApiCall } from "@/api/fatchData";
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer } from "react";

export const AuthContex = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_AUTH_DATA":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default function AuthContexProvider({ children }) {
  const token = getCookie("accesstoken");

  const [state, dispatch] = useReducer(authReducer, {
    me: null,
  });

  useEffect(() => {
    if (token && !state?.me) {
      const fetchData = async () => {
        try {
          const response = await getApiCall("auth/me");
          if (response?.statusCode === 200 && response?.data) {
            dispatch({ type: "ADD_AUTHDATA", payload: response?.data });
          }
        } catch (error) {}
      };

      fetchData();
    }
  }, [token, state]);

  return (
    <AuthContex.Provider value={{ state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
}
