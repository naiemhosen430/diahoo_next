"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import UseAuthContext from "./UseAuthContext";
import { useRouter } from "next/navigation";

export default function UseSignUp() {
  const router = useRouter();
  const {dispatch}= UseAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const signUp = async (name, email, password) => {
    setError(null);
    setLoading(true);

   await axios.post(`/api/user/signup`, {
      name,
      email,
      password,
    }).then((response)=>{
      console.log(response)
      if (response?.data.statusCode === 200) {
        setCookie("user", JSON.stringify(response?.data?.data));
  
        dispatch({ type: "SIGNUP", payload: response?.data?.data });
        router.push("/", { scroll: true });
  
        setLoading(false);
      }

    })
    .catch((error)=>{
      console.log(error)

      if (error) {
        setError(error?.response?.data?.message);
        setLoading(false);
      }
    });




  };

  return { signUp, loading, error, setError };
}
