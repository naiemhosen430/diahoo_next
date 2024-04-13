"use client";
import axios from "axios";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import UseProfileContext from "./UseProfileContext";

export default function UseGetProfile() {
  const router = useRouter();
  const { dispatch } = UseProfileContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getProfile = async (id) => {
    setError(null);
    setLoading(true);

    await axios.get(`/api/user/${id}`).then((data)=>{
      if (data?.data?.statusCode === 200) {
  
        dispatch({ type: "GET", payload: data?.data?.data });  
        setLoading(false);
      }
    }).catch((error)=>{
      if (error) {
        setError(error?.response?.data?.message);
        setLoading(false);
      }
    })

  };

  return { getProfile, loading, error, setError };
}
