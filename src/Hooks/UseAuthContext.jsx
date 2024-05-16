"use client";
import { AuthContex } from "@/Contexts/AuthContex";
import { userAction } from "@/actions/userAction";
import { postApiCall } from "@/api/fatchData";
import { setCookie } from "cookies-next";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export default function UseAuthContext() {
  const router = useRouter();
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
        const response = await postApiCall("/auth/signup", data);
        setCookie("accesstoken", response?.token);
        console.log(response?.data)
        dispatch(userAction.addMyData, response?.data)
        router.push("/", { scroll: true });
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
