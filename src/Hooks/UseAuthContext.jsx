"use client";
import { AuthContex } from "@/Contexts/AuthContex";
import { userAction } from "@/actions/userAction";
import { postApiCall } from "@/api/fatchData";
import { setCookie } from "cookies-next";
import { useContext, useState } from "react";

export default function UseAuthContext() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {state, dispatch} = useContext(AuthContex);

  if (!state || !dispatch) {
    throw Error("Application Error");
  }

  // for signup hundler 
  const hyndleSignup = async (data) => {
    setLoading(true);
    try {
        const response = await postApiCall("/api/auth/signup", data);
        setCookie("accesstoken", JSON.stringify(response?.token));
        dispatch(userAction.addMyData, response?.data)
        // handleResponse(response);
    } catch (error) {
        setError(error.response?.data?.message || error.message);
    }
    setLoading(false);
};


  return {
    hyndleSignup,
    loading, 
    setLoading,
    error, 
    setError
  };
}
