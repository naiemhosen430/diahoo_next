"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import UseAuthContext from "./UseAuthContext";
import { useRouter } from "next/navigation";

export default function UseLogin() {
  const router = useRouter();
  const { dispatch } = UseAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    await axios.post(`/api/user/login`, {
      email,
      password,
    }).then((data)=>{
      if (data?.data?.statusCode === 200) {
        setCookie("user", JSON.stringify(data?.data?.data));
  
        dispatch({ type: "LOGIN", payload: data?.data?.data });

        router.push("/", { scroll: true });
  
        setLoading(false);
      }
    }).catch((error)=>{
      if (error) {
        setError(error?.response?.data?.message);
        setLoading(false);
      }
    })




  };

  return { login, loading, error, setError };
}
