"use client";
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer } from "react";
import { getApiCall } from "@/api/fatchData";
import connectIo from "@/api/connectIo";

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
    user: null,
  });

  useEffect(() => {
    if (token && !state?.user) {
      const fetchData = async () => {
        try {
          const response = await getApiCall("auth/me");
          if (response?.statusCode === 200 && response?.data) {
            dispatch({ type: "ADD_AUTH_DATA", payload: response?.data });
          }
        } catch (error) {}
      };

      fetchData();
    }
  }, [token, state]);

  if ((token, state.user)) {
    connectIo().on(state.user?._id, (updatedData) => {
      if (updatedData?.status == 200) {
        console.log({ updatedData });
        dispatch({
          type: "ADD_AUTH_DATA",
          payload: updatedData?.data,
        });
      }
    });
  }

  return (
    <AuthContex.Provider value={{ state, dispatch }}>
      {children}
    </AuthContex.Provider>
  );
}
